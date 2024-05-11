import { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";


const CategoryHome = () => {

    const [categorys, setCategorys] = useState([])//load category 
    const [uniqueCategories, setUniqueCategories] = useState([]);

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
    return (
        <>
            <motion.div className="container mx-auto my-10 p-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 3 }}
            >
                <div className="text-3xl font-semibold my-5">
                    <h1>Category</h1>
                </div>
                <div className="flex flex-wrap gap-5">
                    {uniqueCategories.map(category => (
                        <>
                            <Link to={`/blogs/category/${category}`}>
                                <motion.div className='bg-light_gray px-7 py-4 text-sm md:text-lg font-bold text-black rounded-full'
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
            </motion.div>
        </>
    );
};

export default CategoryHome;