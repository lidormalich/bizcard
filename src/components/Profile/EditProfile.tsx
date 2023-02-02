import { useFormik } from "formik";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as yup from "yup";
import { isLoginGlobal } from "../../App";
import UserInterface from "../../interface/UserInterface";
import { successMessage } from "../../services/FeedbackService";
import { updateUserInfo, getUserInfo } from "../../services/usersservices";
import NotUuser from "../Extra/NotUuser/NotUuser";

interface EditProfileProps {

}

const EditProfile: FunctionComponent<EditProfileProps> = () => {
    let userID: number = JSON.parse(sessionStorage.getItem("userData") as string).userID;

    let navigat = useNavigate();
    let isLogin = useContext<boolean>(isLoginGlobal);
    let [user, setUser] = useState<UserInterface>({
        name: "",
        email: "",
        location: "",
        password: "",
        image: ""
    });
    useEffect(() => {
        getUserInfo(userID).then((res) => { setUser(res.data); }).catch((e) => {
            console.log(e);
        });
    }, []);


    let formik = useFormik({
        initialValues: {
            name: user.name,
            email: user.email,
            location: user.location,
            password: user.password,
            image: user.image
        },
        enableReinitialize: true,
        validationSchema: yup.object({
            name: yup.string().required().min(2),
            email: yup.string().required().email().min(5),
            password: yup.string().required().min(8),
            image: yup.string(),
            location: yup.string().min(4),
        }),
        onSubmit: (values: UserInterface) => {
            updateUserInfo(userID, { ...values }).then((res) => {
                successMessage("Update");
                navigat("/profile");
            }
            ).catch((e) => console.log(e));
        }
    })


    return (<>
        {isLogin ? (<>
            <h3 className="display-3">Edit Profile</h3>
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


                    <button
                        type="submit"
                        className="btn btn-secondary w-100 my-3"
                        disabled={!formik.dirty || !formik.isValid}
                    >
                        Update info
                    </button>
                </form>

            </div>

        </>) : <>
            <NotUuser />
        </>}
    </>);
}

export default EditProfile;


