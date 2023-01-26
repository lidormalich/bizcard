import { FunctionComponent } from "react";
import { NavLink, useNavigate } from "react-router-dom";

interface NavBarCMPProps {

}

const NavBarCMP: FunctionComponent<NavBarCMPProps> = () => {
    let navigate = useNavigate();
    let isLogin: boolean = true;
    return (<div className="bg-dark text-light">

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/home">
                    {/* <h5 className="display-5">BizCard</h5> */}
                    <img src="https://github.com/lidormalich/bizcard/blob/master/src/media/bizcardLogo.png?raw=true" height={50} alt="biz card logo" />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/About">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Signin">
                                Sign-In
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Newcard">
                                New Card
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/MyCard">
                                My Card
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Cards">
                                All Cards
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Profile">
                                Profile
                            </NavLink>
                        </li>
                    </ul>
                    {isLogin && <form className="d-flex" role="search">
                        <button className="btn btn-outline-success" onClick={() => {
                            sessionStorage.removeItem("userData");
                            navigate("/");
                            // setIsLogIn(false);
                        }}>Logout</button>
                    </form>}
                </div>
            </div>
        </nav>
    </div>);
}

export default NavBarCMP;