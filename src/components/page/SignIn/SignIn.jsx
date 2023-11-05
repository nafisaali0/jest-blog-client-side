import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from 'sweetalert2'

const SignIn = () => {
    const { signInUser, googleLogIn } = useContext(AuthContext)
    const [signInError, setSignInError] = useState()
    const navigate = useNavigate()


    const handleSignIn = e => {
        e.preventDefault();

        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)

        setSignInError('')

        signInUser(email, password)
            .then(result => {
                console.log(result)
                return (
                    Swal.fire(
                        'Login Successfully!'
                    ),
                    e.target.reset(),
                    navigate('/')
                )

            })
            .catch(error => {
                console.log(error)
                setSignInError(error.message)
                return (
                    Swal.fire({
                        icon: 'error',
                        title: 'Try Again',
                        text: 'Can Not LogIn',
                        footer: (signInError)
                    })
                )

            })
    }
    const handleGoogle = () => {
        googleLogIn()
            .then(result => {
                return (
                    console.log(result.user),
                    Swal.fire(
                        'Login Successfully!'
                    ),
                    navigate('/')
                )
            })
            .catch(error => {
                console.log(error)
                return (
                    Swal.fire({
                        icon: 'error',
                        title: 'Try Again',
                        text: 'Can Not LogIn With Google',
                        footer: { error }
                    })
                )
            })
    }

    return (
        <div className="bg-[#f3f3f4] w-[100vw] lg:h-[100vh] md:h-[100%]" >
            <div className='container mx-auto overflow-hidden flex flex-col justify-center items-center drop-shadow-lg md:pt-12 lg:pt-20'>
                <div className="bg-white m-10 p-7 md:w-[700px]">
                    <div className="text-black my-5 font-bold text-2xl">
                        <h2>Welcome back please signin <br /> to your account</h2>
                    </div>
                    <form onSubmit={handleSignIn}>
                        <div className="my-10">
                            <button
                                onClick={handleGoogle}
                                className="w-full py-3 border-2 bg-[black] text-white"
                                type="submit"
                                data-ripple-light="true"
                            >
                                Sign In With Google
                            </button>
                        </div>
                        <div className="my-10 text-center text-xl font-bold">
                            <p>OR</p>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
                            <label className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Email</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="password" name="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
                            <label className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>
                        <div className="flex gap-2 md:gap-5 lg:gap-10 items-center my-10">
                            <div className="relative z-0 group">
                                <button type="submit" className="text-white md:w-full  bg-black  font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-cent">SIGN IN</button>
                            </div>
                            <div className="relative z-0 group">
                                <Link to={'/signup'}>
                                    <button className="text-white md:w-full  bg-black  font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">SIGN UP</button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    );
};

export default SignIn;