import { FunctionComponent } from "react";

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
    return (<>

        <footer className="text-center text-white" style={{ opacity: "0.6" }}>
            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2022 Copyright Lidor Malich:
                <a className="text-white" href="https://lidormalich.netlify.app">lidormalich.netlify.app</a>
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="https://wa.me/972526761204" role="button">
                        <img src="../media/whatsapp.png" className="smallSocialIcon" alt="" /></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/lidormalich/"
                        role="button"><img src="../media/linkedin.png" className="smallSocialIcon" alt="" /></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/lidormalich"
                        role="button"><img src="../media/github.png" className="smallSocialIcon" alt="" /></a>
                </section>
            </div>
        </footer>


    </>);
}

export default Footer;