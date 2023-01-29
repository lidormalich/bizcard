import { FunctionComponent, useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { isLoginGlobal } from "../../App";
import Card from "../../interface/Card";
import { getAllUserCards } from "../../services/cardServices";
import NotHaveAccess from "../Extra/NotHaveAccess/NotHaveAccess";


interface UserMyCardsProps {

}

const UserMyCards: FunctionComponent<UserMyCardsProps> = () => {
    let [allCard, setAllCard] = useState<Card[]>([]);
    let isLogin = useContext<boolean>(isLoginGlobal);

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
                https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png<div className="slide-container">



                    <div className="wrapper">
                        <div className="clash-card goblin">
                            <div className="clash-card__image clash-card__image--goblin">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/goblin.png" alt="goblin" />
                            </div>
                            <div className="clash-card__level clash-card__level--goblin">Level 5</div>
                            <div className="clash-card__unit-name">The Goblin</div>
                            <div className="clash-card__unit-description">
                                These pesky little creatures only have eyes for one thing: LOOT! They are faster than a Spring Trap, and their hunger for resources is limitless.
                            </div>

                            <div className="clash-card__unit-stats clash-card__unit-stats--goblin clearfix">
                                <div className="one-third">
                                    <div className="stat">30<sup>S</sup></div>
                                    <div className="stat-value">Training</div>
                                </div>

                                <div className="one-third">
                                    <div className="stat">32</div>
                                    <div className="stat-value">Speed</div>
                                </div>

                                <div className="one-third no-border">
                                    <div className="stat">100</div>
                                    <div className="stat-value">Cost</div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="wrapper">
                        <div className="clash-card wizard">
                            <div className="clash-card__image clash-card__image--wizard">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard.png" alt="wizard" />
                            </div>
                            <div className="clash-card__level clash-card__level--wizard">Level 6</div>
                            <div className="clash-card__unit-name">The Wizard</div>
                            <div className="clash-card__unit-description">
                                The Wizard is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts of destruction on anything, land or sky!
                            </div>

                            <div className="clash-card__unit-stats clash-card__unit-stats--wizard clearfix">
                                <div className="one-third">
                                    <div className="stat">5<sup>M</sup></div>
                                    <div className="stat-value">Training</div>
                                </div>

                                <div className="one-third">
                                    <div className="stat">16</div>
                                    <div className="stat-value">Speed</div>
                                </div>

                                <div className="one-third no-border">
                                    <div className="stat">4000</div>
                                    <div className="stat-value">Cost</div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
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

                )) : <>
                    <p>no card</p> <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </>}
            </div>
        )}
    </>);
}

export default UserMyCards;