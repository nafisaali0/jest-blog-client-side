import { useContext, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import moment from "moment";

const DashHomeBanner = () => {


    const { user } = useContext(AuthContext)
    const [userStatus, setUserStatus] = useState("no")

    const handleSubscribe = () => {
        setUserStatus("yes")
    }
    return (
        <>
            <div className="flex items-center justify-between h-10">
                <div className="mb-5">
                    <p className="text-lg font-semibold">{moment().format("MMM DD YYYY")}</p>
                    <h1 className="text-4xl font-bold my-4">Hello,{user.displayName}!</h1>
                </div>
                <div className="h-10">
                    {
                        userStatus === "no" ?
                            <><button className="px-3 lg:px-10 h-full bg-light_purple text-white hover:bg-hover_btn" onClick={handleSubscribe}>Subscribe</button></>
                            :
                            <><button className="px-3 lg:px-10 h-full border-none roundedv text-xl font-bold bg-light_purple text-white hover:bg-hover_btn">Premium</button></>
                    }
                </div>
            </div>
        </>
    );
};

export default DashHomeBanner;