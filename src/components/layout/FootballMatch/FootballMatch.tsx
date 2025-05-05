import { IoIosFootball } from "react-icons/io";
import { tabsMatch } from "@/constants";
import TabNav from "@/components/ui/TabNav";


const FootballMatch = () => {
    const filterMatch = tabsMatch.filter((match) => match !== "Live Games")

    return (
        <div className="pb-4">
            <div className="flex items-center gap-1 mb-8">
                <IoIosFootball size="20px" />
                <h1 className="text-xl font-semibold">Football Match</h1>
            </div>
            <TabNav tabs={filterMatch} />
        </div>
    )
}

export default FootballMatch