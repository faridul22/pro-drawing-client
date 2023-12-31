import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAllClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: allClasses, refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })
    return [allClasses, refetch]
};

export default useAllClasses;