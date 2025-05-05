type Team = {
    id: number;
    name: string;
    crest: string;
    color: string;
    shortName: string;
    tla: string;
}

export interface Fixture {
    id: number;
    date: string;
    time: string;
    stadium: string;
    homeTeam: Team;
    awayTeam: Team;
}

export type GroupedFixtures = {
    date: string;
    matches: Fixture[];
}[];