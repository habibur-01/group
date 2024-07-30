import OurServices from "../../Components/OurServices/OurServices";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;