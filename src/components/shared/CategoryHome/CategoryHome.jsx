import { useEffect, useState } from "react";
import ShowCategoryHome from "./ShowCategoryHome";
import { motion } from 'framer-motion'

const CategoryHome = () => {

    const [categorys, setCategorys] = useState([])//load category 
    
    // call category api 
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])
    // console.log(categorys)

    return (
        <>
            <motion.div className="container mx-auto my-10 p-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 3 }}
            >
                <div className="text-3xl font-bold my-5">
                    <h1>Category</h1>
                </div>
                <div className="flex flex-wrap gap-5">
                    {
                        categorys.map((showCategory,index) =>
                            <ShowCategoryHome
                                key={index}
                                showCategory={showCategory}
                                index={index}>
                            </ShowCategoryHome>)
                    }
                </div>
            </motion.div>
        </>
    );
};

export default CategoryHome;