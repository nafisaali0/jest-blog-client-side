import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useComment = () => {
    const axiosPublic = useAxiosPublic()

    const { data: comments = [], isPending: loading, refetch } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            const res = await axiosPublic.get('/comments');
            return res.data
        }
    })

    return [comments, loading , refetch]
};

export default useComment;