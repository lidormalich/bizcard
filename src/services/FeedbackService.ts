import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function successMessage(message: string) {
    toast.success(message, {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 2000,
    })
}
export function errorMessage(message: string) {
    toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
    })
}
export function deleteMessage(message: string) {
    toast(`🗑   ${message}`, {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    })
}
export function earningMessage(message: string) {
    toast.warn(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",

    })
}