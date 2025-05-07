import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

interface ThemeStore {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
    persist(
        (set, get) => ({
            theme: "light",
            setTheme: (theme) => {
                document.documentElement.setAttribute("data-theme", theme);
                set({ theme });
            },
            toggleTheme: () => {
                const newTheme = get().theme === "light" ? "dark" : "light";
                document.documentElement.setAttribute("data-theme", newTheme);
                set({ theme: newTheme });
            },
        }),
        {
            name: "theme-storage",
        }
    )
);
