import { Helmet } from "react-helmet-async";
import usePaymentDate from "../../../hooks/usePaymentDate";
import moment from "moment/moment";


const MyEnrolledClasses = () => {
    const [paymentData] = usePaymentDate();
    console.log(paymentData)
    return (
        <div>
            <Helmet>
                <title>Pro Drawing | My Enrolled Classes</title>
            </Helmet>
            <h3 className="uppercase text-3xl mb-5 font-semibold text-center">My Enrolled Classes</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Classes Information</th>
                            <th>Enrolled Status</th>
                            <th>Student & Class ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paymentData.map((item, i) => <tr key={item._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.classImage} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.className}</div>
                                            <div className="text-sm opacity-50">Instructor: {item.instructorName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="font-bold text-center text-green-500 uppercase">{item.enrollStatus}</span>
                                    <br />
                                    <span className="badge bg-slate-200 badge-sm"> {moment(item.date).format("MMM Do YY")}</span>
                                </td>
                                <td className="mx-auto">
                                    <span className="badge bg-slate-200 badge-sm text-center">Student ID: {item._id.slice(8, 20)}</span>
                                    <br />
                                    <span className="badge bg-slate-200 badge-sm text-center">Class ID: {item.classId.slice(5, 20)}</span>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEnrolledClasses;