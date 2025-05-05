export const getBackgroundColor = (position: number, league: string) => {
    switch (true) {
        case (position <= 4):
            return "#c1deff"
        case (position <= 8 && league === "CL"):
            return "#c1deff"
        case (position >= 9 && position <= 24 && league === "CL"):
            return "#fddcb5"
        case (position === 5):
            return "#fddcb5"
        case (position === 6):
            return "#d3ffec"
        case (position >= 18):
            return league === "CL" ? "#f9f9f9" : "#f8b5c8"
        default:
            return "#f9f9f9";
    }
}