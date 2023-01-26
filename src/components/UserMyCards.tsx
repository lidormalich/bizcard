import { FunctionComponent, useEffect, useState } from "react";
import Card from "../interface/Card";
import { getAllUserCards } from "../services/cardServices";

interface UserMyCardsProps {

}

const UserMyCards: FunctionComponent<UserMyCardsProps> = () => {
    let [allCard, setProducts] = useState<Card[]>([]);
    let userId: number = JSON.parse(sessionStorage.getItem("userData") as string).userID;
    useEffect(() => {
        console.log(userId);

        getAllUserCards(userId).then((res) => {
            console.log(res.data);

            setProducts(res.data);
        }).catch((e) => console.log(e))
    }, []);
    return (<>
        <div className="container">
            {allCard.length ? allCard.map((cardItem: Card) => (
                <div className="display" key={cardItem.id}>
                    <div className="display-item">
                        <div className="flippable-business-card">
                            <div className="front">
                                <div className="front-top">
                                    <div className="profile-image" >
                                        {cardItem.image.length ? <img
                                            src={cardItem.image}
                                            className="card-img-top"
                                            alt={cardItem.companyName}
                                            style={{ height: "100%" }}
                                        /> : <img
                                            src="https://github.com/lidormalich/bizcard/blob/master/src/media/no-image-icon-23494.png?raw=true"
                                            className="card-img-top"
                                            alt={cardItem.companyName}
                                            style={{ height: "100%" }}
                                        />}
                                    </div>
                                </div>
                                <div className="front-bottom">
                                    <div>
                                        <h3>{cardItem.companyName}</h3>
                                        <span>Fascism Foiler</span>
                                    </div>
                                    <div>
                                        <div>
                                            <span><i className="fa fa-phone"></i> {cardItem.phone}</span>
                                            <div className=""><span><i className="fa fa-at"></i> <a className="text-white" href={"mailto:" + cardItem.companyEmail}>{cardItem.companyEmail}</a></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="backBGC">
                                <div className="back">
                                    <div className="title">
                                        <h2>{cardItem.companyName}</h2>
                                        <span>{cardItem.address}</span>
                                    </div>
                                    <div className="bio">
                                        <p>{cardItem.description}</p>
                                    </div>
                                    <div className="social">
                                        <div className="sms">
                                            <div className="sm twitter">
                                                <i className="fa-brands fa-twitter"></i>
                                            </div>
                                            <div className="sm facebook">
                                                <i className="fa-brands fa-facebook"></i>
                                            </div>
                                            <div className="sm pinterest">
                                                <i className="fa-brands fa-pinterest"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )) : <p>no card</p>}
        </div></>);
}

export default UserMyCards;