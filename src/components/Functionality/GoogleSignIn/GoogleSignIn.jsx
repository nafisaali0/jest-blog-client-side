import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import moment from "moment";
import { FcGoogle } from "react-icons/fc";
import { Slide, toast } from "react-toastify";

const GoogleSignIn = () => {

    const { googleLogIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const handleGoogle = () => {
        googleLogIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    date: moment().format("MMM Do YY"),
                    name: result.user?.displayName,
                    email: result.user?.email,
                    photo: result.user?.photoURL
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        toast.success('Login Successfully!', {
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
                        navigate('/')
                    })

            })
            .catch(error => {
                console.log(error)
                toast.error('Can Not LogIn!', {
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
            })
    }
    return (
        <>
            <button
                onClick={handleGoogle}
                className="flex flex-row justify-center items-center gap-2 w-full border border-borderColour rounded-lg py-2 px-3 ">
                <a>
                    <FcGoogle style={{ width: '20px', height: '20px' }} />
                </a>
                <span className='text-sm font-medium text-black'>Sign up with google</span>
            </button>
        </>
    );
};

export default GoogleSignIn;