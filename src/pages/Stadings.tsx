import StadingSlide from "@/components/layout/StadingDetail/StadingSlide"
import StadingsHome from "@/components/layout/StandingHome/StadingsHome"


const Stadings = () => {
    return (
        <div className='h-full w-full'>
            <div className="bg-white rounded-2xl pl-6 py-8">
                <StadingSlide />
                <StadingsHome />
            </div>
        </div>
    )
}

export default Stadings