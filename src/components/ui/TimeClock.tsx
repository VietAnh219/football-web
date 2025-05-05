import { useEffect, useState } from "react"

const MatchClock = () => {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prev) => {
                if (prev >= 90 * 60) {
                    return prev
                }
                return prev + 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    const formatTime = (n: number) => (n < 10 ? `0${n}` : n)

    let status = ""
    if (minutes >= 90) {
        status = "FT";
    } else if (minutes >= 45) {
        status = "HT";
    }

    return (
        <div className="text-green-700 font-semibold text-[14px] flex items-center justify-center gap-2">
            {status ? (
                <span>{status}</span>
            ) : (
                <span>
                    {formatTime(minutes)} : {formatTime(remainingSeconds)}
                </span>
            )}
        </div>
    )
}

export default MatchClock
