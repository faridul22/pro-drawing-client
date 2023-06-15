import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useClasses = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { isLoading, refetch, data: selectedClasses = [], } = useQuery({
        queryKey: ['selectedclasses', user?.email],
        enabled: !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const response = await axiosSecure.get(`/selectedclasses?email=${user?.email}`)

            return response.data;
        },
    })
    return [selectedClasses, refetch, isLoading]
};

export default useClasses;