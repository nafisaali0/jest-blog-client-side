import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://blog-server-side-ochre.vercel.app/'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic; 