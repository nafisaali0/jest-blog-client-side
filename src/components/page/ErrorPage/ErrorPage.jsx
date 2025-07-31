import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-bodyColor px-4">
                <div className="bg-white max-w-md w-full p-8 rounded-xl shadow-md text-center space-y-3">
                    <h1 className="text-xl font-bold text-black uppercase">JestBlog</h1>
                    <h2 className="text-xl font-semibold text-textSmallGray">{error.status} Error!</h2>
                    <p className="text-textSmallGray font-medium">Sorry, this page doesn't exist.</p>
                    <div className="flex justify-center items-center">
                        <Link to={'/'}>
                            <button className="py-2 px-4 font-semibold rounded bg-primaryColor text-white hover:bg-primaryHover">BACK TO HOME</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;