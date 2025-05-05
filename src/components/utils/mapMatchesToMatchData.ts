import { MatchComing, MatchDataType } from "@/types/match";
import { formatUTCDate } from "./formatUTCDate";
import { formatUTCTime } from "./formatUTCTime";


export const mapComingMatchesToMatchData = (comingMatches: MatchComing[]): MatchDataType[] => {
    return comingMatches?.map(({ homeTeam, awayTeam, utcDate, ...rest }) => ({
        status: "Upcoming",
        home: homeTeam,
        away: awayTeam,
        time: formatUTCTime(utcDate),
        day: formatUTCDate(utcDate),
        ...rest
    })) as unknown as MatchDataType[];
};

export const mapLatestMatchesToMatchData = (latestMatches: MatchComing[]): MatchDataType[] => {
    return latestMatches?.map(({ homeTeam, awayTeam, utcDate, ...rest }) => ({
        status: "Full-time",
        home: homeTeam,
        away: awayTeam,
        time: formatUTCTime(utcDate),
        day: formatUTCDate(utcDate),
        ...rest
    })) as unknown as MatchDataType[];
};

export const mapLiveMatchesToMatchData = (livesMatches: MatchComing[]): MatchDataType[] => {
    return livesMatches?.map(({ homeTeam, awayTeam, utcDate, ...rest }) => ({
        status: "Live",
        home: homeTeam,
        away: awayTeam,
        time: formatUTCTime(utcDate),
        day: formatUTCDate(utcDate),
        ...rest
    })) as unknown as MatchDataType[];
};

export const mapPreMatchesToMatchData = (latestMatches: MatchComing[]): MatchDataType[] => {
    return latestMatches?.map(({ homeTeam, awayTeam, utcDate, ...rest }) => ({
        status: "Friendly",
        home: homeTeam,
        away: awayTeam,
        time: formatUTCTime(utcDate),
        day: formatUTCDate(utcDate),
        ...rest
    })) as unknown as MatchDataType[];
};