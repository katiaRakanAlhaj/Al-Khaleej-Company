import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./servicesStyle.css";

const Client = ({homePageData}) => {
  
    return (
        <div className="container1 mx-auto py-10">
            <div className='swiper-wrapper-custom'>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={10}
                    slidesPerView={10}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: false,
                    }}
                    loop={true}
                    speed={800}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 4 },
                        768: { slidesPerView: 6 },
                        1024: { slidesPerView: 8 },
                        1280: { slidesPerView: 10 },
                    }}
                    className="client-swiper mt-[-3rem]"
                >
                    {homePageData?.data?.our_clients?.map((client, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center">
                            <img 
                                src={client.client} 
                                className="w-[10rem] h-[10rem] object-contain" 
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Client;