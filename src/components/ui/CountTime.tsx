import React, { useEffect, useState } from "react";

type TimeLeft = {
    day: number;
    hour: number;
    minute: number;
    second: number;
};

interface CountdownTimerProps {
    targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const calculateTimeLeft = (): TimeLeft => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft: TimeLeft = { day: 0, hour: 0, minute: 0, second: 0 };

        if (difference > 0) {
            timeLeft = {
                day: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hour: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minute: Math.floor((difference / 1000 / 60) % 60),
                second: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const formatTime = (value: number): string => value.toString().padStart(2, "0");

    return (
        <div className="flex items-center justify-center gap-2 text-white font-sans text-center mt-2">
            {[
                { label: "Day", value: timeLeft.day },
                { label: "Hours", value: timeLeft.hour },
                { label: "Minutes", value: timeLeft.minute },
                { label: "Seconds", value: timeLeft.second },
            ].map((item, index, arr) => (
                <div key={index} className="space-y-1 ">
                    <div className="flex items-center justify-between">
                        <div className="text-xl min-w-[40px]">
                            {formatTime(item.value)}
                        </div>
                        {index < arr.length - 1 && (
                            <div className="text-xl font-bold text-white ">:</div>
                        )}
                    </div>
                    <div className="text-xs text-gray-300 text-center">{item.label}</div>

                </div>
            ))}
        </div>
    );
};

export default CountdownTimer;
