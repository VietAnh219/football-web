export const endpointMatch = (selected: string) => {
    switch (selected) {
        case "Coming Match":
            return "comingMatches";
        case "Latest Match":
            return "lastestMatches";
        case "Live Games":
            return "liveMatches";

        case "Pre-season":
            return "friendlyMatches";

        default:
            return "comingMatches";
    }
}