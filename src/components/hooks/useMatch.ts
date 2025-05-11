import { database, db } from '@/firebase';
import { useQuery } from '@tanstack/react-query';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { MatchDataType } from '@/types/match';
import { get, ref } from 'firebase/database';

const fetchMatchesFromCollection = async (collectionName: string): Promise<MatchDataType[]> => {
    if (!db) {
        throw new Error("Firestore DB is not initialized.");
    }

    if (!collectionName) {
        throw new Error("Collection name is required.");
    }

    const matchesCollectionRef = collection(db, collectionName);
    const matchesQuery = query(matchesCollectionRef, orderBy('utcDate'));

    const matchesSnap = await getDocs(matchesQuery);

    const matches: MatchDataType[] = matchesSnap.docs.map((doc) => ({
        id: Number(doc.id),
        ...(doc.data() as Omit<MatchDataType, 'id'>),
    }));

    return matches;
};

const fetchLiveMatches = async (): Promise<MatchDataType[]> => {
    const liveRef = ref(database, 'liveMatches');
    const snapshot = await get(liveRef);
    const data = snapshot.val();
    return data ?? [];
};


export const useGetMatches = ({ endpointMatch }: { endpointMatch: string }) => {
    // console.log(endpointMatch)
    const isLive = endpointMatch === 'liveMatches';
    return useQuery<MatchDataType[]>({
        queryKey: ['matches', endpointMatch],
        queryFn: () =>
            isLive
                ? fetchLiveMatches()
                : fetchMatchesFromCollection(endpointMatch),
        staleTime: isLive ? 0 : 1000 * 60 * 5,
        enabled: !!endpointMatch,
    });
};

