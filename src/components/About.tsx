import { FunctionComponent } from "react";

interface AboutProps {

}

const About: FunctionComponent<AboutProps> = () => {
    return (<>

        <div className="container">
            <div className="row"><h1 className="display-1">Who Are We?</h1></div>
            <div className="row">
                <div className="col-md-3">
                    <img src="https://github.com/lidormalich/bizcard/blob/master/src/media/bizcardLogo2.png?raw=true" sizes="500" alt="" />
                </div>
                <div className="col-md-9">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, doloribus autem dolores sit animi aliquam nostrum perspiciatis, quam fugit iusto odio beatae atque nobis itaque dolore ab aspernatur dolorem! Tenetur dolores impedit nulla obcaecati atque odit possimus magnam! Voluptate quaerat, assumenda aliquam magnam nesciunt quasi sunt, Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquid porro tempora, necessitatibus facere maxime repudiandae quasi culpa perspiciatis repellendus! Adipisci aliquam tempora eligendi consectetur tempore veniam nobis ducimus, magnam minus fugit id facilis, dolorem quam! Autem aliquam, voluptatum, cumque quos perferendis, consectetur laborum esse vel eaque quam aspernatur. Cumque doloribus quidem at neque nam tenetur velit, modi voluptatum beatae tempora vel dolorem? Pariatur, porro et, architecto sed commodi alias quia asperiores, autem qui illum non velit esse. Obcaecati temporibus accusantium magnam laudantium similique? Eum consequatur consequuntur fuga, magnam beatae doloribus aspernatur quia et, quasi nostrum distinctio iste mollitia laudantium? </p>
                </div>
            </div>
        </div>


    </>);
}

export default About;