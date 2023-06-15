import { useContext } from "react";
import { AuthContext } from './../../providers/AuthProvider/AuthProvider';
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useClasses from "../../hooks/useClasses";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";


const ClassesCard = ({ classData }) => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const { user } = useContext(AuthContext);
    const [, refetch] = useClasses()
    const navigate = useNavigate();
    const location = useLocation();


    const { classImage, className, instructorName, availableSeats, totalStudent, price, _id } = classData;

    const handleEnroll = classData => {
        // console.log(classData)
        if (user && user.email) {
            const selectedClasses = { classId: _id, classImage, className, instructorName, availableSeats, totalStudent, price, email: user.email }
            fetch('https://pro-drawing-server.vercel.app/selectedclasses', {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(selectedClasses)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: `${classData.className} Added to your Selected list`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login first then select a class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { form: location } });
                }
            })
        }
    }
    return (
        <div className={`card md:mx-auto shadow-xl ${availableSeats === 0 ? 'bg-red-400 ' : 'bg-base-100'}`}>
            <figure className="px-5 pt-5">
                <img src={classImage} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body text-center">
                <h2 className="text-2xl my-2">{className}</h2>
                <h4 className="text-xl font-semibold"><span className="text-[#4499B3]">Instructor:</span> {instructorName}</h4>
                <div className="flex justify-between text-center my-5">
                    <p className="font-semibold"><span className="text-[#4499B3]">Available:</span> {availableSeats} seats</p>
                    <p className="font-semibold"><span className="text-[#4499B3]">Price:</span> ${price}</p>
                </div>
                <div className="my-2 mx-auto">
                    <button disabled={isAdmin || isInstructor || availableSeats === 0} onClick={() => handleEnroll(classData)} className="btn bg-[#4499B3] text-white border-0 hover:bg-[#FF944B]">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;