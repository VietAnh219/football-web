interface ClubLogoProps {
    src: string
    name: string
    width?: string
    height?: string
    vertical?: boolean
    horizonal?: boolean
}

const ClubLogo = ({ src, name, width = "50px", height = "50px", vertical = false, horizonal = false }: ClubLogoProps) => {
    return (
        <div className={`${vertical ? "flex-col-reverse" : "flex"} ${horizonal ? "flex-row-reverse" : "flex"} items-center justify-center gap-2 `}>
            <p className="text-center leading-tight truncate">{name}</p>
            <div className="flex items-center justify-center">
                <img src={src} alt={name} style={{ width, height }} />
            </div>
        </div>
    )
}

export default ClubLogo
