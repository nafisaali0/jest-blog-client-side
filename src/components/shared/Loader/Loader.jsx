import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loader = () => {
    return (
        <>
            <div className="max-w-[1300px] mx-auto py-20 overflow-hidden bg-bodyColor">
                <div className="flex justify-center items-center">
                    <DotLottieReact
                        src="https://lottie.host/0924e48c-712a-428f-b813-32bcd583081c/3eIAKxnLAT.lottie"
                        loop
                        autoplay
                        style={{ width: '30rem' }}
                    />
                </div>
            </div>
        </>
    );
};
export default Loader;