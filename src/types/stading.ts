export type Team = {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
}

export type StandingTableItem = {
    id: string;
    position: number;
    team: Team;
    playedGames: number;
    form: string[] | null;
    won: number;
    draw: number;
    lost: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
}

export type StandingResponse = {
    competitionCode: string;
    competition: object;
    season: object;
    area: object;
    table: StandingTableItem[];
}

