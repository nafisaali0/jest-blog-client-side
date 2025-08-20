import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCommentsByid = (id) => {
  const axiosPublic = useAxiosPublic();

  const { data: blogComments = [], isPending: loading, refetch } = useQuery({
    queryKey: ['blogComments', id],
    queryFn: async () => {
      if (!id) return [];
      const res = await axiosPublic.get(`/comments?blog_id=${id}`);
      return res.data;
    },
    enabled: !!id, 
  });

  return [blogComments, loading, refetch];
};

export default useCommentsByid;
