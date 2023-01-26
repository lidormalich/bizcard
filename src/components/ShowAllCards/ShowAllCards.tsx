import { FunctionComponent, useEffect, useState } from "react";
import Card from "../../interface/Card";
import { getAllCard } from "../../services/cardServices";

interface ShowAllCardsProps {

}

const ShowAllCards: FunctionComponent<ShowAllCardsProps> = () => {
    // let allCard: Card[] = [];
    let [allCard, setProducts] = useState<Card[]>([]);

    useEffect(() => {
        console.log("hare");

        // getAllCard().then((res) => {
        //     for (let card of res.data) {
        //         allCard.push(card);
        //     }
        // }).catch((e) => console.log(e))
        getAllCard().then((res) => {
            setProducts(res.data);
        }).catch((e) => console.log(e))
    }, []);

    return (<>
        <h1>leng {allCard.length}</h1>
        {console.log(allCard)}
        {allCard.length ? allCard.map((product: Card) => (
            <div
                key={product.id}
                className="card ms-1 col-md-3"
                style={{ width: "18rem" }}
            >
                <div className="card-header">{product.companyName}</div>
                <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.companyName}
                    style={{ height: "100%" }}
                />

            </div>
        )) : <p>no card</p>}
    </>);
}

export default ShowAllCards;