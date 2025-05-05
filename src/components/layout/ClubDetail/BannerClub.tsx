import { darkenColor } from '@/components/utils/darkenColor';
import { useClubDetailStore } from '@/store/useClubDetailStore';
import { Dot } from 'lucide-react'

const BannerClub = () => {
    const selectedClub = useClubDetailStore((state) => state.selectedClub);
    const mainColor = selectedClub?.color ?? "#000";
    const darkerColor = darkenColor(mainColor, 90);
    const formatted = Number(selectedClub?.stadiumCapacity).toLocaleString()

    return (
        <div className={`w-full h-[400px] flex relative rounded-2xl overflow-hidden mb-6`} style={{ background: `linear-gradient(to right, ${mainColor}, ${darkerColor})` }}>
            <div className="flex items-center mx-14 gap-4">
                <img src={selectedClub?.crest} alt="" className="w-[128px] h-[128px]" />
                <div className="text-white">
                    <h1 className="text-6xl font-bold">{selectedClub?.shortName}</h1>
                    <div className="flex mt-2">
                        <span>Est: {selectedClub?.born}</span>
                        <Dot />
                        <span>{selectedClub?.stadium}</span>
                        <Dot />
                        <span>Capacity: {formatted}N</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerClub