import { FunctionComponent } from "react";

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
    return (<>

        <div className="center text-white"  >
            <div className="" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                <span>Created with <i className="fa fa-heart"></i> by Lidor Malich: © 2022 Copyright
                    <a href="https://lidormalich.netlify.app">lidormalich.netlify.app</a></span>
                <section>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://wa.me/972526761204"
                        role="button"><i className="fa-brands fa-whatsapp text-white"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/lidormalich/"
                        role="button"><i className="fa-brands fa-linkedin text-white"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/lidormalich"
                        role="button"><i className="fa-brands fa-github text-white"></i></a>
                </section>
            </div>
        </div>


    </>);
}

export default Footer;