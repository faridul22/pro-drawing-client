import { useForm } from "react-hook-form";
import useAllClasses from "../../../hooks/useAllClasses";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const Feedback = () => {
    const [, refetch] = useAllClasses();
    const classesInfo = useLoaderData();
    const navigate = useNavigate()

    console.log(classesInfo)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch(`http://localhost:5000/classes/feedback/${classesInfo._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    reset()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `Your feedback send to instructor successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate("/dashboard/manageClasses")

                }
            })
    }
    return (
        <div className='container mx-auto w-3/4 my-16'>
            <div className='border-4 border-[#50bbdb] p-10 rounded-lg  bg-[#9fe3f8]'>
                <h1 className='text-center text-3xl text-red-500 mb-5 font-bold'>Enter Your Feedback</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* description */}
                    <div className="form-control my-3 m-3">
                        <label className="label">
                            <span className="label-text font-bold">Write your feedback below</span>
                        </label>
                        <label>
                            <textarea {...register("feedback", { required: true })} name='feedback' className="textarea textarea-bordered border-2 w-full h-[300px]" placeholder="Enter your details feedback"></textarea>
                        </label>
                    </div>
                    {/* submit */}
                    <div className="form-control my-3 m-3">
                        <input className="btn bg-[#4499B3] border-none hover:bg-orange-500  text-white normal-case text-xl font-semibold" type="submit" value="Send Feedback" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Feedback;