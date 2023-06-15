import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const usePaymentDate = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure();

    const { isLoading, refetch, data: paymentData = [], } = useQuery({
        queryKey: ['paymentData', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure.get(`/paymentData?email=${user?.email}`)

            return response.data;
        },
    })
    return [paymentData, refetch, isLoading]
};

export default usePaymentDate;