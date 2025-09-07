import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useLikes = () => {

    const axiosPublic = useAxiosPublic()
    const { user } = useContext(AuthContext)

    const { data: initialLikes = [], isPending: loading, refetch } = useQuery({
        queryKey: ['initialLikes', user?.email],
        queryFn: async () => {
            const res = await axiosPublic?.get(`/likes?email=${user?.email}`);
            return res.data
        }
    })
    return [initialLikes, loading, refetch]
};

export default useLikes;
