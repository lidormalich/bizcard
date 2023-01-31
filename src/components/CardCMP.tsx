import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../interface/Card";

interface CardCMPProps {
    cardItem: Card;
    userCanEdit: boolean;
}

const CardCMP: FunctionComponent<CardCMPProps> = ({ cardItem, userCanEdit }) => {
    let navigat = useNavigate();
    return (<>
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
                                    navigat(`/MyCards/${cardItem.id}`)
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