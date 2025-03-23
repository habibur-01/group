import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Container from "../Shared/Container/Container";
import desktop from "../../assets/images/monitor.png";
import browser from "../../assets/images/browser.png";
import "./ourservices.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

AOS.init();
const OurServices = () => {
  return (
    <div className="my-20">
      <SectionTitle
        heading={"What We Do"}
        subHeading={"Our Main Concern"}
      ></SectionTitle>
      <Container>
        <div
          className="grid grid-cols-3 mt-10"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <Link to={`/servicedetails/${3}`}>
            <div className="card-content card bg-base-100 w-96 rounded-none border-[1px] border-t-[#ffd2bf] border-l-[#ffd2bf] shadow-xl">
              <div className="card-body space-y-3">
                <div>
                  <img src={desktop} alt="" className="w-12 h-12" />
                </div>
                <h2 className="card-title">Duronto Web</h2>
                <p>
                  Duronto web is a sister concern of Duronto Group of Company.
                  We provide software and web services.
                </p>
                <div className="card-actions justify-start">
                  <button className="text-[#ff4900] font-semibold">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </Link>
          <Link to={`/servicedetails/${3}`}>
            <div className="card-content card bg-base-100 w-96 rounded-none border-[1px] border-t-[#ffd2bf] border-l-[#ffd2bf] shadow-xl">
              <div className="card-body space-y-3">
                <div>
                  <img src={browser} alt="" className="w-12 h-12" />
                </div>
                <h2 className="card-title">Duronto Web</h2>
                <p>
                  Duronto web is a sister concern of Duronto Group of Company.
                  We provide software and web services.
                </p>
                <div className="card-actions justify-start">
                  <button className="text-[#ff4900] font-semibold">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </Link>
          <Link to={`/servicedetails/${3}`}>
            <div className="card-content card bg-base-100 w-96 rounded-none border-[1px] border-t-[#ffd2bf] border-l-[#ffd2bf] shadow-xl">
              <div className="card-body space-y-3">
                <div>
                  <img src={desktop} alt="" className="w-12 h-12" />
                </div>
                <h2 className="card-title">Duronto Web</h2>
                <p>
                  Duronto web is a sister concern of Duronto Group of Company.
                  We provide software and web services.
                </p>
                <div className="card-actions justify-start">
                  <button className="text-[#ff4900] font-semibold">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default OurServices;
