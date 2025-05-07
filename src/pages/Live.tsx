import TabNav from "@/components/ui/TabNav"
import { tabsMatch } from "@/constants"
import { Radio } from "lucide-react"

const Live = () => {
    const filterLives = tabsMatch.filter((match) => match !== "Pre-season")

    return (
        <div className='h-full '>
            <div className="bg-white dark:bg-[#1B1C21] rounded-2xl pl-6 py-8">
                <div className="flex items-center gap-2 mb-8">
                    <Radio size="20px" className="text-red-600 animate-pulse" />
                    <h1 className="text-xl font-semibold dark:text-[white]">Live Match</h1>
                </div>
                <TabNav tabs={filterLives} />
            </div>
        </div>

    )
}

export default Live