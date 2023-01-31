import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import '../NotHaveAccess/NotHaveAccess.css';

interface NotUuserProps {

}

const NotUuser: FunctionComponent<NotUuserProps> = () => {
    return (<>
        <div className="forbidden">
            <h2 className="display-2"> 403 Forbidden </h2>
            <i className="fa-solid fa-user-large-slash logo" style={{ fontSize: "15em" }}>  </i>
            <hr />
        </div>
        <div className="forbidden">
            <h4> it's save by another user... we cannot load the data... </h4>
        </div>

        <Link to="/login" >You want to see that page? Try to login into system</Link>
    </>);
}

export default NotUuser;