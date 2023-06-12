import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("")
    const [hidden, setHidden] = useState(true)
    const { signIn } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";



    const onSubmit = data => {
        setError("")

        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'User login successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError("Your email and password does not match")
                console.log(error)
            })

    };



    return (
        <>
            <Helmet>
                <title>Pro Drawing | Login</title>
            </Helmet>
            <div className="hero  min-h-screen">
                <div className='my-32'>
                    <h1 className="text-5xl text-center mb-2 uppercase font-bold">Login now!</h1>
                    <p className="text-center text-xl">If you are a existing user please fill up the form with correct information <br /> then click on Login button</p>
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center md:w-1/2 lg:text-left">
                            <div className="text-center">
                                <img width={1000} src="https://i.ibb.co/LxW38gT/login.jpg" alt="" />
                            </div>
                        </div>
                        <div className="card w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100 card-body">
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600">email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={hidden ? "password" : "text"} {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered relative" />
                                    <p className='absolute right-11 top-[210px]' onClick={() => setHidden(!hidden)}>
                                        {hidden ? <FaEyeSlash /> : <FaEye />}
                                    </p>
                                    {errors.password?.type === 'required' && <p className="text-red-600">password is required</p>}
                                    {error && <p className='text-red-600'>{error}</p>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>

                                {/* TODO: Make button disabled */}
                                <div className="form-control mt-6">
                                    <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
                                </div>
                                <label className="label">
                                    <p className='text-center text-yellow-400 font-medium'><small>New here? <Link to="/register">Create a New Account</Link></small></p>
                                </label>
                            </form>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;