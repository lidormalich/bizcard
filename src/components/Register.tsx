import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as yup from "yup";
import UserInterface from "../interface/UserInterface";
import { errorMessage, successMessage as successMsg } from "../services/FeedbackService";
import { addUser } from "../services/usersservices";
interface RegisterProps {
    // isLogin: boolean;
    setIsLogIn: Function;
}

const Register: FunctionComponent<RegisterProps> = ({ setIsLogIn }) => {
    let navigate = useNavigate();

    let formik = useFormik({
        initialValues: { email: "", password: "", name: "", isBusiness: false, image: "" },
        validationSchema: yup.object({
            name: yup.string().required().min(2),
            email: yup.string().required().email().min(5),
            password: yup.string().required().min(8),
            image: yup.string(),
            isBusiness: yup.boolean().required(),
        }),
        onSubmit: (values: UserInterface) => {
            addUser({ ...values })
                .then((res) => {
                    setIsLogIn(true);
                    sessionStorage.setItem("userData", JSON.stringify({ isLoggedIn: true, isBusiness: res.data.isBusiness, userID: res.data.id }));
                    successMsg("You registered successfully!");
                    navigate("/home");
                })
                .catch((err) => console.log(err));
            // console.log(values);

        },
    });
    return (
        <div className="container mt-3 col-md-4 text-center">
            <h3 className="display-3">REGISTER</h3>
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

                <div className="form-floating">
                    <span>
                        <label >User Type:</label>
                        {/* <div className="custom-control custom-switch"> */}
                        <input type="checkbox" className="custom-control-input"
                            id="floatingIsBusiness"
                            placeholder="isBusiness"
                            name="isBusiness"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <label className="custom-control-label" htmlFor="floatingIsBusiness">selecte for Business</label>
                        {/* </div> */}
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
    );
};

export default Register;