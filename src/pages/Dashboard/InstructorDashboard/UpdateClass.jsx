import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useMyClasses from "../../../hooks/useMyClasses";


const UpdateClass = () => {
    const singleClassData = useLoaderData();
    const navigate = useNavigate();
    const [, refetch] = useMyClasses();
    const { _id, className, classImage, availableSeats, price } = singleClassData;

    console.log(singleClassData)
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch(`http://localhost:5000/classes/${_id}`, {
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
                        title: 'Your class information updated successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate("/dashboard/myClasses")
                }
            })
        console.log(data)
    }
    return (
        <div className='container mx-auto w-3/4 my-16'>
            <div className='border-4 border-cyan-200 p-10 rounded-lg  bg-cyan-50'>
                <h1 className='text-center text-3xl text-gray-700 mb-5 font-semibold'>Update: {className}</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid lg:grid-cols-1'>
                        {/* Class name */}
                        <div className="form-control my-3 mx-3">
                            <label className="label">
                                <span className="label-text font-bold">Class Name</span>
                            </label>
                            <label className="">
                                <input {...register("className", { required: true })} defaultValue={className} type="text" name='className' placeholder="Class name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* Class image */}
                        <div className="form-control my-3 mx-3">
                            <label className="label">
                                <span className="label-text font-bold">Class image URL</span>
                            </label>
                            <input {...register("classImage", { required: true })} defaultValue={classImage} type="url" name='classImage' className="file-input file-input-bordered w-full" />
                        </div>
                        {/* Available seats */}
                        <div className="form-control my-3 mx-3">
                            <label className="label">
                                <span className="label-text font-bold">Available Seats</span>
                            </label>
                            <label className="">
                                <input {...register("availableSeats", { required: true })} defaultValue={availableSeats} type="number" name='availableSeats' placeholder="available seats" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* Price */}
                        <div className="form-control my-3 mx-3">
                            <label className="label">
                                <span className="label-text font-bold">Price</span>
                            </label>
                            <label className="label">
                                <input {...register("price", { required: true })} defaultValue={price} type="number" name='price' placeholder="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* submit */}
                    <div className="form-control my-3 m-3">
                        <input className="btn bg-[#4499B3] border-none hover:bg-orange-500  text-white normal-case text-xl font-semibold" type="submit" value="Update Now" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateClass;