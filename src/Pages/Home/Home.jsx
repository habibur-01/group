import OurPartner from "../../Components/OurPartner/OurPartner";
import OurServices from "../../Components/OurServices/OurServices";
import SisterConcern from "../../Components/SisterConcern/SisterConcern";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <Testimonials></Testimonials>
            <SisterConcern></SisterConcern>
            <OurPartner></OurPartner>
        </div>
    );
};

export default Home;