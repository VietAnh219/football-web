export const getBackgroundColor = (position: number, league: string, isDark?: boolean) => {
    if (isDark) {
        switch (true) {
            case (position <= 4 && league !== "CL"):
                return "#2a4d6e";
            case (position <= 8 && league === "CL"):
                return "#2a4d6e";
            case (position >= 9 && position <= 24 && league === "CL"):
                return "#7d5c3c";
            case (position === 5 && league !== "CL"):
                return "#7d5c3c";
            case (position === 6 && league !== "CL"):
                return "#2a5c4a";
            case (position >= 18 && league !== "CL"):
                return "#7d3c4d";
            default:
                return "#1B1C21";
        }
    } else {
        switch (true) {
            case (position <= 4 && league !== "CL"):
                return "#c1deff";
            case (position <= 8 && league === "CL"):
                return "#c1deff";
            case (position >= 9 && position <= 24 && league === "CL"):
                return "#fddcb5";
            case (position === 5 && league !== "CL"):
                return "#fddcb5";
            case (position === 6 && league !== "CL"):
                return "#d3ffec";
            case (position >= 18 && league !== "CL"):
                return "#f8b5c8";
            case (league === "CL" && position > 24):
                return "#f9f9f9";
            default:
                return "#f9f9f9";
        }
    }
}