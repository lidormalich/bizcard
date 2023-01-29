import { FunctionComponent, useContext, useEffect, useState } from "react";
import { isLoginGlobal } from "../../App";
import UserInterface from "../../interface/UserInterface";
import { getAllUserCards } from "../../services/cardServices";
import { getUserInfo } from "../../services/usersservices";
import NotHaveAccess from "../Extra/NotHaveAccess/NotHaveAccess";
import "./Profile.css";

interface ProfileProps {
    // setIsLogIn: Function;
}

const Profile: FunctionComponent<ProfileProps> = () => {
    let length: number = 0;
    let isLogin = useContext<boolean>(isLoginGlobal);
    let [user, setUser] = useState<UserInterface>({
        id: 0,
        name: "string",
        email: "string",
        password: "string",
    });
    useEffect(() => {
        try {
            let userId: number = JSON.parse(
                sessionStorage.getItem("userData") as string
            ).userID;
            getUserInfo(userId).then((res) => {
                console.log(res.data);
                setUser(res.data)
            });
            getAllUserCards(userId).then((res) => length = res.data.length);
        } catch (error) {
            console.log(error);
        }


    }, []);

    return (<>
        {isLogin ? <><div className="container my-3">
            <div className="card ">
                {user.image != null ? <img src={user.image} alt={user.name} className="rounded mx-auto d-block my-3" style={{ width: "15rem" }} /> : <img src="https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max" alt="ANONYMOUS USER" className="rounded mx-auto d-block my-3" style={{ width: "17em" }} />}
                <h1>{user.name}</h1>
                {user.isBusiness ? <h5 className="title"> User type: Business</h5> : <h5 className="title"> User type: Regular User  </h5>}
                <p>You have {length} cards</p>
                <span>
                    <a href="/" ><i className="fa fa-dribbble"></i></a>
                    <a href="/"><i className="fa fa-twitter"></i></a>
                    <a href="/"><i className="fa fa-linkedin"></i></a>
                    <a href="/"><i className="fa fa-facebook"></i></a>
                </span>
                <p><button>Contact</button></p>
            </div>
        </div></> : (<NotHaveAccess />)}
    </>);
}


export default Profile;