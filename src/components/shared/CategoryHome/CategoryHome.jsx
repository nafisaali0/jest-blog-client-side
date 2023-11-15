import { useEffect, useState } from "react";
import ShowCategoryHome from "./ShowCategoryHome";


const CategoryHome = () => {

    const [categorys, setCategorys] = useState([])//show category from backend

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])
    console.log(categorys)

    return (
        <>
            <div className="container mx-auto my-10 p-3">
                <div className="text-3xl font-bold my-5">
                    <h1>Category</h1>
                </div>
                <div className="flex flex-wrap gap-5">
                    {
                        categorys.map(showCategory =>
                            <ShowCategoryHome
                                key={showCategory._id}
                                showCategory={showCategory}>
                            </ShowCategoryHome>)
                    }
                </div>
            </div>
        </>
    );
};

export default CategoryHome;