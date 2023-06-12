import { Helmet } from "react-helmet-async";
import useClasses from "../../../hooks/useClasses";
import { FaPaypal, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";


const MySelectedClasses = () => {
    const [selectedClasses, refetch] = useClasses();
    // const total = selectedClasses.reduce((sum, classData) => classData.price + sum, 0)

    const handleDelete = classData => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want delete ${classData.className} class!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selectedclasses/${classData._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                `Your class ${classData.className} has been deleted.`,
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <Helmet>
                <title>Pro Drawing | My selected classes</title>
            </Helmet>
            {/* <h3>My selected classes: {selectedClasses.length}</h3>
            <h3>My selected classes price total: {total}</h3> */}
            <h3 className="text-center text-2xl my-2">My Selected Classes</h3>
            {/* Table */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th># </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            selectedClasses.map((classData, i) => <tr key={classData._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="rounded-md w-12 h-12">
                                            <img src={classData.classImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold ">{classData.instructorName}</div>
                                    <br />
                                    <span className="text-sm opacity-50">Available: {classData.availableSeats} Seats</span>
                                </td>
                                <td>{classData.instructorName}</td>
                                <td>Price: ${classData.price}</td>
                                <th>
                                    <button className="btn btn-circle btn-outline bg-green-600 text-white hover:bg-green-700 btn-sm"><FaPaypal /></button>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(classData)} className="btn btn-circle btn-outline bg-red-600 text-white hover:bg-red-700 btn-sm"><FaTrash /></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MySelectedClasses;