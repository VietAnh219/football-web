import { Player } from "@/types/match";

export const GenerateFormation = (
    formation: string,
    isLeftSide: boolean,
    lineup: Player[],
): { number: number; top: string; left: string, name: string }[] => {
    const lines = formation.split("-").map(Number);
    const players = [];

    const leftBase = isLeftSide ? 5 : 95;
    players.push({
        number: lineup[0]?.shirtNumber ?? 1,
        name: lineup[0]?.name ?? "",
        top: "50%",
        left: `${leftBase}%`
    });

    let lineupIndex = 1;

    lines.forEach((count, index) => {
        const spacing = 100 / (count + 1);
        for (let i = 0; i < count; i++) {
            const top = `${spacing * (i + 1)}%`;
            const left = isLeftSide
                ? `${15 + index * 10}%`
                : `${85 - index * 10}%`;

            const player = lineup[lineupIndex];
            players.push({
                number: player?.shirtNumber ?? 0,
                name: player?.name ?? "",
                top,
                left,
            });

            lineupIndex++;
        }
    });

    return players;
};