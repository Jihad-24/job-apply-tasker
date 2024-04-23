import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
import usePublicAxios from "./usePublicAxios";

const useApplication = () => {
  const publicAxios = usePublicAxios();
  // const { user } = useAuth();
  const { refetch, data: application = [] } = useQuery({
    queryKey: ["application"],
    queryFn: async () => {
      // const res = await publicAxios.get(`/application?email=${user.email}`);
      const res = await publicAxios.get(`/application`);
      return res.data;
    },
  });

  return [application, refetch];
};

export default useApplication;