import logo from '../../../assets/image/logo/upLogo13edit.png'


const Footer = () => {
    return (
        <>
            <div className='bg-black px-5 lg-px-0 '>
                <div className='container mx-auto py-10'>
                    <div className='flex flex-col justify-start items-start py-5'>
                        <img className='w-24' src={logo} alt="" />
                    </div>
                    <footer className="footer py-5 bg-black text-white">
                        <div className='text-white'>
                            <h6 className="text-light_blue">Features</h6>
                            <a className="link link-hover">Create Blog</a>
                            <a className="link link-hover">Manage Blog</a>
                            <a className="link link-hover">Add Reading List</a>
                            <a className="link link-hover">Like & Comment</a>
                        </div>
                        <div className='text-white'>
                            <h6 className="text-light_blue">Features</h6>
                            <a className="link link-hover">Search Blogs</a>
                            <a className="link link-hover">Follow Blogger</a>
                            <a className="link link-hover">Profile Settings</a>
                        </div>
                        <div className='text-white'>
                            <h6 className="text-light_blue">Pages</h6>
                            <a className="link link-hover">Home</a>
                            <a className="link link-hover">All Blogs</a>
                            <a className="link link-hover">Feature Blog</a>
                            <a className="link link-hover">WhishList</a>
                            <a className="link link-hover">Dashboard</a>
                        </div>
                        <div className='text-white'>
                            <h6 className="text-light_blue">Solution</h6>
                            <a className="link link-hover">Education</a>
                            <a className="link link-hover">Life Knowledge</a>
                        </div>
                    </footer>
                    <footer className="footer border-t border-light_purple py-5 bg-black text-white">
                        <aside className="items-center grid-flow-col">
                            <p>© 2024 JEST BLOG.<br />Created by Nafisa Ali</p>
                        </aside>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default Footer;