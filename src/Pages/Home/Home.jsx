import OurPartner from "../../Components/OurPartner/OurPartner";
import OurServices from "../../Components/OurServices/OurServices";
import SisterConcern from "../../Components/SisterConcern/SisterConcern";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <OurServices></OurServices>
      </div>
      <div>
        <Testimonials></Testimonials>
      </div>
      <div>
        <SisterConcern></SisterConcern>
      </div>
      <div>
        <OurPartner></OurPartner>
      </div>
    </div>
  );
};

export default Home;
