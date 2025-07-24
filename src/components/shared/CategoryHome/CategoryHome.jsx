import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './catStyle.css'
import '../../style/btnView.css'

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
            <div className="w-full">
                <h1 className="text-xl font-bold text-black my-5">Category</h1>
                <div className="flex flex-wrap gap-4 lg:gap-2">
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
                <div>
                    {
                        uniqueCategories.length > 3 && displayCount < uniqueCategories.length &&
                        <button className="button_Tab mt-4 font-semibold" onClick={handleSeeAll}>View More</button>
                    }
                </div>
            </div>
        </>
    );
};

export default CategoryHome;