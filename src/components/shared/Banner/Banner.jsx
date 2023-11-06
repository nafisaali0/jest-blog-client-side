import { Link } from 'react-router-dom'
import image1 from '../../../assets/image/Banner/banner1.jpg'
import image2 from '../../../assets/image/Banner/banner2.jpg'
import image3 from '../../../assets/image/Banner/banner3.jpg'
import image4 from '../../../assets/image/Banner/banner4.jpg'
import image5 from '../../../assets/image/Banner/banner5.jpg'

const Banner = () => {
    return (
        <div className='overflow-hidden z-0'>
            <div className="carousel w-full mb-10">
                <div id="slide1" className="carousel-item relative w-full h-[50rem]">
                    <img src={image1} className="w-full" />
                    <div className='w-full h-full absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'></div>
                    <div className="absolute flex flex-col gap-5 transform -translate-y-1/2 left-12 md:left-20 top-1/2">
                        <div className='text-white w-full md:w-1/2'>
                            <h1 className='text-3xl md:text-5xl font-bold'>Boosting Your Productivity with Time Management</h1>
                            <p className='text-2xl mt-10'>
                                Explore the incredible discoveries and advancements in space exploration that have expanded our understanding of the cosmos.
                            </p>
                        </div>
                        <div className='flex gap-10'>
                            <Link to={'/allblogs'}>
                                <button className="btn bg-[#5b608b] text-xl text-white">Explore</button>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute flex gap-5 transform -translate-y-1/2 right-20 bottom-20">
                        <a href="#slide5" className="btn btn-circle bg-[#5b608b] border-none text-white">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-[#5b608b] border-none text-white">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[50rem]">
                    <img src={image2} className="w-full  rounded-3xl" />
                    <div className='w-full h-full absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'></div>
                    <div className="absolute flex flex-col gap-5 transform -translate-y-1/2 left-12 md:left-20 top-1/2">
                        <div className='text-white my-2 w-full md:w-1/2'>
                            <h1 className='text-3xl md:text-5xl font-bold'>Set Boundaries for a Better-Quality Work-Life Balance</h1>
                            <p className='text-2xl mt-10'>
                                These 5 non-negotiables will help 2024 be your most balanced work year yet — Work-life balance is something everyone yearns
                            </p>
                        </div>
                        <div className='flex gap-10'>
                            <Link to={'/allblogs'}>
                                <button className="btn bg-[#5b608b] text-xl text-white">Explore</button>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute flex gap-5 transform -translate-y-1/2 right-20 bottom-20">
                        <a href="#slide1" className="btn btn-circle bg-[#5b608b] border-none text-white">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-[#5b608b] border-none text-white">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[50rem]">
                    <img src={image3} className="w-full rounded-3xl" />
                    <div className='w-full h-full absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'></div>
                    <div className="absolute flex flex-col gap-5 transform -translate-y-1/2 left-12 md:left-20 top-1/2">
                        <div className='text-white my-2 w-full md:w-1/2'>
                            <h1 className='text-3xl md:text-5xl font-bold'>Yes workout is needed for a healthy life</h1>
                            <p className='text-2xl mt-10'>
                                Step away from the Battle Rope, and put down your Tabata Timer — Shortcuts and ‘Hacks’ — we bloody love them.
                            </p>
                        </div>
                        <div className='flex gap-10'>
                            <Link to={'/allblogs'}>
                                <button className="btn bg-[#5b608b] text-xl text-white">Explore</button>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute flex gap-5 transform -translate-y-1/2 right-20 bottom-20">
                        <a href="#slide2" className="btn btn-circle bg-[#5b608b] border-none text-white">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-[#5b608b] border-none text-white">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-[50rem]">
                    <img src={image4} className="w-full  rounded-3xl" />
                    <div className='w-full h-full absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'></div>
                    <div className="absolute flex flex-col gap-5 transform -translate-y-1/2 left-12 md:left-20 top-1/2">
                        <div className='text-white my-2 w-full md:w-1/2'>
                            <h1 className='text-3xl md:text-5xl font-bold'>smoking is bad habit.</h1>
                            <p className='text-2xl mt-10'>
                                With or without a smoking gun, Nut-enyahu will do as he pleases. It is his pleasure to murder, even civilians, and allying ourselves with him feels like allying
                            </p>
                        </div>
                        <div className='flex gap-10'>
                            <Link to={'/allblogs'}>
                                <button className="btn bg-[#5b608b] text-xl text-white">Explore</button>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute flex gap-5 transform -translate-y-1/2 right-20 bottom-20">
                        <a href="#slide3" className="btn btn-circle bg-[#5b608b] border-none text-white">❮</a>
                        <a href="#slide5" className="btn btn-circle bg-[#5b608b] border-none text-white">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full h-[50rem]">
                    <img src={image5} className="w-full  rounded-3xl" />
                    <div className='w-full h-full absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'></div>
                    <div className="absolute flex flex-col gap-5 transform -translate-y-1/2 left-12 md:left-20 top-1/2">
                        <div className='text-white my-2 w-full md:w-1/2'>
                            <h1 className='text-3xl md:text-5xl font-bold'>Why Reading Books is Crucial in this Fast-paced Era?</h1>
                            <p className='text-2xl mt-10'>
                                Books have been my lifelong companions, echoing the age-old adage, “Books are your best friend.”
                            </p>
                        </div>
                        <div className='flex gap-10'>
                            <Link to={'/allblogs'}>
                                <button className="btn bg-[#5b608b] text-xl text-white">Explore</button>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute flex gap-5 transform -translate-y-1/2 right-20 bottom-20">
                        <a href="#slide4" className="btn btn-circle bg-[#5b608b] border-none text-white">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-[#5b608b] border-none text-white">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;