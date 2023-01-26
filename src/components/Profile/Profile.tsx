import { FunctionComponent, useEffect, useState } from "react";
import UserInterface from "../../interface/UserInterface";
import { getUserInfo } from "../../services/usersservices";
import "./Profile.css";

interface ProfileProps {
    // setIsLogIn: Function;
}

const Profile: FunctionComponent<ProfileProps> = () => {

    let userId: number = JSON.parse(
        sessionStorage.getItem("userData") as string
    ).userID;
    let [user, setUser] = useState<UserInterface>({
        id: 0,
        name: "string",
        email: "string",
        password: "string",
    });

    useEffect(() => {
        getUserInfo(userId).then((res) => {
            console.log(res.data);
            setUser(res.data)
        })

    }, []);

    return (<>
        <div className="container my-3">
            <div className="card ">
                {user.image != null ? <img src={user.image} alt={user.name} className="rounded mx-auto d-block my-3" style={{ width: "15rem" }} /> : <img src="https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max" alt="ANONYMOUS USER" className="rounded mx-auto d-block my-3" style={{ width: "17em" }} />}
                <h1>{user.name}</h1>
                {user.isBusiness ? <p className="title"> User type: <h5>Business</h5> </p> : <p className="title"> User type: <h5>Regular User</h5>  </p>}
                <p>You have XXX cards</p>
                <span>
                    <a href="/" ><i className="fa fa-dribbble"></i></a>
                    <a href="/"><i className="fa fa-twitter"></i></a>
                    <a href="/"><i className="fa fa-linkedin"></i></a>
                    <a href="/"><i className="fa fa-facebook"></i></a>
                </span>
                <p><button>Contact</button></p>
            </div>
        </div>
    </>);
}


export default Profile;