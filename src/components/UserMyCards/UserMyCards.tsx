import { FunctionComponent, useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { isLoginGlobal } from "../../App";
import Card from "../../interface/Card";
import { getAllUserCards } from "../../services/cardServices";
import NotHaveAccess from "../Extra/NotHaveAccess/NotHaveAccess";


interface UserMyCardsProps {

}

const UserMyCards: FunctionComponent<UserMyCardsProps> = () => {
    let [allCard, setAllCard] = useState<Card[]>([]);
    let isLogin = useContext<boolean>(isLoginGlobal);
    let navigat = useNavigate();

    let userId: number = -1;
    useEffect(() => {
        try {
            userId = JSON.parse(sessionStorage.getItem("userData") as string).userID;
            getAllUserCards(userId).then((res) => {

                setAllCard(res.data);
            }).catch((e) => console.log(e));
        } catch (error) {
            console.log(error);
        }
    }, []);
    return (<>
        {!isLogin ? <NotHaveAccess /> : (
            <div className="container">
                {/* <Form.Check
                    type="switch"
                    value={"a"}
                    id="custom-switch"
                    label="Check this switch"
                // onClick={(event) => {
                //     console.log(event.target);
                // }}
                /> */}

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
                                            <i className="fa-solid fa-pen-to-square"></i>
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
                                                <div onClick={() => {
                                                    navigat(`/MyCards/${cardItem.id}`)
                                                }}>
                                                    <i className="fa-solid fa-pen-to-square"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )) : <>
                    <p>no card</p> <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </>
                }
            </div >
        )}
    </>);
}

export default UserMyCards;