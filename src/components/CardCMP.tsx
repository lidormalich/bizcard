import { FunctionComponent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { isLoginGlobal } from "../App";
import CardInterface from "../interface/CardInterface";
import { addCardToFavorite, removeCardFromFavorite } from "../services/favoriteServices";
import { successMessage } from "../services/FeedbackService";

interface CardCMPProps {
    cardItem: CardInterface;
    userCanEdit: boolean;
}

const CardCMP: FunctionComponent<CardCMPProps> = ({ cardItem, userCanEdit }) => {
    let navigat = useNavigate();
    // let isLogin = useContext(isLoginGlobal);
    return (<>

        {/* //בדיקהה והוספה למועדיפים
        {isLogin && <>

            <div onClick={() => {
                removeCardFromFavorite(cardItem.id as number).then(() => successMessage(`${cardItem.id} remove from fav!`))
                    .catch((e) => console.log(e));
            }}>
                <i className="fa-solid fa-heart-circle-minus"></i>
            </div>
            <div onClick={() => {
                addCardToFavorite(cardItem.id as number).then(() => successMessage(`${cardItem.id} Added to fav!`))
                    .catch((e) => console.log(e));
            }}>
                <i className="fa-solid fa-heart-circle-plus"></i>
            </div>
        </>} */}

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
                            <span>{cardItem.address}</span>
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
                                <div onClick={() => {
                                    window.open(`https://www.google.com/maps/search/?api=1&query=${cardItem.address}`)
                                }}>
                                    <i className="fa-solid fa-map"></i>
                                </div>
                                <div onClick={() => {
                                    window.open(`tel:${cardItem.phone}`)
                                }}>
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div onClick={() => {
                                    window.open(`mailto:${cardItem.companyEmail}`)
                                }}>
                                    <i className="fa-solid fa-at"></i>
                                </div>

                                {userCanEdit && <div onClick={() => {
                                    navigat(`/MyCards/${cardItem._id}`)
                                }}>
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </div>}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default CardCMP;