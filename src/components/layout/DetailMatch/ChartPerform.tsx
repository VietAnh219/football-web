"use client"

import { useState } from "react"
import { LineChart, Line, XAxis, CartesianGrid } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/Chart"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { ChartType, MatchChartType, MatchDataType } from "@/types/match"

export function ChartPerform({ selectedMatch }: { selectedMatch: MatchDataType }) {
    const [statType, setStatType] = useState<ChartType>("shoot")
    const chart: MatchChartType | undefined = selectedMatch.chart

    if (!chart) {
        return <h1 className="p-4 text-center text-gray-500">No data available</h1>
    }

    const filteredData = chart[statType as keyof typeof chart]
    const teams = Object.keys(filteredData?.[0] || {}).filter((key) => key !== "minute")

    const chartConfig: ChartConfig = teams.reduce((acc, team) => {
        acc[team] = {
            label: team,
            color:
                team === selectedMatch.home.shortName
                    ? selectedMatch.home.color ?? "#FF0000"
                    : selectedMatch.away.color ?? "#0000FF",
        }
        return acc
    }, {} as ChartConfig)

    return (
        <Card className="mb-10 dark:bg-[#1B1C21] transition-colors duration-300">
            <CardHeader className="flex flex-col gap-2 border-b py-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="grid gap-1 text-center sm:text-left">
                    <CardTitle className="dark:text-white">Match Performance - Interactive</CardTitle>
                    <CardDescription className="dark:text-white">Showing stats by minute (0 → 90')</CardDescription>
                </div>
                <Select value={statType} onValueChange={(val) => setStatType(val as ChartType)}>
                    <SelectTrigger className="w-[160px] rounded-lg dark:bg-[#1B1C21] dark:text-white">
                        <SelectValue placeholder="Select stat" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl dark:bg-[#1B1C21]">
                        <SelectItem value="shoot" className="dark:text-white">Shoot</SelectItem>
                        <SelectItem value="ball_possession" className="dark:text-white">Ball Possession</SelectItem>
                        <SelectItem value="corner" className="dark:text-white">Corner</SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>

            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <ChartContainer config={chartConfig} className="h-[250px] w-full">
                    <LineChart
                        data={filteredData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="minute"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => `${value}m`}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

                        {teams.map((team) => (
                            <Line
                                key={team}
                                dataKey={team}
                                type="monotone"
                                stroke={chartConfig[team].color}
                                strokeWidth={2}
                                dot={false}
                            />
                        ))}
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
