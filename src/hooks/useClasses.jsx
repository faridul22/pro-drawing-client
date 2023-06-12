import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useClasses = () => {
    const { user } = useContext(AuthContext)

    const { isLoading, refetch, isError, data: selectedClasses = [], error } = useQuery({
        queryKey: ['selectedclasses', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/selectedclasses?email=${user?.email}`)

            return response.json()
        },
    })
    return [selectedClasses, isLoading, refetch]
};

export default useClasses;