import { FunctionComponent } from "react";

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    return (<>
        <div className="container">
            <div className="row">
                <h1 className="display-1">Welcome to Biz Card Online</h1>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <img src="https://www.meraprint.com/wp-content/uploads/2021/09/business-visiting-cards-1.jpg" height="350" alt="" />
                </div>
                <div className="text-start col-md-7">
                    <p className="h5">Welcome to BizCard, your one-stop solution for premium quality business cards. We understand that your business card is often the first impression you make on potential clients and partners, and we are here to help you make a lasting impact.
                        With 8 years, we have honed our skills and expertise in creating custom business cards that reflect your brand and showcase your professionalism. Our team of experienced designers and printers work closely with you to bring your vision to life.
                        We offer a wide range of design and printing options, including  foil printing, custom shapes, etc... , all at competitive prices. Browse our portfolio to see the quality of our work, or use our online design tool to create your own unique business card in minutes.
                        Whether you need 50 cards for a small business or 10,000 cards for a large corporation, we've got you covered. Our commitment to customer satisfaction is evident in our  99% customer satisfaction rate, and we are confident that you'll love your business cards from BizCard.
                        Get started now and elevate your brand with custom business cards from BizCard.</p>
                </div>
            </div>
        </div>
    </>);
}

export default Home;