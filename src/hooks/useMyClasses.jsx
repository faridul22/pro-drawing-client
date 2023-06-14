
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMyClasses = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { isLoading, refetch, data: myclasses = [], } = useQuery({
        queryKey: ['myclasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure(`/myclasses?email=${user?.email}`)

            return response.data;
        },
    })
    return [myclasses, refetch, isLoading]
};

export default useMyClasses;
