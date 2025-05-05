import ClubSlider from "./ClubHome/ClubSlider"
import ShoppingSlider from "./ShoppingHome/ShoppingSlider";

const ItemSlider = ({ selectedIndex, title, clubs }: { selectedIndex: number, title: string, clubs: { id: number, shortName: string; crest: string; shirt: string }[] }) => {
    return (
        <>
            {title === "Follow Club" ?
                clubs.map((club: { id: number, shortName: string; crest: string }, index: number) => (
                    <ClubSlider club={club} selectedIndex={selectedIndex} index={index} key={club.id} />
                )) :
                clubs.map((club: { id: number, shortName: string; crest: string, shirt: string }, index) => (
                    <ShoppingSlider club={club} key={index} />
                ))
            }
        </>
    )
}

export default ItemSlider