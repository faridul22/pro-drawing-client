import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const imgHostingToken = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddAClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const imgHostingURL = `https://api.imgbb.com/1/upload?key=${imgHostingToken}`;
    const onSubmit = data => {
        // console.log(data)
        const formData = new FormData();
        formData.append('image', data.classImage[0]);
        fetch(imgHostingURL, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const imgURL = imgData.data.display_url;

                    const { className, instructorName, instructorEmail, availableSeats, price, instructorImage } = data;
                    const newClass = { className, classImage: imgURL, instructorName, instructorEmail, instructorImage, availableSeats: parseInt(availableSeats), price: parseFloat(price), status: "pending", totalStudent: 0, feedback: "" };

                    // console.log(newClass)
                    axiosSecure.post('/classes', newClass)
                        .then(data => {
                            // console.log(data.data)
                            if (data.data.insertedId) {
                                reset()
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Your new class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                navigate("/dashboard/myClasses")
                            }

                        })
                }
            })

    };

    return (
        <div className='container mx-auto w-3/4 my-16'>
            <div className='border-4 border-cyan-200 p-10 rounded-lg  bg-cyan-50'>
                <h1 className='text-center text-3xl text-gray-700 mb-5 font-semibold'>Add A New Class</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid lg:grid-cols-1'>
                        {/* Class name */}
                        <div className="form-control my-3 mx-3">
                            <label className="label">
                                <span className="label-text font-bold">Class Name</span>
                            </label>
                            <label className="">
                                <input {...register("className", { required: true })} type="text" name='className' placeholder="Class name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* Class image */}

                        <div className="form-control my-3 mx-3">
                            <label className="label">
                                <span className="label-text font-bold">Class image URL</span>
                            </label>
                            <input {...register("classImage", { required: true })} type="file" name='classImage' className="file-input file-input-bordered w-full" />
                        </div>
                        {/* Available seats */}
                        <div className="form-control my-3 mx-3">
                            <label className="label">
                                <span className="label-text font-bold">Available Seats</span>
                            </label>
                            <label className="">
                                <input {...register("availableSeats", { required: true })} type="number" name='availableSeats' placeholder="available seats" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* Price */}
                        <div className="form-control my-3 mx-3">
                            <label className="label">
                                <span className="label-text font-bold">Price</span>
                            </label>
                            <label className="label">
                                <input {...register("price", { required: true })} type="number" name='price' placeholder="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* Instructor info */}
                        <div className="form-control my-3 mx-3">
                            <label className="label">
                                <span className="label-text font-bold">Instructor name</span>
                            </label>
                            <label className="">
                                <input {...register("instructorName", { required: true })} value={user && user?.displayName} type="text" name='instructorName' placeholder="instructor name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control my-3 mx-3">
                            <label className="label">
                                <span className="label-text font-bold">Instructor email</span>
                            </label>
                            <label className="">
                                <input {...register("instructorEmail", { required: true })} value={user && user?.email} type="email" name='instructorEmail' placeholder="instructor email" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control my-3 mx-3">
                            <label className="label">
                                <span className="label-text font-bold">Instructor photo URL</span>
                            </label>
                            <label className="label">
                                {user.photoURL ?
                                    <input {...register("instructorImage", { required: true })} value={user && user?.photoURL} type="url" name='instructorImage' placeholder="instructor photo url" className="input input-bordered w-full" /> :
                                    <input {...register("instructorImage", { required: true })} type="url" name='instructorImage' placeholder="instructor photo url" className="input input-bordered w-full" />
                                }
                            </label>
                        </div>
                    </div>

                    {/* submit */}
                    <div className="form-control my-3 m-3">
                        <input className="btn bg-[#4499B3] border-none hover:bg-orange-500  text-white normal-case text-xl font-semibold" type="submit" value="Add Now" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddAClass;