import { useEffect, useState } from "react";
import useBlogs from "../../../hooks/useBlogs";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { Autoplay, Pagination, FreeMode, } from 'swiper/modules';
import { Link } from "react-router-dom";


const HomeShortBlogs = () => {

    const [blogs] = useBlogs();
    const [shortBlogs, setShortBlogs] = useState([])
    useEffect(() => {
        const sortload = blogs?.sort((a, b) =>
            //in below sorting based on assending order 
            a?.long_description.length - b?.long_description.length
        );
        setShortBlogs(sortload)
    }, [blogs])

    return (
        <>
            <div className="my-16">
                <div
                    className="mb-10"
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-duration="3000"
                    data-aos-easing="ease-in"
                >
                    <h1 className="font-bold text-xl uppercase">Short Blogs</h1>
                    <p className="font-semibold text-lg text-textSmallGray capitalize my-3">Read quickly. Save time and gain knowledge.</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-3 ">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            // navigation={true}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            {shortBlogs?.slice(0, 4)?.map((blog, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="relative hero h-[500px] bg-no-repeat rounded-xl" style={{ backgroundImage: `url(${blog.details_image})` }}
                                        data-aos="fade-left"
                                        data-aos-offset="200"
                                        data-aos-once="false"
                                        data-aos-duration="3000"
                                        data-aos-easing="ease-in-out"
                                        data-aos-mirror="true"
                                    >
                                        <div className="hero-overlay bg-black bg-opacity-50 rounded-xl"></div>
                                        <div className="card-body absolute w-full bottom-8 left-0 md:bottom-12 md:left-12 text-white">
                                            <h2 className="font-bold text-xl">{blog?.category}</h2>
                                            <p className="text-xl font-semibold">{blog?.title}</p>
                                            <div className="flex justify-start items-start">
                                                <Link to={`/blogdetails/${blog?._id}`} target="_blank">
                                                    <button className="py-2 px-4 font-semibold rounded border-primaryColor bg-primaryColor text-white hover:bg-primaryHover flex justify-center items-center gap-1">
                                                        <span>Details</span>
                                                        <svg
                                                            height="20"
                                                            width="20"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                                            <path
                                                                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </svg>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper >
                    </div>
                    <div className="col-span-3">
                        <Swiper
                            spaceBetween={25}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                            breakpoints={{
                                "640": {
                                    slidesPerView: 2,
                                },
                                "425": {
                                    slidesPerView: 1,
                                },
                                "1024": {
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            {shortBlogs.slice(4, -1).map((blog, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="card h-[350px] bg-mainTheme rounded-xl"
                                        data-aos="fade-right"
                                        data-aos-offset="200"
                                        data-aos-once="false"
                                        data-aos-duration="3000"
                                        data-aos-easing="ease-in"
                                    >
                                        <div className="relative">
                                            <figure><img className="w-full h-[208px] rounded-t-xl" src={blog?.details_image} alt="Shoes" /></figure>
                                        </div>
                                        <div className="absolute bottom-36 left-0">
                                            <span className="bg-textSmallGray text-white text-sm font-medium px-3 py-1 border-1 border-textSmallGray rounded-sm">{blog?.category}</span>
                                        </div>
                                        <div className="p-5 mb-3">
                                            <Link to={`/blogdetails/${blog?._id}`} target="_blank">
                                                <h1 className="text-lg font-bold text-black">{blog?.title}</h1>
                                            </Link>
                                            <p className="text-sm font-semibold text-textSmallGray">{blog?.date}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeShortBlogs;