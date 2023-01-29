import { FunctionComponent } from "react";

interface AboutProps {

}

const About: FunctionComponent<AboutProps> = () => {
    return (<>

        <div className="container">
            <div className="row">
                <span>
                    <h1 className="display-1">Who Are We?</h1>
                </span>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <img src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" height="450" alt="" />
                </div>
                <div className="text-start col-md-5 display-6">
                    <div>Biz is a platform for creating and publishing business cards.</div>
                    <div>Other users will be able to see your business details and contact you with the details you provide on your business card.</div>
                    <div> Register now and start your journey! </div>
                </div>
            </div>
        </div>
    </>);
}

export default About;