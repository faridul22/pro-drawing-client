import { Helmet } from "react-helmet-async";
import useMyClasses from "../../../hooks/useMyClasses";
import { Link } from "react-router-dom";

/* Each Class will show relevant information, including pending/ approved/ denied status, Total Enrolled Students, Feedback & Update button. */

const MyClasses = () => {
    const [myClasses] = useMyClasses();
    // console.log(myClasses)


    return (
        <>
            <Helmet>
                <title>Pro Drawing | My Classes</title>
            </Helmet>
            <div className="ml-2 my-10">
                <h3 className="text-center text-2xl my-2">My All Class</h3>
                <h3 className="text-3xl font-semibold">Total Users: {myClasses?.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th># </th>
                                <th>Class Image & Name</th>
                                <th>Total Enrolled</th>
                                <th>Feedback</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Update Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                myClasses?.map((classData, i) => <tr key={classData._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="rounded-md w-14 h-14">
                                                    <img src={classData.classImage} alt="Avatar Tailwind CSS Component" className="rounded-lg mb-1 shadow-lg" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-xs">{classData.className}</div>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <span>Enrolled Student: {classData.totalStudent}</span>
                                    </td>

                                    <td>
                                        <span>Feedback: {classData.feedback}</span>
                                    </td>
                                    <td>
                                        <span>Price: ${classData.price}</span>
                                    </td>
                                    <td>
                                        <span className="text-semibold">{classData.status}</span>
                                    </td>

                                    {/* buttons( Approve, Deny and send feedback) */}
                                    <td className="text-center">
                                        <Link to={`update/${classData._id}`}>
                                            <button className="btn normal-case mb-1 text-white bg-[#4499B3] hover:bg-orange-400 btn-xs">Update</button>
                                        </Link>

                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div >
        </>
    );
};

export default MyClasses;