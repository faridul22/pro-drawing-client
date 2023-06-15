import moment from "moment";
import usePaymentData from "../../../hooks/usePaymentData";


const PaymentHistory = () => {
    const [paymentData] = usePaymentData();
    console.log(paymentData)
    return (
        <div>
            <h3>Payment History</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>TransactionId</th>
                            <th>Payment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paymentData.map((item, i) => <tr key={item._id}>
                                <th>{i + 1}</th>
                                <td className="font-bold">{item.className}</td>
                                <td>
                                    <span className="text-green-600 border-2 rounded-md p-1">{item.transactionId}</span>
                                </td>
                                <td className="font-semibold">{moment(item.date).format("LLL")}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;