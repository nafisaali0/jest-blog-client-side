import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTotalLikes = (id) => {
  const axiosPublic = useAxiosPublic();

  const { data: likes = [], isLoading, refetch } = useQuery({
    queryKey: ["totalLikes", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/likes?blog_id=${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  return { totalLikes: likes.length, isLoading, refetch };
};

export default useTotalLikes;
