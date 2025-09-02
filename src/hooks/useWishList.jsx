import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useWishLIst = () => {
    
    const axiosPublic = useAxiosPublic()
    const { user } = useContext(AuthContext)
    
    const { data: wishList = [], isPending: loading, refetch } = useQuery({
        queryKey: ['wishList',user?.email],
        queryFn: async () => {
            const res = await axiosPublic?.get(`/wishlist?email=${user?.email}`);
            return res.data
        }
    })

    return [wishList, loading, refetch]
};

export default useWishLIst;
