import logo from '../../../assets/image/logo/logoNoBackground.png'
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import GoogleSignIn from "../../shared/GoogleSignIn/GoogleSignIn";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import moment from "moment";
import '../../../index.css'


const SignUp = () => {

    const { signUpUser } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')
    const passwordRequirement = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{6,}$/;
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const date = moment().format("MMM Do YY");
        const password = e.target.password.value
        const userInfo = { name, email, date }
        setSignUpError('')//clean error state

        // grap error before data going to server
        if (!passwordRequirement.test(password)) {
            setSignUpError('Your password should be capital letter, regular expression and length would be 6')
            return Swal.fire({
                icon: 'error',
                title: (signUpError),
                text: 'Can Not Sign Up',
            })
        }

        // email/password signUp auth
        signUpUser(email, password)
            .then(result => {
                return (
                    console.log(result.user),
                    axiosPublic.post('/users', userInfo)
                        .then(res => {
                            if (res.data.insertedId) {
                                console.log('user add')
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Successful Sign Up",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/')
                            }
                        })
                )
            })
            .catch(error => {
                console.log(error)
                return (
                    setSignUpError(error.message),
                    Swal.fire({
                        icon: 'error',
                        title: (signUpError),
                        text: 'Can Not Sing Up',
                    })
                )
            })
    }

    return (
        // <div className="bg-[#f3f3f4] w-[100%] lg:h-[100vh] overflow-hidden" >
        //     <div className='container mx-auto flex flex-col justify-center items-center drop-shadow-lg md:pt-12 lg:pt-20'>
        //         <div className="bg-white m-10 p-7 md:w-[700px]">
        //             <div className="text-black my-5 font-bold text-2xl">
        //                 <h2>Please create your account</h2>
        //             </div>
        //             <form onSubmit={handleSignUp}>
        //                 <div className="my-10">
        //                     <GoogleSignIn></GoogleSignIn>
        //                 </div>
        //                 <div className="my-10 text-center text-xl font-bold">
        //                     <p>OR</p>
        //                 </div>
        //                 <div>
        //                     <input type="fname" name="fname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Name" />
        //                 </div>
        //                 <div>
        //                     <input type="lname" name="lname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Name" />
        //                 </div>
        //                 <div className="relative z-0 w-full mb-6 group">
        //                     <input type="email" name="email" className="block py-2 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300   focus:outline-none focus:border-blue-600 peer" placeholder="Email" required />
        //                 </div>
        //                 <div className="relative z-0 w-full mb-7 group">
        //                     <input type="password" name="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Password" required />
        //                 </div>
        //                 <div className="flex gap-2 md:gap-5 lg:gap-10 items-center my-10">
        //                     <div className="relative z-0 group">
        //                         <button type="submit" className="md:w-full bg-light_purple text-white hover:bg-hover_btn font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-cent">SIGN UP</button>
        //                     </div>
        //                     <div className="relative z-0 group">
        //                         <Link to={'/signin'}>
        //                             <button className="md:w-full bg-light_purple text-white hover:bg-hover_btn font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">SIGN IN</button>
        //                         </Link>
        //                     </div>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </div>

        <>
            <div className="flex gap-5 md:flex-row lg:justify-around flex-col-reverse p-3">
                <div className="md:flex-1 text-black space-y-7 w-full mt-6">
                    <figure className='flex flex-col justify-center items-center md:justify-start md:items-start'>
                        <img className='w-52' src={logo} alt="" />
                    </figure>
                    <div className='md:text-left text-center space-y-7'>
                        <p className="text-xl font-bold">Start sharing your voice with the world on JestBlog</p>
                        <p className="md:text-lg text-xl font-semibold">⚡ Easy sign-up</p>
                        <p className="md:text-lg text-xl font-semibold">❤️ Simple to setup</p>
                        <p className="md:text-lg text-xl font-semibold">🧠 Built for bloggers</p>
                        <p className="md:text-lg text-xl font-semibold">🎉 Free forever</p>
                    </div>
                </div>

                <div className="lg:w-[500px] md:w-[420px] h-full w-full flex flex-col bg-white border border-borderColour shadow-lg rounded-xl py-10 px-12 space-y-4">
                    <div className="text-center text-black text-xl font-bold mb-5">
                        <h5>Create A Free Account</h5>
                    </div>
                    <div className="flex-auto">
                        <GoogleSignIn></GoogleSignIn>
                    </div>
                    <div className="text-center">
                        <p className="inline font-semibold text-sm">or</p>
                    </div>
                    <div className="flex-auto">
                        <form role="form" onSubmit={handleSignUp} className='space-y-4'>
                            <div>
                                <input type="name" name="name" placeholder="Name" className="text-sm ease-soft block w-full rounded-lg border border-solid border-borderColour py-2 px-3 font-medium text-textSmallGray transition-all focus:border-borderColour focus:bg-mainTheme focus:text-textSmallGray focus:outline-none" />
                            </div>
                            <div>
                                <input type="email" name="email" placeholder="Email" className="text-sm ease-soft block w-full rounded-lg border border-solid border-borderColour py-2 px-3 font-medium text-textSmallGray transition-all focus:border-borderColour focus:bg-mainTheme focus:text-textSmallGray focus:outline-none" />
                            </div>
                            <div>
                                <input type="password" name="password" placeholder="Password" className="text-sm ease-soft block w-full rounded-lg border border-solid border-borderColour py-2 px-3 font-medium text-textSmallGray transition-all focus:border-borderColour focus:bg-mainTheme focus:text-textSmallGray focus:outline-none" />
                            </div>
                            <div className=''>
                                <button type="submit" className='w-full border border-borderColour px-4 py-3 rounded-lg text-md font-semibold text-white bg-primaryColor hover:bg-primaryHover'>Sign up</button>
                            </div>
                            <p className="mt-4 leading-normal text-sm">Already have an account?
                                <Link to={'/signin'} className="font-bold text-black mx-1">Sign in</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;