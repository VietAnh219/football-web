export type SocialLink = {
    website?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    tiktok?: string;
    youtube?: string;
}

type Coach = {
    id: number;
    name: string;
    img: string;
};

type Player = {
    id: number;
    name: string;
    position?: string;
    shirtNumber?: number;
    img: string;
};

export type Squad = {
    goalkeepers: Player[];
    defenders: Player[];
    midfielders: Player[];
    forwards: Player[];
    coach: Coach[];
};

export type Club = {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    shirt: string;
    website: string;
    born: number;
    stadium: string;
    stadiumCapacity: number;
    color: string;
    social: SocialLink;
    description: string;
    squad: Squad;
};

export type SquadSection = {
    title: string;
    players: Player[];
};



export type ClubStore = {
    selectedClub: Club | null,
    setSelectedClub: (Club: Club) => void;
};