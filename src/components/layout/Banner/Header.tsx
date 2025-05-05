import Banner from "@/components/ui/Banner"
import LiveBanner from "@/components/ui/LiveBanner"

const Header = () => {
    return (
        <div className="flex items-center gap-6 h-[400px] mb-6">
            <Banner />
            <LiveBanner />
        </div>
    )
}

export default Header