import { FunctionComponent, useEffect } from "react";
import './test.css';

interface TestProps {

}

const Test: FunctionComponent<TestProps> = () => {
    useEffect(() => {
        console.log((document.getElementById("checkboxid") as HTMLInputElement).checked)
    }, []);
    return (<>
        <div className="contienner">
            <h1>test</h1>
            <div className="checkbox">
                <input type="checkbox" name="switch" className="switchid" id="checkboxid" />

                <label className="stylecb" htmlFor="checkboxid">
                    <div className="circlecb">

                    </div>
                </label>
            </div>
        </div>

    </>);
}

export default Test;