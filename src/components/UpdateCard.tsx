import { useFormik } from "formik";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../interface/CardInterface";
import { deleteCard, getAllUserCards, getSpicificCard, updateCard } from "../services/cardServices";
import { isLoginGlobal } from "../App";
import NotHaveAccess from "./Extra/NotHaveAccess/NotHaveAccess";
import Pnf from "./Extra/PageNotFound/Pnf";
import NotUuser from "./Extra/NotUuser/NotUuser";
import { getUserId } from "../services/usersservices";
import { errorMessage, successMessage } from "../services/FeedbackService";

interface UpdateCardProps {

}

const UpdateCard: FunctionComponent<UpdateCardProps> = () => {
    let { id } = useParams();
    let [ismyUser, setIsmyUser] = useState<boolean>(false);
    // let userID: number = JSON.parse(sessionStorage.getItem("userData") as string).userID;

    let navigat = useNavigate();
    let isLogin = useContext<boolean>(isLoginGlobal);
    let [card, setCard] = useState<Card>({
        companyName: "",
        companyEmail: "",
        image: "",
        imageBGC: "",
        description: "",
        address: "",
        phone: "",
    });
    useEffect(() => {
        getSpicificCard(id as string, sessionStorage.getItem("Authorization") as string).then((res) => { setCard(res.data[0]) }).catch((e) => {
            errorMessage(e.request.message);
        });
        getAllUserCards(sessionStorage.getItem("Authorization") as string).then((res) => {

            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].userId == getUserId() && res.data[i]._id == id) {
                    setIsmyUser(true);
                }
            }
        }).catch((e) => { errorMessage(e.request.message); });
    }, []);


    let formik = useFormik({
        initialValues: {
            companyName: card.companyName,
            companyEmail: card.companyEmail,
            image: card.image,
            imageBGC: card.imageBGC,
            description: card.description,
            address: card.address,
            phone: card.phone,
        },
        enableReinitialize: true,
        validationSchema: yup.object({
            companyName: yup.string().required().min(2),
            image: yup.string(),
            imageBGC: yup.string(),
            description: yup.string().required().min(5),
            address: yup.string().required().min(5),
            phone: yup.string().required().min(7),
        }),
        onSubmit: (values: Card) => {
            // 222222
            updateCard(id as string, { ...values }).then((res) => { successMessage("Card Save"); navigat("/mycards") }).catch((e) => console.log(e));
        }

    })


    return (<>
        {!isLogin && <NotHaveAccess />}

        {ismyUser ? (<>
            <div className="container mt-3 col-md-4 text-center">
                <h3 className="display-3">Edit card</h3>
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
                        className="btn btn-secondary my-3"
                        disabled={!formik.dirty || !formik.isValid}
                    >
                        <i className="fa-solid fa-floppy-disk"></i> Save
                    </button>

                </form>
                <button
                    className="btn btn-danger"
                    onClick={() => deleteCard(id as string).then((res) => { successMessage("Card Deleted"); navigat("/mycards") }).catch((e) => console.log(e))}>
                    <i className="fa-solid fa-floppy-disk"></i> Delete
                </button>
            </div></>) : <>
            <NotUuser />
        </>}
    </>);
}


export default UpdateCard;