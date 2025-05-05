import { MatchStore } from "@/types/match";
import { create } from "zustand";
import { persist } from 'zustand/middleware'


export const useMatchStore = create<MatchStore>()(
    persist(
        (set) => ({
            selectedMatch: null,
            setSelectedMatch: (match) => set({ selectedMatch: match }),
        }),
        {
            name: 'match-storage',
        }
    )
)