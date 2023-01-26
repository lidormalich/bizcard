import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as yup from "yup";
import Card from "../../interface/Card";
import { addCard } from "../../services/cardServices";
import { errorMessage, successMessage } from "../../services/FeedbackService";
interface CreateCardProps {

}

const CreateCard: FunctionComponent<CreateCardProps> = () => {
    // let navigate = useNavigate();
    let userID: number = JSON.parse(sessionStorage.getItem("userData") as string).userID;
    let formik = useFormik({
        initialValues: {
            companyName: "",
            image: "",
            userId: userID,
            description: "",
            address: "",
            phone: "",
        },
        enableReinitialize: true,
        validationSchema: yup.object({
            companyName: yup.string().required().min(2),
            image: yup.string(),
            description: yup.string().required().min(5),
            address: yup.string().required().min(5),
            phone: yup.string().required().min(7),


        }),
        onSubmit: (values: Card) => {
            addCard({ ...values })
                .then((res) => {
                    // sessionStorage.setItem("userData", JSON.stringify({ isLoggedIn: true, isBusiness: res.data.isBusiness, userID: res.data.id }));
                    successMessage("You registered successfully!");
                    // navigate("/card");
                })
                .catch((err) => console.log(err));
            console.log(values);

        },
    });
    return (
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
                        onChange={formik.handleChange}
                        value={formik.values.image}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingImage">image</label>
                    {formik.touched.image && formik.errors.image && (
                        <p className="text-danger">{formik.errors.image}</p>
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
    );
};

export default CreateCard;