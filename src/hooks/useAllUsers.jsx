import { useQuery } from "@tanstack/react-query";


const useAllUsers = () => {
    const { data: allUsers, refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })
    return [allUsers, refetch]
};

export default useAllUsers;