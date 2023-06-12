import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaUserEdit, FaUserShield } from "react-icons/fa";


const ManageUsers = () => {
    const { data: allUsers, refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })

    const handleMakeAdmin = () => {

    }

    const handleMakeInstructor = () => {

    }


    return (
        <div>
            <Helmet>
                <title>Pro Drawing | Manage Users</title>
            </Helmet>

            <h3 className="text-center text-2xl my-2">Manage All User</h3>
            <h3 className="text-3xl font-semibold">Total Users: {allUsers?.length}</h3>
            {/* Table */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th># </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User Role</th>
                            <th>Make Instructor</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allUsers?.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="rounded-md w-12 h-12">
                                            {user.image ? <img src={user.image} alt="Image not found" /> : <img src="https://i.ibb.co/cLNMyCL/user-avata-removebg-preview.png" alt="user" />}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold ">{user.name}</div>
                                </td>
                                <td>
                                    <span className="text-sm">{user.email}</span>
                                </td>
                                <td>Student</td>
                                <td>
                                    {user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeInstructor()} className="btn btn-outline bg-yellow-500 text-white hover:bg-yellow-600 w-full text-xl btn-sm"><FaUserEdit /></button>}
                                </td>
                                <td>
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-outline bg-red-500 text-white hover:bg-red-600 w-full text-xl btn-sm"><FaUserShield /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default ManageUsers;