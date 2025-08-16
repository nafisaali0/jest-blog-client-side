import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import moment from "moment";
import { FcGoogle } from "react-icons/fc";

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
                        Swal.fire(
                            'Successfull'
                        ),
                            navigate('/')
                    })

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