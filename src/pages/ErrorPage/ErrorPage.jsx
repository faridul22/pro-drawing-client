import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <>
            <Helmet>
                <title>Pro Drawing | Error</title>
            </Helmet>
            <div className="text-center mt-20 bg-[#F2F2F2] w-1/2 p-10 mx-auto rounded-xl">
                <img className="mx-auto" src="https://i.ibb.co/jw3W5kQ/error-1.jpg" alt="" />
                <Link to="/"><button className="btn text-white bg-[#DB7441] hover:bg-[#449AB3]">Back To Home</button></Link>
            </div>
        </>
    );
};

export default ErrorPage;