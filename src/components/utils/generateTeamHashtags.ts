export const generateTeamHashtags = (title: string): string | null => {
    const match = title.match(/Highlights\s\|\s(.*?)\s-\s(.*?)\s\|/i);
    if (!match || match.length < 3) return null;

    const team1 = match[1].trim().toLowerCase().split(" ")[0];
    const team2 = match[2].trim().toLowerCase().split(" ")[0];

    return `#${team1}#${team2}`;
}
