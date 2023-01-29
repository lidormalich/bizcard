import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { date } from "yup/lib/locale";
import UserInterface from "../interface/UserInterface";
import { errorMessage, successMessage } from "../services/FeedbackService";
import { checkUser } from "../services/usersservices";

interface LoginProps {
    setIsLogIn: Function;
}

const Login: FunctionComponent<LoginProps> = ({ setIsLogIn }) => {
    let navigate = useNavigate();
    let formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: yup.object({
            email: yup.string().required().email().min(5),
            password: yup.string().required().min(8)
        }),
        onSubmit: (values: UserInterface) => {
            checkUser(values).then((res) => {
                if (res.data.length) {
                    setIsLogIn(true);
                    sessionStorage.setItem("userData", JSON.stringify({ isLoggedIn: true, isBusiness: res.data[0].isBusiness, userID: res.data[0].id }));
                    successMessage("You Loged-In :)");
                    navigate('/home');
                }
                else { errorMessage("Wrong email or password"); navigate('/login'); }
            }).catch((e) => { errorMessage("Wrong email or password"); console.log(e); }
            );
        }
    })

    return (<>
        <div className="container">
            <div className="row">
                <h5 className="display-5">Login</h5>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <img src="https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" height="450" alt="" />
                </div>
                <div className=" col-md-5">
                    <div className="container mt-5 col-md-4">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="floatingInput">Email address</label>
                                {formik.touched.email && formik.errors.email && (
                                    <small className="text-danger">{formik.errors.email}</small>
                                )}
                            </div>

                            <div className="form-floating">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="floatingPassword">Password</label>
                                {formik.touched.password && formik.errors.password && (
                                    <small className="text-danger">{formik.errors.password}</small>
                                )}
                            </div>
                            <button type="submit" className="btn btn-success w-100 my-3"
                                disabled={!formik.isValid || !formik.dirty}>Login</button>
                        </form>
                        <Link to={"/register"}>new user? register hare</Link>

                    </div>
                </div>
            </div>
        </div>

    </>);
}

export default Login;