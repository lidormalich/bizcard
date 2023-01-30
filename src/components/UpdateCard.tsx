import { useFormik } from "formik";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../interface/Card";
import { getAllUserCards, getSpicificCard, updateCard } from "../services/cardServices";
import { isLoginGlobal } from "../App";
import NotHaveAccess from "./Extra/NotHaveAccess/NotHaveAccess";
import Pnf from "./Extra/PageNotFound/Pnf";

interface UpdateCardProps {

}

const UpdateCard: FunctionComponent<UpdateCardProps> = () => {
    let { id } = useParams();
    let [ismyUser, setIsmyUser] = useState<boolean>(false);
    let userID: number = JSON.parse(sessionStorage.getItem("userData") as string).userID;

    let navigat = useNavigate();
    let isLogin = useContext<boolean>(isLoginGlobal);
    let [card, setCard] = useState<Card>({
        companyName: "",
        companyEmail: "",
        image: "",
        description: "",
        address: "",
        phone: ""
    });
    useEffect(() => {
        // try {
        //     getSpicificCard(parseInt(id as string)).then((res) => {
        //         // console.log(r); console.log(r.data); console.log("siso");
        //         setCard(res.data)
        //     }).catch((e) => console.log(e));

        //     //888888888888888888888888888888888888 
        //     getSpicificCard(parseInt(id as string)).then((res) => {
        //         setCard(res.data);
        //         // console.log("card id");
        //         // console.log(card.id);

        //     }).catch((e) => { console.log(e); (<Pnf />) });
        //     getAllUserCards(userID).then((res) => {
        //         console.log("User ID1");
        //         console.log(userID);

        //         for (let cardItem of res.data) {
        //             console.log(res.data);

        //             // console.log(cardItem.name.length);
        //             console.log(`card is`);
        //             console.log(cardItem);
        //             console.log(`user id ${userID} and serch is ${cardItem.userId}`);

        //             // צריך לבדוק למה מקבלים את האובייקט ששלחתי

        //             if (cardItem.userId === userID) {
        //                 console.log("trueee");

        //                 setIsmyUser(true);
        //                 break;
        //             }
        //         }
        //     }).catch((e) => { console.log(e); (<Pnf />) })
        // } catch (error) {
        //     console.log(error); <Pnf />
        // }

        getSpicificCard(parseInt(id as string)).then((res) => { setCard(res.data); setIsmyUser(false) }).catch((e) => {
            console.log(e); console.log("not found 404 lidor");
            console.log(userID);
        });
        getAllUserCards(userID).then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].userId == userID) {
                    if (res.data[i].id == card.id) {
                        setIsmyUser(true); console.log("IS MY USER");
                    }
                }
            }


        }).catch((e) => { console.log(e); });

    }, []);


    let formik = useFormik({
        initialValues: {
            companyName: card.companyName,
            companyEmail: card.companyEmail,
            image: card.image,
            description: card.description,
            address: card.address,
            userId: userID,
            phone: card.phone
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
            updateCard(parseInt(id as string), { ...values }).then((res) => navigat("/mycards")).catch((e) => console.log(e));
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
                    <button
                        type="submit"
                        className="btn btn-secondary w-100 my-3"
                        disabled={!formik.dirty || !formik.isValid}
                    >
                        <i className="fa-solid fa-plus text-white"></i> Save
                    </button>
                </form>
            </div></>) : <>
            <h5 className="display-5">it's save by another user... we cannot load the data...</h5>
            <Pnf />
        </>}
    </>);
}


export default UpdateCard;