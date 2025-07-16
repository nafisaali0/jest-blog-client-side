import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const CategoryHome = () => {

    const [categorys, setCategorys] = useState([])//load category 
    const [uniqueCategories, setUniqueCategories] = useState([]);
    const [displayCount, setDisplayCount] = useState(6);

    useEffect(() => {
        fetch('https://blog-server-side-ochre.vercel.app/blogs')
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])
    // console.log(categorys)
    useEffect(() => {
        const categories = [...new Set(categorys.map(blog => blog.category))];
        setUniqueCategories(categories);
    }, [categorys]);
    // console.log(uniqueCategories)

    const handleSeeAll = () => {
        setDisplayCount(displayCount + 6);
    }

    return (
        <>
            {/* <div className="container mx-auto p-3"> */}
                <div className="text-xl mb-6 text-black font-semibold">
                    <h1>Category</h1>
                </div>
                <div className="flex flex-wrap gap-5 my-5">
                    {uniqueCategories.slice(0, displayCount).map(category => (
                        <>
                            <Link to={`/blogs/category/${category}`}>
                                <div className='bg-light_gray px-7 py-3 text-sm md:text-lg font-bold text-black rounded-full'>
                                    <h1 key={category}>{category}</h1>
                                </div>
                            </Link>
                        </>
                    ))}
                </div>
                {uniqueCategories.length > 3 && displayCount < uniqueCategories.length &&
                    <div className="text-left">
                        <button className="my-5 text-light_purple text-lg font-semibold hover:text-hover_btn" onClick={handleSeeAll}>View More Categories</button>
                    </div>
                }
            {/* </div> */}
        </>
    );
};

export default CategoryHome;