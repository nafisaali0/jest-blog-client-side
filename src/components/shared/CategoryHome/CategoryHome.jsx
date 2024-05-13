import { useEffect, useState } from "react";
import { motion } from 'framer-motion'
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
            <motion.div className="container mx-auto mt-5 p-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 3 }}
            >
                <div className="text-3xl my-6 font-semibold">
                    <h1>Category</h1>
                </div>
                <div className="flex flex-wrap gap-5 my-5">
                    {uniqueCategories.slice(0, displayCount).map(category => (
                        <>
                            <Link to={`/blogs/category/${category}`}>
                                <motion.div className='bg-light_gray px-7 py-3 text-sm md:text-lg font-bold text-black rounded-full'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 3 }}
                                >
                                    <h1 key={category}>{category}</h1>
                                </motion.div>
                            </Link>
                        </>
                    ))}
                </div>
                {displayCount <= uniqueCategories.length &&
                    <div className="text-left">
                        <button className="my-5 text-light_purple text-lg font-semibold hover:text-hover_btn" onClick={handleSeeAll}>View More Categories</button>
                    </div>
                }
            </motion.div>
        </>
    );
};

export default CategoryHome;