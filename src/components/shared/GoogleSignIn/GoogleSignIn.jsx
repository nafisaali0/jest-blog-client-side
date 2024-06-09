import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const GoogleSignIn = () => {
    
    const { googleLogIn } = useContext(AuthContext)
    const navigate = useNavigate()

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
        <>
            <button
                onClick={handleGoogle}
                className="w-full py-3 border-2 bg-light_purple text-white hover:bg-hover_btn"
                type="submit"
                data-ripple-light="true"
            >
                Sign In With Google
            </button>
        </>
    );
};

export default GoogleSignIn;