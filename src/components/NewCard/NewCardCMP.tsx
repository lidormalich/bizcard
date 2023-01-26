import { FunctionComponent, useEffect, useState } from "react";
import NotHaveAccess from "../Extra/NotHaveAccess/NotHaveAccess";
import CreateCard from "./CreateCard";

interface NewCardCMPProps {

}

const NewCardCMP: FunctionComponent<NewCardCMPProps> = () => {
    // let [isBusiness, setisBusiness] = useState<Boolean>(false);
    let isBusiness: boolean = (JSON.parse(sessionStorage.getItem("userData") as string).isBusiness == true ? true : false);
    // useEffect(() => {
    //     setisBusiness(JSON.parse(sessionStorage.getItem("userData") as string).isBusiness);
    // }, []);
    return (<>
        {isBusiness == true ? <CreateCard /> : <NotHaveAccess />}
    </>);
}

export default NewCardCMP;