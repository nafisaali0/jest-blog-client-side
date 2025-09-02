import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import GoogleSignIn from "../../Functionality/GoogleSignIn/GoogleSignIn";
import { Slide, toast } from "react-toastify";

const SignIn = () => {

    const { signInUser } = useContext(AuthContext)
    const [signInError, setSignInError] = useState()
    const navigate = useNavigate()


    const handleSignIn = e => {
        e.preventDefault();

        const email = e?.target.email.value
        const password = e?.target.password.value

        setSignInError('')

        signInUser(email, password)
            .then(result => {
                console.log(result)
                toast.success('SignIn Successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 1,
                    theme: "light",
                    transition: Slide,
                });
                e.target.reset(),
                    navigate('/')

            })
            .catch(error => {
                console.log(error);
                setSignInError(error.message);

                // Show toast error
                toast.error(`Can Not SignIn: ${signInError}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 1,
                    theme: "light",
                    transition: Slide,
                });
            });
    }

    return (
        <>
            <div
                data-aos="fade-down"
                data-aos-offset="500"
                data-aos-duration="3000"
                data-aos-easing="ease-in-out"
                className="flex justify-center items-center my-10">
                <div className="lg:w-[500px] md:w-[450px]  h-full w-full flex flex-col bg-white border border-borderColour shadow-lg rounded-xl py-10 px-12 space-y-4">
                    <div className="text-center text-black text-xl font-bold mb-5">
                        <h5>Create A Free Account</h5>
                    </div>
                    <div className="flex-auto">
                        <GoogleSignIn />
                    </div>
                    <div className="text-center">
                        <p className="inline font-semibold text-sm">or</p>
                    </div>
                    <div className="flex-auto">
                        <form role="form" onSubmit={handleSignIn} className='space-y-4'>
                            <div>
                                <input type="email" name="email" placeholder="Email" className="text-sm ease-soft block w-full rounded-lg border border-solid border-borderColour py-2 px-3 font-medium text-textSmallGray transition-all focus:border-borderColour focus:bg-mainTheme focus:text-textSmallGray focus:outline-none" />
                            </div>
                            <div>
                                <input type="password" name="password" placeholder="Password" className="text-sm ease-soft block w-full rounded-lg border border-solid border-borderColour py-2 px-3 font-medium text-textSmallGray transition-all focus:border-borderColour focus:bg-mainTheme focus:text-textSmallGray focus:outline-none" />
                            </div>
                            <div className=''>
                                <button type="submit" className='w-full border border-borderColour px-4 py-3 rounded-lg text-md font-semibold text-white bg-primaryColor hover:bg-primaryHover'>Sign in</button>
                            </div>
                            <p className="mt-4 leading-normal text-sm">Don't have an account?
                                <Link to={'/signup'} className="font-bold text-black mx-1">Sign up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;