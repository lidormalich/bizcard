import { FunctionComponent, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import CardInterface from "../../interface/CardInterface";
import { getAllCard } from "../../services/cardServices";
import { addCardToFavorite, getAllCardsFavorite, removeCardFromFavorite } from "../../services/favoriteServices";
import { successMessage } from "../../services/FeedbackService";
import CardCMP from "../CardCMP";
import "./ShowAllCards.css";

interface ShowAllCardsProps {

}

const ShowAllCards: FunctionComponent<ShowAllCardsProps> = () => {
    let [allCard, setAllCard] = useState<CardInterface[]>([]);

    useEffect(() => {
        getAllCardsFavorite();
        getAllCard().then((res) => {
            setAllCard(res.data);
        }).catch((e) => console.log(e))
    }, []);

    return (<>
        <div className="container">
            {allCard.length ? allCard.map((cardItem: CardInterface) => (
                <div className="display" key={cardItem._id}>
                    <CardCMP cardItem={cardItem} userCanEdit={false} />

                </div>
            )) : <p className="display-2">no card to display, plaese log-in to system</p>}
        </div>
    </>);
}

export default ShowAllCards;