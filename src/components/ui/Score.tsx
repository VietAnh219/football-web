import { ScoreType } from "@/types/match"

const Score = ({ score }: { score?: ScoreType }) => {
    return (
        <div className="flex items-center gap-1 text-[#5742A9] py-2 px-5 rounded-4xl bg-[#5742a91a]">
            <p className="font-semibold">{score?.fullTime.home}</p>
            <p className="font-semibold">-</p>
            <p className="font-semibold">{score?.fullTime.away}</p>
        </div>
    )
}

export default Score