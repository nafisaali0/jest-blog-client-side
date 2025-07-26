import logo from '../../../assets/image/logo/upLogo13edit.png'
import moment from 'moment';

const Footer = () => {
    return (
        <>
            <div className='bg-black'>
                <div className='max-w-[1300px] mx-auto bg-black px-2 lg:px-5 py-5'>
                    <div className='flex flex-col justify-start items-start py-5'>
                        <img className='w-24' src={logo} alt="" />
                    </div>
                    <footer className="footer py-5 bg-black text-white">
                        <div className='text-sm font-medium text-mainTheme'>
                            <h6 className="font-bold text-lg text-white">Features</h6>
                            <span className="link link-hover">Create & Update Blog</span>
                            <span className="link link-hover">Manage Blog</span>
                            <span className="link link-hover">Reading List</span>
                            <span className="link link-hover">Search By Category</span>
                        </div>
                        <div className='text-sm font-medium text-mainTheme'>
                            <h6 className="font-bold text-lg text-white">Features</h6>
                            <span className="link link-hover">Search Blogs</span>
                            <span className="link link-hover">Follow Blogger</span>
                            <span className="link link-hover">Profile Settings</span>
                            <span className="link link-hover">Like & Comment</span>
                        </div>
                        <div className='text-sm font-medium text-mainTheme'>
                            <h6 className="font-bold text-lg text-white">Pages</h6>
                            <a href='https://blog-server-side-ochre.vercel.app/' className="link link-hover">Home</a>
                            <a href='https://blog-server-side-ochre.vercel.app/addblog' className="link link-hover">Create Blogs</a>
                            <a href='https://blog-server-side-ochre.vercel.app/wishlist' className="link link-hover">Reading List</a>
                            <a href='https://blog-server-side-ochre.vercel.app/dashboard' className="link link-hover">Dashboard</a>
                        </div>
                        <div className='text-sm font-medium text-mainTheme'>
                            <h6 className="font-bold text-lg text-white">Pages</h6>
                            <a href='https://blog-server-side-ochre.vercel.app/featureblog' className="link link-hover">Feature Blog</a>
                            <a href='https://blog-server-side-ochre.vercel.app/dashboard/profile' className="link link-hover">User Profile</a>
                            <a href='https://blog-server-side-ochre.vercel.app/dashboard/profile-setting' className="link link-hover">Settings</a>
                        </div>
                        <div className='text-sm font-medium text-mainTheme'>
                            <h6 className="font-bold text-lg text-white">Solution</h6>
                            <span className="link link-hover">Education</span>
                            <span className="link link-hover">Life Knowledge</span>
                        </div>
                    </footer>
                    <footer className="footer border-t border-light_purple py-5 bg-black text-sm font-medium text-mainTheme">
                        <aside className="items-center grid-flow-col">
                            <p>© {moment().format("YYYY")} JEST BLOG.<br />
                                Created by

                                <span className='hover:text-primaryColor'>
                                    <a href="https://github.com/nafisaali0"> Nafisa Ali</a>
                                </span>
                            </p>
                        </aside>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default Footer;