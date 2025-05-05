import { LayoutDashboard, RadioTower, Trophy, TvMinimalPlay } from "lucide-react";
import iconC1 from '../assets/iconC1.svg'
import iconPL from '../assets/iconPL.svg'
import iconLiga from '../assets/iconLiga.svg'
import iconL1 from '../assets/iconL1.svg'
import iconSerieA from '../assets/iconSerieA.svg'
import iconBarc from '../assets/iconBarca.svg'
import iconFacebook from '../assets/iconFacebook.svg'
import iconInstagram from '../assets/iconInstagram.svg'
import iconTiktok from '../assets/iconTiktok.svg'
import iconTwitter from '../assets/iconTwitter.svg'
import iconYoutube from '../assets/iconYoutube.svg'
import iconPSG from "../assets/iconPSG.png";


export const linkMenuData = [
    {
        label: "Dashboard",
        link: "home",
        icon: <LayoutDashboard size={24} style={{ color: "#5742A9" }} />,
    },
    {
        label: "LiveFootBall",
        link: "live",
        icon: <RadioTower size={24} style={{ color: "#5742A9" }} />,
    },
    {
        label: "Standings",
        link: "stadings",
        icon: <Trophy size={24} style={{ color: "#5742A9" }} />,
    },
    {
        label: "Highlights",
        link: "highlights",
        icon: <TvMinimalPlay size={24} style={{ color: "#5742A9" }} />,
    }
];

export const linkLeagueData = [
    {
        label: "Champions League",
        link: "CL",
        icon: <img src={iconC1} alt="c1" />,
    },
    {
        label: "Premier League",
        link: "PL",
        icon: <img src={iconPL} alt="pl" />,
    },
    {
        label: "La Liga",
        link: "LL",
        icon: <img src={iconLiga} alt="liga" />,
    },
    {
        label: "Ligue 1",
        link: "FL1",
        icon: <img src={iconL1} alt="l1" />,
    },
    {
        label: "Serie A",
        link: "SA",
        icon: <img src={iconSerieA} alt="seriea" width={24} height={24} />,
    },
]

// stading banner
export const stadingBanner = [
    {
        title: "Salah, Jota & Díaz",
        desc: "Liverpool's forwards celebrating during a big win in EPL",
        image: "/stading1.jpg",
    },
    {
        title: "Champions League Night",
        desc: "A dominant performance from Declan Rice against Real Madrid.",
        image: "/stading2.jpg",
    },
    {
        title: "PSG Reign Supreme in Ligue 1",
        desc: "Another dominant season from the Parisian giants.",
        image: "/stading3.jpg",
    },
    {
        title: "Real’s Attack Gels",
        desc: "Mbappé finding his rhythm.",
        image: "/stading4.jpg",
    },
    {
        title: "Napoli on Top",
        desc: "McTominay delivers again.",
        image: "/stading5.jpg",
    },
];


export const tabsMatch = ["Live Games", "Coming Match", "Latest Match", "Pre-season"]

export const tabsNew = ["All News", "Hot News", "Transfer"]

export const tabsClub = ["Overview", "Squad"]

export const imagesBackground = [
    "/imgBgr1.jpg",
    "/imgBgr2.jpg",
    "/imgBgr3.jpg",
    "/imgBgr4.jpg",
];

export const imagesBanner = {
    img: "/imgBanner.jpg",
    icon: "/imgIconBanner.png",
}

export const imagesBannerHighLight = {
    img: "/imgBanner.jpg",
    iconC1: "/imgIconBanner.png",
    iconPL: iconPL,
    iconLiga: iconLiga,
    iconSerieA: iconSerieA,
    iconL1: iconL1,
}

export const imagesLogoLiga = {
    barc: iconBarc,
}

export const imagesLogoL1 = {
    psg: iconPSG,
}

export const iconSocial = {
    facebook: iconFacebook,
    insta: iconInstagram,
    twiter: iconTiktok,
    tiktok: iconTwitter,
    youtube: iconYoutube,
}

export const player = {
    dembele: "/dembele.png",
    yamal: "/yamal.png",
    bruno: "/brunofe.png",
    kvaratskhelia: "/kvaratskhelia.png",
    lmartinez: "/l.martinez.png"
}

// CSS export
export const iconStyle = "text-gray-500 cursor-pointer transition-colors duration-200 hover:text-purple-400";

export const darkMode = "dark:bg-[#17181C] transition-colors duration-300";

export const inputStyle = {
    "& .MuiOutlinedInput-root": {
        borderRadius: "10px",
        "&.Mui-focused fieldset": {
            borderColor: "#424242",
        },
    },
    "& label.Mui-focused": {
        color: "#424242",
    },
};

