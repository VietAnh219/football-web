import { useQuery } from "@tanstack/react-query";
import { db } from '@/firebase';
import { doc, getDoc } from "firebase/firestore";

const fetchClubFromFirestore = async (leagueCode: string) => {
    if (!db) {
        throw new Error("Firestore DB is not initialized.");
    }

    if (!leagueCode) {
        console.warn("League code is required to fetch standings.");
        return null;
    }

    const leagueDocRef = doc(db, "clubs", leagueCode);
    const leagueSnap = await getDoc(leagueDocRef);

    if (!leagueSnap.exists()) {
        console.log(`No league found for league code: ${leagueCode}`)
        return null;
    }

    const leagueData = leagueSnap.data();

    return leagueData;

}

export const useClubs = (league: string) => {
    return useQuery({
        queryKey: ['clubs', league],
        queryFn: () => fetchClubFromFirestore(league),
        staleTime: 1000 * 60 * 5,
        enabled: !!league && !!db,
    });
};