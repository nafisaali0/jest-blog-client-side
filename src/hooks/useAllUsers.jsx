import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useAllUsers = () => {
    const axiosPublic = useAxiosPublic()

    const { data: allUsers = [], isPending: loading, refetch } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const res = await axiosPublic?.get('/users');
            return res.data
        }
    })

    return [allUsers, loading, refetch]
}

export default useAllUsers
