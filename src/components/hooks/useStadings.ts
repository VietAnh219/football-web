// import api from '@/lib/axios';
// import { useQuery } from '@tanstack/react-query';


// export const useStading = (league: string) => {
//     return useQuery({
//         queryKey: ['stadings', league],
//         queryFn: async () => {
//             const response = await api.get(`/standings?competitionCode=${league}`)
//             return response.data[0]
//         },
//         staleTime: 1000 * 60 * 5,
//     })
// }

import { db } from '@/firebase';
import { StandingResponse, StandingTableItem } from '@/types/stading';
import { useQuery } from '@tanstack/react-query';
import { collection, doc, getDocs, getDoc, query, orderBy } from 'firebase/firestore';

const fetchStandingFromFirestore = async (leagueCode: string): Promise<StandingResponse | null> => {
    if (!db) {
        throw new Error("Firestore DB is not initialized.");
    }

    if (!leagueCode) {
        console.warn("League code is required to fetch standings.");
        return null;
    }

    const standingDocRef = doc(db, 'standings', leagueCode);
    const standingSnap = await getDoc(standingDocRef);

    if (!standingSnap.exists()) {
        console.warn(`No standing found for league code: ${leagueCode}`);
        return null;
    }

    const standingData = standingSnap.data();

    const teamsRef = collection(standingDocRef, 'teams');
    const orderedTeamsQuery = query(teamsRef, orderBy('position'));
    const teamsSnap = await getDocs(orderedTeamsQuery);

    const teamsTable: StandingTableItem[] = teamsSnap.docs.map((teamDoc) => ({
        id: teamDoc.id,
        ...(teamDoc.data() as Omit<StandingTableItem, 'id'>),
    }));

    const fullStanding: StandingResponse = {
        competitionCode: leagueCode,
        ...(standingData as Omit<StandingResponse, 'competitionCode' | 'table'>),
        table: teamsTable,
    };

    return fullStanding;

};

export const useStading = (league: string) => {
    return useQuery({
        queryKey: ['standings', league],
        queryFn: () => fetchStandingFromFirestore(league),
        staleTime: 1000 * 60 * 5,
        enabled: !!league && !!db,
    });
};
