import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import moment from "moment";

const DashHomeBanner = () => {


    const { user } = useContext(AuthContext)
    return (
        <>
            <div className="flex flex-col justify-start items-start px-5 py-3 space-y-1 bg-mainTheme rounded-xl">
                <p className="text-sm font-medium text-textSmallGray">{moment().format("MMM DD YYYY")}</p>
                {
                    user?.displayName ?
                        <>
                            <h1 className="text-xl font-bold text-black">Hello,{user?.displayName}</h1>
                        </>
                        :
                        <>
                            <h1 className="text-xl font-bold text-black">Hello,{user?.email}</h1>
                        </>
                }
            </div>
        </>
    );
};

export default DashHomeBanner;