import { MatchDataType } from "./match";

export type TabKey = "Latest Match" | "Coming Match" | "Pre-season" | "Live Games";

export interface TabContentProps {
    selectedTab: TabKey;
    matchData: MatchDataType[];
}