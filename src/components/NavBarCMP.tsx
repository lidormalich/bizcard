import { FunctionComponent, useContext } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { isLoginGlobal, userNameGlobal } from "../App";

interface NavBarCMPProps {
    setIsLogIn: Function;
}

const NavBarCMP: FunctionComponent<NavBarCMPProps> = ({ setIsLogIn }) => {


    let navigate = useNavigate();
    let isLogin = useContext<boolean>(isLoginGlobal);
    let username = useContext<string>(userNameGlobal);





    return (<div className="bg-dark text-light">

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    {/* <h5 className="display-5">BizCard</h5> */}
                    <img src="https://github.com/lidormalich/bizcard/blob/master/src/media/bizcardLogo3.png?raw=true" height={50} alt="biz card logo" />
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
                        {!isLogin && <><li className="nav-item">
                            <NavLink className="nav-link" to="/Signin">
                                Sign-In
                            </NavLink>
                        </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/register">
                                    Register
                                </NavLink>
                            </li></>}
                        {isLogin && <><li className="nav-item">
                            <NavLink className="nav-link" to="/Newcard">
                                New Card
                            </NavLink>
                        </li></>}
                        {isLogin && <><li className="nav-item">
                            <NavLink className="nav-link" to="/MyCards">
                                My Card
                            </NavLink>
                        </li></>}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Cards">
                                All Cards
                            </NavLink>
                        </li>
                        {isLogin && <>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Profile">
                                    Profile
                                </NavLink>
                            </li>
                        </>}
                    </ul>

                    {isLogin && <>
                        <Nav className="me-5">
                            <NavDropdown title={`Hi ${username}`} id="collasible-nav-dropdown" className="btn btn-outline-black">
                                <NavDropdown.Item href="/profile">
                                    Profile Info
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/profile/edit">Edit Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/" onClick={() => {
                                    sessionStorage.removeItem("userData");
                                    navigate("/");
                                    setIsLogIn(false);
                                }}>Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav></>}
                </div>
            </div>
        </nav>
    </div>);
}

export default NavBarCMP;