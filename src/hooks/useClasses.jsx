import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useClasses = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token')

    const { isLoading, refetch, data: selectedClasses = [], } = useQuery({
        queryKey: ['selectedclasses', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/selectedclasses?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })

            return response.json()
        },
    })
    return [selectedClasses, refetch, isLoading]
};

export default useClasses;