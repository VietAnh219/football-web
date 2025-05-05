export type Player = {
    rank: number;
    name: string;
    team: string;
    teamLogo: string;
    goals?: number;
    image?: string;
    imgPlayer?: string;
    color?: string;
    assists?: number;
    passes?: number;
    cleanSheets?: number;
}

export interface ClubStats {
    rank: number;
    stadium: string;
    team: string;
    teamLogo: string;
    goals?: number;
    image?: string;
    tackles?: number;
    won?: number;
    lost?: number;
    color?: string;
}

export interface TopPlayerCardProps {
    title: string;
    players: Player[];
}

export interface TopClubCardProps {
    title: string;
    clubs: ClubStats[];
}

export interface StatsSectionProps {
    title: string;
    stats: {
        title: string;
        players?: Player[];
        clubs?: ClubStats[];
    }[];
}

export type StatLeagueResponse = {
    name: string;
    code: string;
    playerStats: {
        title: string;
        players: Player[];
    }[];
    clubStats: {
        title: string;
        clubs: ClubStats[];
    }[];

}