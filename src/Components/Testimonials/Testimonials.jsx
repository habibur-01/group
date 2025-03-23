import { BiMessageDetail } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import customer from "../../assets/images/member-3.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <div>
      <div className="flex justify-center gap-20">
        <h1 className="text-4xl text-right tracking-wide font-bold py-4">
          Our Customer <br />
          Review
        </h1>
        <p className="h-28 w-[1px] bg-[#ffd2bf]"></p>
        <div className="py-4">
          <BiMessageDetail size={75} style={{ color: "#ff4900" }} />

          <div className="-mt-14 ml-10">
            <BiMessageDetail size={75} style={{ color: "#ff4900" }} />
          </div>
        </div>
      </div>
      <div className="my-10 z-0 w-[80%] mx-auto ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="!w-full"
        >
          <SwiperSlide>
            <div className="bg-gradient-to-r from-[#ff4900] via-[#f7d2c3] to-[#f3bd80] w-[80%] mx-auto min-h-fit py-6 my-12 border-2 border-red-400">
              <div>
                <h1 className="text-xl font-bold text-left ml-10 text-black">
                  Jhon Wick
                </h1>
              </div>
              <div className="bg-[#ffffff] m-10 p-5 flex justify-between rounded-lg">
                <p className=" text-lg mx-auto leading-8 text-gray-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                  facilis explicabo dolores vero praesentium! Ea perferendis
                  iure adipisci laborum velit!
                </p>
                <img
                  src={customer}
                  className="w-20 h-20 border-2 rounded-full border-[#ffffff] -mt-14"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#ff4900]/60 w-[80%] mx-auto min-h-fit py-6 my-12">
              <div>
                <h1 className="text-xl font-bold text-left ml-10 text-black">
                  Jhon Wick
                </h1>
              </div>
              <div className="bg-[#ffffff] m-10 p-5 flex justify-between rounded-lg">
                <p className=" text-lg text-gray-600 mx-auto leading-8">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                  facilis explicabo dolores vero praesentium! Ea perferendis
                  iure adipisci laborum velit!
                </p>
                <img
                  src={customer}
                  className="w-20 h-20 border-2 rounded-full border-[#ffffff] -mt-14"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#ff4900]/60 w-[80%] mx-auto min-h-fit py-6 my-12">
              <div>
                <h1 className="text-xl font-bold text-left ml-10 text-black">
                  Jhon Wick
                </h1>
              </div>
              <div className="bg-[#ffffff] m-10 p-5 flex justify-between rounded-lg">
                <p className=" text-lg text-gray-600 mx-auto leading-8">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                  facilis explicabo dolores vero praesentium! Ea perferendis
                  iure adipisci laborum velit!
                </p>
                <img
                  src={customer}
                  className="w-20 h-20 border-2 rounded-full border-[#ffffff] -mt-14"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
