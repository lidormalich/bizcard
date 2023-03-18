import { FunctionComponent, useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { isLoginGlobal } from "../../App";
import CardInterface from "../../interface/CardInterface";
import { getAllUserCards } from "../../services/cardServices";
import CardCMP from "../CardCMP";
import NotHaveAccess from "../Extra/NotHaveAccess/NotHaveAccess";


interface UserMyCardsProps {

}

const UserMyCards: FunctionComponent<UserMyCardsProps> = () => {
    let [allCard, setAllCard] = useState<CardInterface[]>([]);
    let isLogin = useContext<boolean>(isLoginGlobal);

    let userId = sessionStorage.getItem("Authorization");

    useEffect(() => {
        try {

            getAllUserCards(userId as string).then((res) => {
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

                {allCard.length ? allCard.map((cardItem: CardInterface) => (
                    <div className="display" key={cardItem._id}>
                        <CardCMP cardItem={cardItem} userCanEdit={true} />
                    </div>
                )) : <>

                    {/* <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> */}
                    <p className="h3">Sorry, but you not have a Card</p>
                </>
                }
            </div >
        )
        }
    </>);
}

export default UserMyCards;