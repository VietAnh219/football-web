import { useQuery } from "@tanstack/react-query";
import { db } from '@/firebase';
import { doc, getDoc } from "firebase/firestore";

const fetchHighLightFromFirestore = async () => {
    if (!db) {
        throw new Error("Firestore DB is not initialized.");
    }

    const leagueDocRef = doc(db, "highlights", "highlights");
    const leagueSnap = await getDoc(leagueDocRef);

    if (!leagueSnap.exists()) {
        console.log(`No league found for league code:}`)
        return null;
    }

    const leagueData = leagueSnap.data();

    return leagueData;

}

export const useHighLights = () => {
    return useQuery({
        queryKey: ['highlight'],
        queryFn: () => fetchHighLightFromFirestore(),
        staleTime: 1000 * 60 * 5,
        enabled: !!db,
    });
};