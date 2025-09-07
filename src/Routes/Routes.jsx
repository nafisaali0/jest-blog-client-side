import { createBrowserRouter } from "react-router-dom";
import Root from './../LayOut/Root';
import Home from './../components/page/Home/Home';
import SignUp from './../components/page/SignUp/SignUp';
import SignIn from './../components/page/SignIn/SignIn';
import ErrorPage from './../components/page/ErrorPage/ErrorPage';
import AddBlog from "../components/page/AddBlog/AddBlog";
import BlogDetails from './../components/page/BlogDetails/BlogDetails';
import UpdateBlog from './../components/page/UpdateBlog/UpdateBlog';
import WishList from './../components/page/WishList/WishList';
import FeatureBlog from './../components/page/FeaturedBlogs.jsx/FeatureBlog';
import CategoryBlogs from './../components/page/CategoryBlogs/CategoryBlogs';
import PrivateRoutes from './PrivateRoutes';
import Dashboard from "../LayOut/Dashboard";
import HomeDashboard from "../components/page/Dashboard/HomeDashboard/HomeDashboard";
import ProfileSettings from "../components/page/Dashboard/ProfileSettings/ProfileSettings";
import ShowProfile from "../components/page/Dashboard/ProfileSettings/ShowProfile";
import Loader from "../components/shared/Loader/Loader";
import ProfileBlogger from "../components/page/ProfileBlogger/ProfileBlogger";
import LikeTesting from "../components/page/LikeTesting/LikeTesting";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: '/signin',
                element: <SignIn />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/addblog',
                element: <PrivateRoutes><AddBlog /></PrivateRoutes>
            },
            {
                path: '/blogdetails/:id',
                element: <PrivateRoutes><BlogDetails /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://blog-server-side-ochre.vercel.app/blogs/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoutes><UpdateBlog /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://blog-server-side-ochre.vercel.app/blogs/${params.id}`)
            },
            {
                path: '/wishlist',
                element: <PrivateRoutes><WishList /></PrivateRoutes>,
            },
            {
                path: '/featureblog',
                element: <FeatureBlog />,
                loader: () => fetch('https://blog-server-side-ochre.vercel.app/blogs')
            },
            {
                path: '/blogs/category/:category',
                element: <CategoryBlogs />,
                loader: ({ params }) => fetch(`https://blog-server-side-ochre.vercel.app/blogs/category/${params.category}`)
            },
            {
                path: '/profile-blogger/:email',
                element: <ProfileBlogger />,
                loader: ({ params }) => {
                    const decodedEmail = decodeURIComponent(params?.email);
                    return fetch(`https://blog-server-side-ochre.vercel.app/users/${decodedEmail}`);
                }
            },
            {
                path: '/loader',
                element: <Loader />
            },
            {
                path: '/likeTesting',
                element: <LikeTesting />
            },
        ],
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoutes><HomeDashboard /></PrivateRoutes>,
            },
            {
                path: '/dashboard/profile-setting',
                element: <PrivateRoutes><ProfileSettings /></PrivateRoutes>,
            },
            {
                path: '/dashboard/profile',
                element: <PrivateRoutes><ShowProfile /></PrivateRoutes>,
            },

        ]
    }
]);


export default router;