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
        const sortload = blogs.sort((a, b) =>
            //in below sorting based on assending order 
            a.long_description.length - b.long_description.length
        );
        setShortBlogs(sortload)
    }, [blogs])
    // console.log(shortBlogs)
    return (
        <>
            <div className="container mx-auto overflow-hidden my-16 p-5">
                <div className="mb-10">
                    <h1 className="font-bold text-3xl uppercase">Short Blogs</h1>
                    <p className="font-semibold text-xl text-light_purple capitalize my-3">Read quickly. Save time and gain knowledge.</p>
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
                            {shortBlogs.slice(0, 4).map((blog, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative hero h-[500px] bg-no-repeat" style={{ backgroundImage: `url(${blog.details_image})` }}>
                                        <div className="hero-overlay bg-black bg-opacity-50 rounded-lg"></div>
                                        <div className="card-body absolute w-full bottom-8 left-0 md:bottom-12 md:left-12 text-white">
                                            <h2 className="card-title">{blog.category}</h2>
                                            <p className="text-2xl font-semibold">{blog.title}</p>
                                            <div className="card-actions justify-start">
                                                <Link to={`/blogdetails/${blog._id}`} target="_blank">
                                                    <button className="px-8 py-2 font-bold rounded-md bg-light_purple hover:bg-hover_btn">Details</button>
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
                                    <div className="card  h-[350px] bg-base-100 shadow-xl">
                                        <div className="relative">
                                            <figure><img className="w-full h-[209px]" src={blog.details_image} alt="Shoes" /></figure>
                                        </div>
                                        <div className="absolute bottom-36 left-0">
                                            <span className="bg-card_white text-black font-bold px-3 py-1 border-2 border-light_gray rounded-r-md">{blog.category}</span>
                                        </div>
                                        <div className="card-body">
                                            <Link to={`/blogdetails/${blog._id}`} target="_blank">
                                                <h1 className="card-title">{blog.title}</h1>
                                            </Link>
                                            <p>{blog.date}</p>
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