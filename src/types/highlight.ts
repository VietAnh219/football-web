export type HighlightItem = {
    id: string;
    title: string;
    thumbnail: string;
    link: string;
    time: string;
};

export type LeagueHighlights = {
    [leagueName: string]: HighlightItem[];
};

// type HighlightsData = {
//     highlights: LeagueHighlights;
// };


export type HighLightStore = {
    selectedHighLight: HighlightItem | null,
    setSelectedHighLight: (highlight: HighlightItem) => void;

}

export type TotalHighLightStore = {
    selectedTotalHighLight: HighlightItem[] | null,
    setSelectedTotalHighLight: (highlights: HighlightItem[]) => void;
}


