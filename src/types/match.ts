export type MatchDataType = {
    matchId?: number;
    matchTime?: number;
    id?: number;
    utcDate?: string;
    status: string,
    home: Team,
    away: Team,
    day: string,
    venue?: string;
    time?: string;
    competition?: Competition;
    chart?: MatchChartType;
    score: ScoreType;
    color?: string;
    phase?: string;
}

export type Statistic = {
    corners: number;
    offside: number;
    possession: number;
    redCard: number;
    shoot: number;
    shootOnTarget: number;
    yellowCard: number;
}

export type ChartDataPoint = {
    minute: number;
    [teamName: string]: number;
};

export type ChartType = "shoot" | "ball_possession" | "corner"

export type MatchChartType = {
    shoot: ChartDataPoint[]
    ball_possession: ChartDataPoint[]
    corner: ChartDataPoint[]
}

export type ScoreType = {
    duration: "REGULAR" | "EXTRA_TIME" | "PENALTIES" | string;
    fullTime: {
        home: number;
        away: number;
    };
    goal: {
        home: {
            name: string;
            minute: number;
        }[];
        away: {
            name: string;
            minute: number;
        }[];
    };
    motm: {
        name: string;
        shirtNumber: number;
    };
    winner: "HOME_TEAM" | "AWAY_TEAM" | "DRAW" | string;
};

export type Team = {
    name: string;
    shortName: string;
    color: string,
    crest: string;
    formation: string;
    lineup: Player[];
    statistic: Statistic;
};

export type Player = {
    id: number;
    name: string;
    position: string;
    shirtNumber: number;
};

export type Competition = {
    name: string;
    code: string;
    emblem: string;
};

export type MatchComing = {
    id: number;
    date: string;
    utcDate: string;
    venue: string;
    competition: Competition;
    homeTeam: Team;
    awayTeam: Team;
}

export type MatchStore = {
    selectedMatch: MatchDataType | null,
    setSelectedMatch: (match: MatchDataType) => void;
};