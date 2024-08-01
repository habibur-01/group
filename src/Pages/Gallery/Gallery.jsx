import PageBanner from "../../Components/Shared/PageBanner/PageBanner";
import image from "../../assets/images/concern.jpg";

const Gallery = () => {
  return (
    <div>
      <PageBanner
        image={image}
        path={"Gallery"}
        title={"Photo Gallery"}
      ></PageBanner>
      <div>
        <div className="text-center my-10 ">
          <h1 className="text-[40px]">
          Photo
            <span className="text-[#ff4900]"> Gallery </span>
          </h1>
          <p className="">
            Each member of our team is dedicated to delivering exceptional
            service, ensuring <br /> that your experience with us is nothing
            short of excellent.{" "}
          </p>
        </div>
        <div>
            <div className="w-[320px]">

            </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
