import { ClubStore } from "@/types/club";
import { create } from "zustand";
import { persist } from 'zustand/middleware'


export const useClubDetailStore = create<ClubStore>()(
    persist(
        (set) => ({
            selectedClub: null,
            setSelectedClub: (club) => set({ selectedClub: club }),
        }),
        {
            name: 'club-storage',
        }
    )
)