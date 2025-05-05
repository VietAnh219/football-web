import { Fixture, GroupedFixtures } from "@/types/fixtures";
import { formatUTCDate } from "./formatUTCDate";

export const groupFixturesByDate = (fixtures: Fixture[]): GroupedFixtures => {
    const group: Record<string, Fixture[]> = {};

    fixtures.forEach((fixture) => {
        const date = fixture.date;
        if (!group[date]) {
            group[date] = [];
        }

        group[date].push(fixture);
    })

    const fixtureByDate = Object.entries(group).map(([date, matches]) => ({
        date: formatUTCDate(date),
        matches,
    }));

    return fixtureByDate;

}