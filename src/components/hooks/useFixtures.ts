import { db } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useQuery } from '@tanstack/react-query';
import { Fixture } from '@/types/fixtures';

export const fetchFixturesFromFirestore = async (
    leagueCode: string,
    matchDay: string
): Promise<Fixture[] | null> => {
    if (!db) throw new Error("Firestore DB not initialized.");
    if (!leagueCode || !matchDay) return null;

    const docRef = doc(db, 'fixtures', leagueCode, 'matchDays', matchDay);
    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) {
        console.warn(`No fixtures found for league ${leagueCode}, matchDay ${matchDay}`);
        return null;
    }

    const data = snapshot.data();
    return data.fixtures || [];
};


export const useFixtures = (leagueCode: string, matchDay?: string) => {
    return useQuery({
        queryKey: ['fixtures', leagueCode, matchDay],
        queryFn: () => fetchFixturesFromFirestore(leagueCode, matchDay ?? ""),
        enabled: !!db && !!leagueCode && !!matchDay,
        staleTime: 1000 * 60 * 5,
    });
};
