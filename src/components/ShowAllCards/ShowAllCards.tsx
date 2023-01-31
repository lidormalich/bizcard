import { FunctionComponent, useEffect, useState } from "react";
import Card from "../../interface/Card";
import { getAllCard } from "../../services/cardServices";
import CardCMP from "../CardCMP";
import "./ShowAllCards.css";

interface ShowAllCardsProps {

}

const ShowAllCards: FunctionComponent<ShowAllCardsProps> = () => {
    let [allCard, setAllCard] = useState<Card[]>([]);

    useEffect(() => {
        getAllCard().then((res) => {
            setAllCard(res.data);
        }).catch((e) => console.log(e))
    }, []);

    return (<>
        <div className="container">
            {allCard.length ? allCard.map((cardItem: Card) => (
                <div className="display" key={cardItem.id}>
                    <CardCMP cardItem={cardItem} userCanEdit={false} />
                </div>
            )) : <p>no card</p>}
        </div>
    </>);
}

export default ShowAllCards;