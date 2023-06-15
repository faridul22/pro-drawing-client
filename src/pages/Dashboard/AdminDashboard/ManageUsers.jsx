import { Helmet } from "react-helmet-async";
import { FaUserEdit, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAllUsers from "../../../hooks/useAllUsers";


const ManageUsers = () => {
    // const { data: allUsers, refetch } = useQuery(['users'], async () => {
    //     const res = await fetch('https://pro-drawing-server.vercel.app/users')
    //     return res.json()
    // })
    const [allUsers, refetch] = useAllUsers();

    const handleMakeAdmin = user => {
        fetch(`https://pro-drawing-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is an Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    const handleMakeInstructor = user => {
        fetch(`https://pro-drawing-server.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
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
                                <td>
                                    {user.role === 'admin' && 'admin' ||
                                        user.role === 'instructor' && 'instructor' || "student"
                                    }
                                </td>
                                <td> <button disabled={user.role === 'instructor'} onClick={() => handleMakeInstructor(user)} className="btn btn-outline bg-sky-600 text-white hover:bg-sky-700 w-full text-xl btn-sm"><FaUserEdit /></button>
                                </td>
                                <td>
                                    <button disabled={user.role === 'admin'} onClick={() => handleMakeAdmin(user)} className="btn btn-outline bg-green-600 text-white hover:bg-green-700 w-full text-xl btn-sm"><FaUserShield /></button>
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