export type LeagueStore = {
    selectedLeague: string | null,
    setSelectedLeague: (league: string) => void;
}