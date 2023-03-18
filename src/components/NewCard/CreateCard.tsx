import { useFormik } from "formik";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { isLoginGlobal } from "../../App";
import CardInterface from "../../interface/CardInterface";
import { addCard } from "../../services/cardServices";
import { errorMessage, successMessage } from "../../services/FeedbackService";
import NotHaveAccess from "../Extra/NotHaveAccess/NotHaveAccess";
interface CreateCardProps {

}

const CreateCard: FunctionComponent<CreateCardProps> = () => {
    let isLogin = useContext<boolean>(isLoginGlobal);
    let navigate = useNavigate();
    // let [imageIcon, setImageIcon] = useState<string>("");


    // setImageIcon("https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns=");


    // useEffect(() => {
    //     // refresh
    // }, [imageIcon]);
    let formik = useFormik({
        initialValues: {
            companyName: "",
            companyEmail: "",
            image: "",
            imageBGC: "",
            description: "",
            address: "",
            phone: "",
        },
        enableReinitialize: true,
        validationSchema: yup.object({
            companyName: yup.string().required().min(2),
            companyEmail: yup.string().email().required().min(2),
            image: yup.string(),
            imageBGC: yup.string(),
            description: yup.string().required().min(5),
            address: yup.string().required().min(5),
            phone: yup.string().required().min(7),


        }),
        onSubmit: (values: CardInterface) => {
            addCard({ ...values })
                .then((res) => {
                    successMessage("You add card successfully!");
                    navigate("/cards");
                })
                .catch((err) => console.log(err));
        },
    });
    return (
        <>
            {!isLogin ? <NotHaveAccess /> : (
                // <div className="container">
                //     <div className="row">
                //         <div className="col-md-7">
                //             <h5>image perview</h5>
                //             {/* <img src={imageIcon} height="450" alt="" /> */}
                //         </div>
                //         <div className=" col-md-5">
                <div className="container mt-3 col-md-4 text-center">
                    <h3 className="display-3">Add card</h3>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInputName"
                                placeholder="Name PLSSSSS"
                                name="companyName"
                                onChange={formik.handleChange}
                                value={formik.values.companyName}
                                onBlur={formik.handleBlur}
                            />
                            <label htmlFor="floatingInputName">Company Name</label>
                            {formik.touched.companyName && formik.errors.companyName && (
                                <p className="text-danger">{formik.errors.companyName}</p>
                            )}
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingDescription"
                                placeholder="description"
                                name="description"
                                onChange={formik.handleChange}
                                value={formik.values.description}
                                onBlur={formik.handleBlur}
                            />
                            <label htmlFor="floatingDescription">description</label>
                            {formik.touched.description && formik.errors.description && (
                                <p className="text-danger">{formik.errors.description}</p>
                            )}
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingcompanyEmail"
                                placeholder="companyEmail"
                                name="companyEmail"
                                onChange={formik.handleChange}
                                value={formik.values.companyEmail}
                                onBlur={formik.handleBlur}
                            />
                            <label htmlFor="floatingcompanyEmail">Company Email</label>
                            {formik.touched.companyEmail && formik.errors.companyEmail && (
                                <p className="text-danger">{formik.errors.companyEmail}</p>
                            )}
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInputAddress"
                                placeholder="address plsssss"
                                name="address"
                                onChange={formik.handleChange}
                                value={formik.values.address}
                                onBlur={formik.handleBlur}
                            />
                            <label htmlFor="floatingInputAddress">address</label>
                            {formik.touched.address && formik.errors.address && (
                                <p className="text-danger">{formik.errors.address}</p>
                            )}
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="tel"
                                className="form-control"
                                id="floatingPhone"
                                placeholder="phone"
                                name="phone"
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                                onBlur={formik.handleBlur}
                            />
                            <label htmlFor="floatingPhone">phone</label>
                            {formik.touched.phone && formik.errors.phone && (
                                <p className="text-danger">{formik.errors.phone}</p>
                            )}
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingImage"
                                placeholder="image"
                                name="image"
                                onChange={(e) => {
                                    formik.handleChange(e);
                                    // setImageIcon(e.target.value);
                                }}
                                value={formik.values.image}
                                onBlur={formik.handleBlur}

                            />
                            <label htmlFor="floatingImage">image</label>
                            {formik.touched.image && formik.errors.image && (
                                <p className="text-danger">{formik.errors.image}</p>
                            )}
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingImageBGC"
                                placeholder="imageBGC"
                                name="imageBGC"
                                onChange={formik.handleChange}
                                value={formik.values.imageBGC}
                                onBlur={formik.handleBlur}

                            />
                            <label htmlFor="floatingImageBGC">image background</label>
                            {formik.touched.imageBGC && formik.errors.imageBGC && (
                                <p className="text-danger">{formik.errors.imageBGC}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="btn btn-secondary w-100 my-3"
                            disabled={!formik.dirty || !formik.isValid}
                        >
                            <i className="fa-solid fa-plus text-white"></i> Add
                        </button>
                    </form>
                </div>
                //         </div>
                //     </div>
                // </div>
            )}
        </>
    );
};

export default CreateCard;