import moment from "moment";
import useUsers from "../../../../hooks/useUsers";

const DashHomeBanner = () => {

    const [users] = useUsers();
    const currentUser = users?.length > 0 ? users[0] : {};
    
    return (
        <>
            <div
                data-aos="fade-down"
                data-aos-offset="500"
                data-aos-duration="3000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                className="flex flex-col justify-start items-start px-5 py-3 space-y-1 bg-mainTheme rounded-xl">
                <p className="text-sm font-medium text-textSmallGray">{moment().format("MMM DD YYYY")}</p>
                {
                    currentUser?.name ?
                        <>
                            <h1 className="text-xl font-bold text-black">Hello,{currentUser?.name}</h1>
                        </>
                        :
                        <>
                            <h1 className="text-xl font-bold text-black">Hello,{currentUser?.email}</h1>
                        </>
                }
            </div>
        </>
    );
};

export default DashHomeBanner;