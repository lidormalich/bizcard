import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as yup from "yup";
import UserInterface from "../interface/UserInterface";
import { errorMessage, successMessage as successMsg } from "../services/FeedbackService";
import { addUser, getUserName } from "../services/usersservices";
interface RegisterProps {
    // isLogin: boolean;
    setIsLogIn: Function;
    setUserName: Function;

}

const Register: FunctionComponent<RegisterProps> = ({ setIsLogIn, setUserName }) => {
    let navigate = useNavigate();

    let formik = useFormik({
        initialValues: { email: "", password: "", name: "", isBusiness: false, image: "", location: "" },
        validationSchema: yup.object({
            name: yup.string().required().min(2),
            email: yup.string().required().email().min(5),
            password: yup.string().required().min(8),
            image: yup.string(),
            location: yup.string().min(4),
            isBusiness: yup.boolean().required(),
        }),
        onSubmit: (values: UserInterface) => {
            addUser({ ...values })
                .then((res) => {
                    // setIsLogIn(true);
                    // sessionStorage.setItem("userData", JSON.stringify({ isLoggedIn: true, isBusiness: res.data.isBusiness, userID: res.data.id }));
                    // successMsg("You registered successfully!");
                    // setUserName(res.data.name);
                    // navigate("/");

                    setIsLogIn(true);
                    sessionStorage.setItem("Authorization", res.data);
                    sessionStorage.setItem("isLogin", "true");
                    setUserName(res.data.name);
                    console.log(res.data);
                    successMsg("You are log-in :)");
                    navigate('/');
                    getUserName().then(res2 => setUserName(res2.data.name))
                })
                .catch((err) => console.log(err));

        },
    });
    return (
        <div className="container">
            <div className="row">
                <h5 className="display-5">Register</h5>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <img src="https://labyrinthinc.com/wp-content/uploads/2019/12/registery-your-charity.jpg" height="450" alt="" />
                </div>
                <div className=" col-md-5">
                    <div className="container mt-5 col-md-4">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInputName"
                                    placeholder="John"
                                    name="name"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="floatingInputName">Name</label>
                                {formik.touched.name && formik.errors.name && (
                                    <p className="text-danger">{formik.errors.name}</p>
                                )}
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    name="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="floatingInput">Email address</label>
                                {formik.touched.email && formik.errors.email && (
                                    <p className="text-danger">{formik.errors.email}</p>
                                )}
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    name="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="floatingPassword">Password</label>
                                {formik.touched.password && formik.errors.password && (
                                    <p className="text-danger">{formik.errors.password}</p>
                                )}
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingimage"
                                    placeholder="image"
                                    name="image"
                                    onChange={formik.handleChange}
                                    value={formik.values.image}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="floatingimage">Image</label>
                                {formik.touched.image && formik.errors.image && (
                                    <p className="text-danger">{formik.errors.image}</p>
                                )}
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatinglocation"
                                    placeholder="location"
                                    name="location"
                                    onChange={formik.handleChange}
                                    value={formik.values.location}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="floatinglocation">location</label>
                                {formik.touched.location && formik.errors.location && (
                                    <p className="text-danger">{formik.errors.location}</p>
                                )}
                            </div>

                            <div className="form-floating">
                                <span>
                                    <label >User Type:</label>
                                    <input type="checkbox" className="custom-control-input"
                                        id="floatingIsBusiness"
                                        placeholder="isBusiness"
                                        name="isBusiness"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    <label className="custom-control-label" htmlFor="floatingIsBusiness">selecte for Business</label>
                                </span>

                            </div>
                            <button
                                type="submit"
                                className="btn btn-secondary w-100 my-3"
                                disabled={!formik.dirty || !formik.isValid}
                            >
                                Register
                            </button>
                        </form>
                        <Link to="/">Already have user? Login here</Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;