import { useState } from 'react';
import banner from '../../../assets/image/background/wave.svg'
import Swal from 'sweetalert2'




const NewsLetter = () => {

    const [emailInput, setEmailInput] = useState()

    const handleNewsLetter = e => {
        e.preventDefault();

        setEmailInput('')//clear input

        const email = e.target.email.value
        // console.log(email)
        setEmailInput(email)

        if (emailInput) {
            return (
                Swal.fire(
                    'Thank You For Subscribe!'
                ),
                e.target.reset()
            )
        }
    }

    return (
        <>
            <div className='h-[370px] mt-10'
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}></div>
            <div className="bg-black">
                <div className='container mx-auto flex flex-col justify-center items-center border-b-2 border-[#5b608b] py-6'>
                    <div className='flex flex-col lg:flex-row gap-5 items-center '>
                        <div className='text-white flex-1 px-9 md:px-0'>
                            <h1 className='text-xl md:text-3xl'>Get more updates...</h1>
                            <p className='text-sm lg:text-xl'>Subscribe for our newsletter and youll be among the first to find out about new Blogs, versions, and tools.</p>
                        </div>
                        <form onSubmit={handleNewsLetter} className='px-5 lg:px-0 flex-1 flex'>
                            <div>
                                <input type="text" placeholder="Your Email" name="email" className="w-[300px] px-5 py-2" />
                            </div>
                            <div>
                                <button type="submit" className="px-5 py-2 bg-[#5b608b] text-white">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsLetter;