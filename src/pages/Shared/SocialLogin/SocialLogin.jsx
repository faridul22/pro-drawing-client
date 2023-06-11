import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSingIn = () => {
        googleSignIn()
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                navigate(from, { replace: true });
                // const savedUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                // fetch('http://localhost:5000/users', {
                //     method: "POST",
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(savedUser)
                // })

                //     .then(res => res.json())
                //     .then(() => {
                //         navigate(from, { replace: true });
                //     })
            })
            .catch()
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="w-full text-center my-3">
                <button onClick={handleGoogleSingIn} className="btn btn-outline w-full normal-case text-blue-600">
                    <FaGoogle /> Login with Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;