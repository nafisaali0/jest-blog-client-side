import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './catStyle.css'

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
            {/* <div className="container mx-auto p-3">
            <div className="text-xl text-black font-bold">
                <h1>Category</h1>
            </div>
            <div className="flex flex-wrap gap-5">
                {uniqueCategories.slice(0, displayCount).map(category => (
                    <>
                        <Link to={`/blogs/category/${category}`}>
                            <button key={category} className="button">
                                {category}
                            </button>
                        </Link>
                    </>
                ))}
            </div>
            {uniqueCategories.length > 3 && displayCount < uniqueCategories.length &&
                <div className="text-left">
                    <button className="my-5 text-light_purple text-lg font-semibold hover:text-hover_btn" onClick={handleSeeAll}>View More</button>
                </div>
            }
            </div> */}

            <div className="w-full">
                <h1 className="text-xl font-bold text-black my-5">Category</h1>
                <div className="flex flex-wrap gap-3">
                    {uniqueCategories.slice(0, displayCount).map(category => (
                        <>
                            <Link to={`/blogs/category/${category}`}>
                                <button key={category} className="buttonCategory">
                                    {category}
                                </button>
                            </Link>
                        </>
                    ))}
                </div>
                {
                    uniqueCategories.length > 3 && displayCount < uniqueCategories.length &&
                    <div className="text-left my-5">
                        <button className="text-light_purple text-lg font-semibold hover:text-hover_btn" onClick={handleSeeAll}>View More</button>
                    </div>
                }
            </div>
        </>
    );
};

export default CategoryHome;