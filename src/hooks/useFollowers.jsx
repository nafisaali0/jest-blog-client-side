import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useFollowers = () => {
    
    const axiosPublic = useAxiosPublic()
    const { user } = useContext(AuthContext)
    
    const { data: followers = [], isPending: loading, refetch } = useQuery({
        queryKey: ['followers',user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/followers?email=${user.email}`);
            return res.data
        }
    })

    return [followers, loading, refetch]
};

export default useFollowers;
