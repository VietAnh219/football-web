import StatBar from '@/components/ui/StarBar'
import { Team } from '@/types/match'

const StatMatch = ({ home, away }: { home: Team, away: Team }) => {
    return (
        <>
            <StatBar colorL={home.color} colorR={away.color} left={home.statistic?.shoot} right={away.statistic?.shoot} label="Shoot" />
            <StatBar colorL={home.color} colorR={away.color} left={home.statistic?.shootOnTarget} right={away.statistic?.shootOnTarget} label="Shoot on Target" />
            <StatBar colorL={home.color} colorR={away.color} left={home.statistic?.possession} right={away.statistic?.possession} label="Ball Possession" />
            <StatBar colorL={home.color} colorR={away.color} left={home.statistic?.redCard} right={away.statistic?.redCard} label="Red Card" />
            <StatBar colorL={home.color} colorR={away.color} left={home.statistic?.yellowCard} right={away.statistic?.yellowCard} label="Yellow Card" />
            <StatBar colorL={home.color} colorR={away.color} left={home.statistic?.offside} right={away.statistic?.offside} label="Offside" />
            <StatBar colorL={home.color} colorR={away.color} left={home.statistic?.corners} right={away.statistic?.corners} label="Corners" />
        </>
    )
}

export default StatMatch