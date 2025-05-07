import { useState } from "react"
import { Skeleton } from "./skeleton"

interface ClubLogoProps {
    src: string
    name: string
    width?: string
    height?: string
    vertical?: boolean
    horizonal?: boolean
}

const ClubLogo = ({ src, name, width = "50px", height = "50px", vertical = false, horizonal = false }: ClubLogoProps) => {
    const [isLoading, setIsLoading] = useState(true)
    return (
        <div className={`${vertical ? "flex-col-reverse" : "flex"} ${horizonal ? "flex-row-reverse" : "flex"} items-center justify-center gap-2 `}>
            <p className="w-full text-xs md:text-[16px] text-center leading-tight truncate dark:text-[white]">{name}</p>
            {isLoading && (
                <div>
                    <Skeleton
                        className="rounded-4xl"
                        style={{ width, height }}
                    />
                </div>
            )}
            <img
                src={src}
                alt={name}
                style={{ width, height }}
                onLoad={() => setIsLoading(false)}
            />
        </div>
    )
}

export default ClubLogo
