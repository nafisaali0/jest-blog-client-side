import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const SignUp = () => {

    const { signUpUser } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')
    const passwordRequirement = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{6,}$/;
    

    const handleSignUp = e => {
        e.preventDefault();

        const username = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value
        // console.log(username, photo, email, password)


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
                const user = result.user;
                updateProfile(user, {
                    displayName: username,
                    photoURL : photo

                })
                return (
                    console.log(result.user),
                    Swal.fire(
                        'Sign Up Successfully!'
                    ),
                    e.target.reset()
                )
            })
            .catch(error => {
                console.log(error)
                return (
                    setSignUpError(error.message),
                    Swal.fire({
                        icon: 'error',
                        title: (signUpError),
                        text: 'Can Not  Sing Up',
                    })
                )
            })
    }

    return (
        <div className="bg-[#f3f3f4] w-[100%] lg:h-[100vh] overflow-hidden" >
            <div className='container mx-auto flex flex-col justify-center items-center drop-shadow-lg md:pt-12 lg:pt-20'>
                <div className="bg-white m-10 p-7 md:w-[700px]">
                    <div className="text-black my-5 font-bold text-2xl">
                        <h2>Please create your account</h2>
                    </div>
                    {/* onSubmit={handleSignUp} */}
                    <form onSubmit={handleSignUp}>
                        <div>
                            <input type="name" name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Name" />
                        </div>
                        <div>
                            <input type="url" name="photo" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Photo" />
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="email" name="email" className="block py-2 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300   focus:outline-none focus:border-blue-600 peer" placeholder="Email" required />
                        </div>
                        <div className="relative z-0 w-full mb-7 group">
                            <input type="password" name="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Password" required />
                        </div>
                        <div className="flex gap-2 md:gap-5 lg:gap-10 items-center my-10">
                            <div className="relative z-0 group">
                                <button type="submit" className="text-white md:w-full  bg-black  font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-cent">SIGN UP</button>
                            </div>
                            <div className="relative z-0 group">
                                <Link to={'/signin'}>
                                    <button className="text-white md:w-full  bg-black  font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">SIGN IN</button>
                                </Link>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;