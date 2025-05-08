export const getLogoLeague = (league: string) => {
    switch (league) {
        case "CL":
            return "https://crests.football-data.org/CL.png"
        case "PL":
            return "https://crests.football-data.org/PL.png"
        case "LL":
            return "https://crests.football-data.org/laliga.png"
        case "SA":
            return "https://crests.football-data.org/SA.png"
        case "FL1":
            return "https://crests.football-data.org/FL1.png"
        default:
            break;
    }
}