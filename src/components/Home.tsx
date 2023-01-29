import { FunctionComponent, useContext } from "react";
import { isLoginGlobal } from "../App";

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    let isLogin = useContext<boolean>(isLoginGlobal);
    return (<>
        {isLogin && <h1> hi You Enter to system</h1>}
        <h1 className="display-1">Welcome to Biz</h1>
    </>);
}

export default Home;