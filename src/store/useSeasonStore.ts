import { LeagueStore } from "@/types/league";
import { create } from "zustand";
import { persist } from 'zustand/middleware'

export const useLeagueStore = create<LeagueStore>()(
    persist(
        (set) => ({
            selectedLeague: null,
            setSelectedLeague: (league) => set({ selectedLeague: league }),
        }),
        {
            name: 'league-storage',
        }
    )
)