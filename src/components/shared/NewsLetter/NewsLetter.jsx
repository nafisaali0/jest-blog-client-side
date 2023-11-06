// import banner from '../../../assets/image/background/bg1.png'
import './newsletter.css'
// style={{ backgroundImage: `url(${banner})` }}
const NewsLetter = () => {
    return (
        <>
            <div className="bg-black mt-10" >
                <div className='container mx-auto flex flex-col justify-center items-center p-10'>
                    <div className='flex flex-col lg:flex-row gap-5 items-center'>
                        <div className='text-white text-3xl flex-1'>
                            <h1>Get more updates...</h1>
                            <p>Do you want to get notified when a new component is added to JESTBLOG? Sign up for our newsletter and youll be among the first to find out about new features, components, versions, and tools.</p>
                        </div>
                        <form>
                            <div className="flex-1 search">
                                <input type="text" placeholder="Your Email" name="email" className="searchTerm" />
                                <button className="searchButton">Subscribe</button>
                                {/* onClick={handleSearchButton} */}
                                {/* onChange={handleInput} */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsLetter;