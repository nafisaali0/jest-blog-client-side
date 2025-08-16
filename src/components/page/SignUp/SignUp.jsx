import logo from '../../../assets/image/logo/logoNoBackground.png'
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import moment from "moment";
import '../../../index.css'
import GoogleSignIn from '../../Functionality/GoogleSignIn/GoogleSignIn';


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
                        <GoogleSignIn />
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