import { createBrowserRouter } from "react-router-dom";
import Root from './../LayOut/Root';
import Home from './../components/page/Home/Home';
import SignUp from './../components/page/SignUp/SignUp';
import SignIn from './../components/page/SignIn/SignIn';
import ErrorPage from './../components/page/ErrorPage/ErrorPage';
import AllBlogs from "../components/page/AllBlogs/AllBlogs";
import AddBlog from "../components/page/AddBlog/AddBlog";
import BlogDetails from './../components/page/BlogDetails/BlogDetails';



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
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
                loader: () => fetch('http://localhost:5000/blogs')
            },
            {
                path: '/addblog',
                element: <AddBlog></AddBlog>

            },
            {
                path: '/blogdetails/:id',
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
            },
        ],
    },
]);


export default router;