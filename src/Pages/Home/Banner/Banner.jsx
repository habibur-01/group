import { FaArrowRight } from "react-icons/fa";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner-container flex justify-center items-center">
      <div className="w-[80%] ">
        <h1 className="text-[60px] font-extrabold">Welcome To IGL Group</h1>
        <p className="mt-8 leading-8 font-medium">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
          temporibus at <br /> et accusamus, a magnam cupiditate quod maxime nam
          repellendus itaque <br /> eligendi culpa numquam explicabo veritatis
          deserunt !
        </p>
        <button className="bg-[#ff4900] rounded-full btn text-white px-8 text-[16px] mt-10 hover:bg-transparent hover:text-[#ff4900] hover:border-[1px] hover:border-[#ff4900]">
          Appointment{" "}
          <span className="-rotate-45">
            <FaArrowRight />
          </span>
        </button>
      </div>
      <div className="bg-[#ffffff] w-[600px] form-container">
        <form action="" className="p-8 space-y-2">
            <div className="flex flex-col space-y-2">
                <label htmlFor="">Name</label>
                <input type="text" />
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="">Email</label>
                <input type="email" />
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="">Date</label>
                <input type="date" />
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="">Time</label>
                <input type="time" />
            </div>
        </form>
      </div>
    </div>
  );
};

export default Banner;
