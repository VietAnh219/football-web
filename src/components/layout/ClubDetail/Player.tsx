import { Skeleton } from '@/components/ui/skeleton';
import { useClubDetailStore } from '@/store/useClubDetailStore';
import { SquadSection } from '@/types/club';
import { Divider } from '@mui/material'
import { useState } from 'react';

const Player = ({ title, players }: SquadSection) => {
    const selectedClub = useClubDetailStore((state) => state.selectedClub);
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <div className='mb-6'>
            <h1 className="pb-[10px] text-4xl font-bold">{title}</h1>
            <div>
                <Divider className="h-0.5" />
            </div>
            <div className="grid grid-cols-4 gap-5">
                {players.map((player, idx) => {
                    const [first, last] = player.name.split(" ");
                    return (
                        <div
                            key={idx}
                            className="w-[320px] h-[320px] rounded-xl overflow-hidden bgPlayer relative mt-7 group"
                        >
                            <div className="absolute bottom-0 w-full h-[200px] z-10 bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white rounded-b-xl" />
                            {!isLoaded && (
                                <Skeleton className="w-full h-full rounded-xl animate-pulse bg-muted" />
                            )}
                            <img
                                src={player.img}
                                alt={player.name}
                                onLoad={() => setIsLoaded(true)}
                                className={`w-[90%] h-[90%] object-contain absolute bottom-0 left-1/2 -translate-x-1/2 transition-transform duration-900 ease-in-out group-hover:scale-110 ${isLoaded ? 'block' : 'hidden'
                                    }`}
                            />
                            <div className="absolute bottom-4 left-4 text-white font-bold text-xl shadow-4xl z-20">
                                <p className="text-[16px]">{player.shirtNumber}</p>
                                <Divider className="h-[2px] w-6" style={{ backgroundColor: `${selectedClub?.color}` }} />
                                <h1 className="font-extrabold text-4xl leading-tight">
                                    {first}
                                    <br />
                                    {last}
                                </h1>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Player