import { HighLightStore, TotalHighLightStore } from "@/types/highlight";
import { create } from "zustand";
import { persist } from 'zustand/middleware'

export const useHighLightStore = create<HighLightStore>()(
    persist(
        (set) => ({
            selectedHighLight: null,
            setSelectedHighLight: (highLight) => set({ selectedHighLight: highLight }),
        }),
        {
            name: 'highLight-storage',
        }
    )
)

export const useTotalHighLightStore = create<TotalHighLightStore>()(
    persist(
        (set) => ({
            selectedTotalHighLight: null,
            setSelectedTotalHighLight: (highLights) => set({ selectedTotalHighLight: highLights }),
        }),
        {
            name: 'highLights-storage',
        }
    )
)