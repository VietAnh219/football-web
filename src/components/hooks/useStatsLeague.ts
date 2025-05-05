import { db } from '@/firebase';
import { ClubStats, Player, StatLeagueResponse } from '@/types/stat';
import { useQuery } from '@tanstack/react-query';
import { doc, getDoc } from 'firebase/firestore';

const fetchStatsFromFirestore = async (leagueCode: string): Promise<StatLeagueResponse | null> => {
    if (!db) throw new Error("Firestore DB is not initialized.");
    if (!leagueCode) return null;

    const statsDocRef = doc(db, 'stats', leagueCode);
    const statsSnap = await getDoc(statsDocRef);

    if (!statsSnap.exists()) {
        console.warn(`No stats found for league code: ${leagueCode}`);
        return null;
    }

    const statsData = statsSnap.data() as StatLeagueResponse;

    const sortedPlayerStats = (statsData.playerStats || []).map(statGroup => ({
        ...statGroup,
        players: [...statGroup.players].sort((a: Player, b: Player) => a.rank - b.rank),
    }));

    const sortedClubStats = (statsData.clubStats || []).map(statGroup => ({
        ...statGroup,
        clubs: [...statGroup.clubs].sort((a: ClubStats, b: ClubStats) => a.rank - b.rank),
    }));

    return {
        name: statsData.name,
        code: statsData.code,
        playerStats: sortedPlayerStats,
        clubStats: sortedClubStats,
    };
};


export const useStatsLeague = (league: string) => {
    return useQuery({
        queryKey: ['statsleague', league],
        queryFn: () => fetchStatsFromFirestore(league),
        staleTime: 1000 * 60 * 5,
        enabled: !!db,
    });
};