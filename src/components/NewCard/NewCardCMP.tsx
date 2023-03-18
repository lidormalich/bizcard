import { FunctionComponent, useEffect, useState } from "react";
import { isBusinessUser } from "../../services/usersservices";
import NotHaveAccess from "../Extra/NotHaveAccess/NotHaveAccess";
import CreateCard from "./CreateCard";

interface NewCardCMPProps {

}

const NewCardCMP: FunctionComponent<NewCardCMPProps> = () => {
    // let [isBusiness, setisBusinessUser] = useState<any>(false);



    // setisBusinessUser(isBusiness == true ? true : false);
    // useEffect(() => {
    //     setisBusiness(JSON.parse(sessionStorage.getItem("userData") as string).isBusiness);
    // }, []);
    return (<>
        {isBusinessUser() == true ? <CreateCard /> : <NotHaveAccess />}
    </>);
}

export default NewCardCMP;