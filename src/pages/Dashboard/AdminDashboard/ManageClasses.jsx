


/* 
   Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback).

*/

import { Helmet } from "react-helmet-async";
import useAllClasses from "../../../hooks/useAllClasses";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageClasses = () => {

    const [allClasses, refetch] = useAllClasses()

    const handleApproved = classData => {
        fetch(`https://pro-drawing-server.vercel.app/classes/approved/${classData._id}`, {
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
                        title: `Your Class is approved Now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDenied = classData => {
        fetch(`https://pro-drawing-server.vercel.app/classes/denied/${classData._id}`, {
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
                        title: `Your Class is denied Now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="ml-2 my-10">
            <Helmet>
                <title>Pro Drawing | Manage Classes</title>
            </Helmet>
            <h3 className="text-center text-2xl my-2">Manage All Class</h3>
            <h3 className="text-3xl font-semibold">Total Class: {allClasses?.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th># </th>
                            <th>Class Image & Name</th>
                            <th>Instructors Name & Email</th>
                            <th>Available seats</th>
                            <th>Course Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            allClasses?.map((classData, i) => <tr key={classData._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex flex-col">
                                        <span className="rounded-md w-24">
                                            <img src={classData.classImage} alt="Avatar Tailwind CSS Component" className="rounded-lg mb-1 shadow-lg" />
                                        </span>
                                        <span className="font-bold text-xs">{classData.className}</span>
                                    </div>
                                </td>

                                <td>
                                    <span>Name: {classData.instructorName}</span>
                                    <br />
                                    <span className="badge badge-ghost badge-sm"> {classData.instructorEmail}</span>
                                </td>

                                <td>
                                    <span>Avail: {classData.availableSeats}</span>
                                </td>
                                <td>
                                    <span>Price: ${classData.price}</span>
                                </td>
                                <td>
                                    <span className="text-semibold">{classData.status}</span>
                                </td>

                                {/* buttons( Approve, Deny and send feedback) */}
                                <td className="text-center">
                                    <button onClick={() => handleApproved(classData)} disabled={classData.status !== "pending"} className="btn normal-case mb-1 text-white bg-[#4499B3] hover:bg-[#0d7594] btn-xs">Approve</button>
                                    <br />
                                    <button onClick={() => handleDenied(classData)} disabled={classData.status !== "pending"} className="btn normal-case mb-1 text-white bg-red-600 hover:bg-red-700 btn-xs">Deny</button>
                                    <br />
                                    <Link to={`feedback/${classData._id}`}>
                                        <button className="btn normal-case mb-1 text-white bg-green-600 hover:bg-green-700 btn-xs">Feedback</button>
                                    </Link>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageClasses;