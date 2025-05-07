import { useEffect, useState } from "react"

export const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    useEffect(() => {
        if (ref.current) {
            setDimensions({
                width: ref.current.offsetWidth,
                height: ref.current.offsetHeight,
            })
        }
    }, [ref])

    return dimensions
}