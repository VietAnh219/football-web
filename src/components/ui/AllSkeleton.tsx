import { Skeleton } from "./skeleton"

export const SkeletonCard = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-[#37003c] mb-4">Loading...</h1>
            <div className="grid grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div
                        key={index}
                        className="w-[330px] h-[634px] rounded-xl shadow-md p-4 flex flex-col gap-4 border-1"
                    >
                        <Skeleton className="h-[200px] w-full rounded-lg" />
                        <div className="space-y-2">
                            {[...Array(7)].map((_, i) => (
                                <div key={i} className="flex items-center gap-3 h-[54px]">
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                    <Skeleton className="h-full w-full" />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export const SkeletonClubLogo = () => {
    return (
        <div className="w-full my-12">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                    <Skeleton className="h-6 w-6 rounded-full" />
                    <Skeleton className="h-6 w-32 rounded" />
                </div>
            </div>
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
        </div>
    )
}

export const SkeletonShirt = () => {
    return (
        <div className="w-full my-12">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                    <Skeleton className="h-6 w-6 rounded-full" />
                    <Skeleton className="h-6 w-32 rounded" />
                </div>
            </div>
            <div className="flex gap-4">
                {Array.from({ length: 11 }).map((_, index) => (
                    <div
                        key={index}
                        className="w-[220px] h-[350px] flex flex-col items-start justify-center gap-4 rounded-2xl overflow-hidden shrink-0 border-2 cursor-pointer"
                    >
                        <div className="w-full h-full flex justify-center bg-[#F6F6F6]">
                            <Skeleton className="w-[80%] h-[80%] rounded-md" />
                        </div>
                        <div className="pl-2 w-full">
                            <Skeleton className="h-4 w-24 rounded" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export const SkeletonFixture = () => {
    return (
        <div>
            {[...Array(3)].map((_, i) => (
                <div key={i} className="mt-6 space-y-3">
                    <Skeleton className="h-6 w-40" />
                    {[...Array(3)].map((_, j) => (
                        <div key={j} className="flex items-center justify-between gap-4 p-4 border rounded-md">
                            <div className="flex items-center gap-3">
                                <Skeleton className="h-10 w-10 rounded-full" />
                                <Skeleton className="h-4 w-24" />
                            </div>
                            <Skeleton className="h-4 w-10" />
                            <div className="flex items-center gap-3">
                                <Skeleton className="h-10 w-10 rounded-full" />
                                <Skeleton className="h-4 w-24" />
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}