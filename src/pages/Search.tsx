import { useAllClubs } from "@/components/hooks/useAllClubs";
import { Skeleton } from "@/components/ui/skeleton"
import { SkeletonClubLogo } from "@/components/ui/AllSkeleton"
import { useTotalHighLightStore } from "@/store/useHighLightStore";
import { useLocation } from "react-router-dom";
import HighlightSlider from "@/components/layout/Highlight/HighlightSlider";
import ClubSearch from "@/components/layout/SearchContent/ClubSearch";

const useUrlSearchParams = () => {
    const { search } = useLocation();
    return new URLSearchParams(search);
}

const Search = () => {
    const useSearchParams = useUrlSearchParams();
    const keyword = useSearchParams.get("q")?.toLowerCase().trim() || "";
    const selectedTotalHighLight = useTotalHighLightStore((state) => state.selectedTotalHighLight);
    const { allClubs, isLoading: isLoadingClubs } = useAllClubs();

    if (isLoadingClubs) {
        return <SkeletonClubLogo />;
    }


    const filteredHighlights = selectedTotalHighLight?.filter(item =>
        item.title.toLowerCase().includes(keyword)
    ) || [];

    const filteredClubs = allClubs.filter(club =>
        club.name.toLowerCase().includes(keyword) || club.name.toLowerCase().includes(keyword)
    );

    const hasResults = filteredHighlights.length > 0 || filteredClubs.length > 0;

    return (
        <div className='h-full w-full'>
            <div className="bg-white dark:bg-[#1B1C21] rounded-2xl px-6 py-8 space-y-8">
                <h1 className="text-xl font-semibold mb-4 dark:text-white">Search results for: <span className="text-red-600">"{keyword}"</span></h1>

                {!hasResults && (
                    <div className="text-center text-gray-500 py-8">
                        No results found.
                    </div>
                )}

                <div>
                    <h2 className="text-2xl font-semibold mb-4 dark:text-white">Clubs ({filteredClubs.length})</h2>
                    {filteredClubs.length > 0 ? (
                        <div className="flex gap-4">
                            <ClubSearch filteredClubs={filteredClubs} />
                        </div>
                    ) : (
                        <div className="flex gap-4">
                            {Array.from({ length: 10 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="w-[124px] h-[124px] rounded-full flex items-center justify-center shrink-0 transition-all"
                                >
                                    <Skeleton className="w-full h-full rounded-full" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4 dark:text-white">Highlights ({filteredHighlights.length})</h2>
                    {filteredHighlights.length > 0 ? (
                        <HighlightSlider highlight={filteredHighlights} topic="Search results" />
                    ) : (
                        <div className="">
                            {Array.from({ length: 1 }).map((_, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex space-x-4">
                                        {Array.from({ length: 6 }).map((__, i) => (
                                            <Skeleton key={i} className="w-[250px] h-[140px] rounded-xl" />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Search;
