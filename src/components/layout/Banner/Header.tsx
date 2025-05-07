import Banner from "@/components/ui/Banner"
import LiveBanner from "@/components/ui/LiveBanner"

const Header = () => {
    return (
        <div className="mb-4 sm:flex sm:items-center sm:gap-6 sm:h-[400px] sm:mb-6">
            <Banner />
            <LiveBanner />
        </div>
    )
}

export default Header