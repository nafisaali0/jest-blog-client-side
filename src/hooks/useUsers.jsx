import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const useUsers = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useContext(AuthContext)
    
    const { data: users = [], isPending: loading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic?.get(`users?email=${user?.email}`);
            return res.data
        }
    })

    return [users, loading , refetch]
};

export default useUsers;

