import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import step1 from "../../../assets/images/step1.png";
import step2 from "../../../assets/images/step2.png";
import step3 from "../../../assets/images/step3.png";
import step4 from "../../../assets/images/step4.png";
import "./servicesStyle.css";

const Client = () => {
    const clients = [
        { id: 1, img: step1, alt: "Client 1" },
        { id: 2, img: step2, alt: "Client 2" },
        { id: 3, img: step3, alt: "Client 3" },
        { id: 4, img: step4, alt: "Client 4" },
        { id: 5, img: step1, alt: "Client 5" },
        { id: 6, img: step2, alt: "Client 6" },
        { id: 7, img: step3, alt: "Client 7" },
        { id: 8, img: step4, alt: "Client 8" },
        { id: 9, img: step1, alt: "Client 9" },
        { id: 10, img: step2, alt: "Client 10" },
          { id: 11, img: step1, alt: "Client 1" },
        { id: 12, img: step2, alt: "Client 2" },
        
    ];

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
                    {clients.map((client, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center">
                            <img 
                                src={client.img} 
                                alt={client.alt} 
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