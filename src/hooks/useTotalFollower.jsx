import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTotalFollower = () => {
    
    const axiosPublic = useAxiosPublic()
    
    const { data: totalFollower = [], isPending: loading, refetch } = useQuery({
        queryKey: ['totalFollower'],
        queryFn: async () => {
            const res = await axiosPublic?.get(`/followers`);
            return res.data
        }
    })

    return [totalFollower, loading, refetch]
};

export default useTotalFollower;
