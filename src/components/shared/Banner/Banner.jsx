import { Link } from 'react-router-dom'
import image1 from '../../../assets/image/Banner/banner1.jpg'
import image2 from '../../../assets/image/Banner/banner2.jpg'
import image3 from '../../../assets/image/Banner/banner3.jpg'
import image4 from '../../../assets/image/Banner/banner4.jpg'
import image5 from '../../../assets/image/Banner/banner5.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { motion } from 'framer-motion'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <>
            <motion.div className='container mx-auto mt-10 p-3 overflow-hidden'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 4 }}
            >
                <Swiper
                    spaceBetween={40}
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
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='w-full h-full absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'></div>
                        <div>
                            <div className="absolute flex flex-col gap-5 transform -translate-y-1/2 left-12 md:left-20 top-1/2">
                                <div className='text-white w-full md:w-1/2'>
                                    <h1 className='text-3xl md:text-5xl font-bold'>Boosting Your Productivity with Time Management</h1>
                                    <p className='text-xl mt-10'>
                                        Explore the incredible discoveries and advancements in space exploration that have expanded our understanding of the cosmos.
                                    </p>
                                </div>
                                <div className='flex gap-10'>
                                    <Link to={'/allblogs'}>
                                        <button className="btn bg-[#5b608b] text-xl text-white">Explore</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <img src={image1} alt="Banner 1" className="w-full" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full h-full absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'></div>
                        <div className="absolute flex flex-col gap-5 transform -translate-y-1/2 left-12 md:left-20 top-1/2">
                            <div className='text-white my-2 w-full md:w-1/2'>
                                <h1 className='text-3xl md:text-5xl font-bold'>Set Boundaries for a Better-Quality Work-Life Balance</h1>
                                <p className='text-xl mt-10'>
                                    These 5 non-negotiables will help 2024 be your most balanced work year yet — Work-life balance is something everyone yearns
                                </p>
                            </div>
                            <div className='flex gap-10'>
                                <Link to={'/allblogs'}>
                                    <button className="btn bg-[#5b608b] text-xl text-white">Explore</button>
                                </Link>
                            </div>
                        </div>
                        <img src={image2} alt="Banner 2" className="w-full rounded-3xl" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full h-full absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'></div>
                        <div className="absolute flex flex-col gap-5 transform -translate-y-1/2 left-12 md:left-20 top-1/2">
                            <div className='text-white my-2 w-full md:w-1/2'>
                                <h1 className='text-3xl md:text-5xl font-bold'>Yes workout is needed for a healthy life</h1>
                                <p className='text-xl mt-10'>
                                    Step away from the Battle Rope, and put down your Tabata Timer — Shortcuts and ‘Hacks’ — we bloody love them.
                                </p>
                            </div>
                            <div className='flex gap-10'>
                                <Link to={'/allblogs'}>
                                    <button className="btn bg-[#5b608b] text-xl text-white">Explore</button>
                                </Link>
                            </div>
                        </div>
                        <img src={image3} alt="Banner 3" className="w-full rounded-3xl" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full h-full absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'></div>
                        <div className="absolute flex flex-col gap-5 transform -translate-y-1/2 left-12 md:left-20 top-1/2">
                            <div className='text-white my-2 w-full md:w-1/2'>
                                <h1 className='text-3xl md:text-5xl font-bold'>smoking is bad habit.</h1>
                                <p className='text-xl mt-10'>
                                    With or without a smoking gun, Nut-enyahu will do as he pleases. It is his pleasure to murder, even civilians, and allying ourselves with him feels like allying
                                </p>
                            </div>
                            <div className='flex gap-10'>
                                <Link to={'/allblogs'}>
                                    <button className="btn bg-[#5b608b] text-xl text-white">Explore</button>
                                </Link>
                            </div>
                        </div>
                        <img src={image4} alt="Banner 4" className="w-full rounded-3xl" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full h-full absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'></div>
                        <div className="absolute flex flex-col gap-5 transform -translate-y-1/2 left-12 md:left-20 top-1/2">
                            <div className='text-white my-2 w-full md:w-1/2'>
                                <h1 className='text-3xl md:text-5xl font-bold'>Why Reading Books is Crucial in this Fast-paced Era?</h1>
                                <p className='text-xl mt-10'>
                                    Books have been my lifelong companions, echoing the age-old adage, “Books are your best friend.”
                                </p>
                            </div>
                            <div className='flex gap-10'>
                                <Link to={'/allblogs'}>
                                    <button className="btn bg-[#5b608b] text-xl text-white">Explore</button>
                                </Link>
                            </div>
                        </div>
                        <img src={image5} alt="Banner 5" className="w-full rounded-3xl" />
                    </SwiperSlide>
                </Swiper>
            </motion.div>
        </>

    );
};

export default Banner;