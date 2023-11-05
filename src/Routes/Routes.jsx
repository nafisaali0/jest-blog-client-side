import { createBrowserRouter } from "react-router-dom";
import Root from './../LayOut/Root';
import Home from './../components/page/Home/Home';
import SignUp from './../components/page/SignUp/SignUp';
import SignIn from './../components/page/SignIn/SignIn';



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
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
        ],
    },
]);


export default router;