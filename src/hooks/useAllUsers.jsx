import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAllUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: allUsers, refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    return [allUsers, refetch]
};

export default useAllUsers;