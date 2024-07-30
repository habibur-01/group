import { BiMessageDetail } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

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
      <div className="my-10">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center py-10">
              <div className="text-center">
                <p className="text-center text-2xl w-[80%] lg:w-[50%] mx-auto leading-8">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                  facilis explicabo dolores vero praesentium! Ea perferendis
                  iure adipisci laborum velit!
                </p>
                <h3 className="text-xl font-bold mt-8">Tom Hardy</h3>
                <h4 className="text-[#ff4900]">CEO</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center py-10">
              <div className="text-center">
                <p className="text-center text-2xl w-[80%] lg:w-[50%] mx-auto leading-8">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                  facilis explicabo dolores vero praesentium! Ea perferendis
                  iure adipisci laborum velit!
                </p>
                <h3 className="text-xl font-bold mt-8">Tom Hardy</h3>
                <h4 className="text-[#ff4900]">CEO</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center pt-10">
              <div className="text-center">
                <p className="text-center text-2xl w-[80%] lg:w-[50%] mx-auto leading-8">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                  facilis explicabo dolores vero praesentium! Ea perferendis
                  iure adipisci laborum velit!
                </p>
                <h3 className="text-xl font-bold mt-8">Tom Hardy</h3>
                <h4 className="text-[#ff4900] mt-3">CEO</h4>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
