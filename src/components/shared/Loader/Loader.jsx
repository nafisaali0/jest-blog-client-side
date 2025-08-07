import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loader = () => {
    return (
        <>
            <div className="max-h-screen my-52">
                <div className="flex justify-center items-center">
                    <DotLottieReact
                        //ani-1
                        // src="https://lottie.host/dc8593a3-3f59-469c-az08a-bcc55b8c2527/Zg6U9ZnYql.lottie"
                        //ani-2
                        // src="https://lottie.host/50772bd6-6b42-45a6-b953-85d34b785e87/WWLqMPTk51.lottie"
                        //ani-3
                        src="https://lottie.host/e121b9a2-75a4-4815-8a66-9467528f90a1/NAqH1GzKTU.lottie"
                        loop
                        autoplay
                        speed={1.75}
                        style={{ width: '300px', height: '300px' }}
                    />
                </div>
            </div>
        </>
    );
};
export default Loader;