import { createBrowserRouter } from "react-router-dom";
import Root from './../LayOut/Root';
import Home from './../components/page/Home/Home';
import SignUp from './../components/page/SignUp/SignUp';
import SignIn from './../components/page/SignIn/SignIn';
import ErrorPage from './../components/page/ErrorPage/ErrorPage';
import AllBlogs from "../components/page/AllBlogs/AllBlogs";
import AddBlog from "../components/page/AddBlog/AddBlog";
import BlogDetails from './../components/page/BlogDetails/BlogDetails';
import UpdateBlog from './../components/page/UpdateBlog/UpdateBlog';
import WishList from './../components/page/WishList/WishList';
import FeatureBlog from './../components/page/FeaturedBlogs.jsx/FeatureBlog';
import CategoryBlogs from './../components/page/CategoryBlogs/CategoryBlogs';
import PrivateRoutes from './PrivateRoutes';



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element:<Home></Home>,
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/allblogs',
                element: <AllBlogs></AllBlogs>,
                loader: () => fetch('https://blog-server-side-ochre.vercel.app/blogs')
            },
            {
                path: '/addblog',
                element: <PrivateRoutes><AddBlog></AddBlog></PrivateRoutes>
            },
            {
                path: '/blogdetails/:id',
                element: <PrivateRoutes><BlogDetails></BlogDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://blog-server-side-ochre.vercel.app/blogs/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoutes><UpdateBlog></UpdateBlog></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://blog-server-side-ochre.vercel.app/blogs/${params.id}`)
            },
            {
                path: '/wishlist',
                element: <PrivateRoutes><WishList></WishList></PrivateRoutes>,
            },
            {
                path: '/featureblog',
                element: <FeatureBlog></FeatureBlog>,
                loader: () => fetch('https://blog-server-side-ochre.vercel.app/blogs')
            },
            {
                path: '/blogs/category/:category',
                element: <CategoryBlogs></CategoryBlogs>,
                loader: ({ params }) => fetch(`https://blog-server-side-ochre.vercel.app/blogs/category/${params.category}`)
            },
        ],
    },
]);


export default router;