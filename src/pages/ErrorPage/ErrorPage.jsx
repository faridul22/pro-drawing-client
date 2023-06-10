import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <>
            <Helmet>
                <title>Pro Drawing | Error</title>
            </Helmet>
            <div className="text-center">
                <h3>44000044</h3>
                <Link to="/"><button className="btn text-white bg-[#DB7441] hover:bg-[#449AB3]">Back To Home</button></Link>
            </div>
        </>
    );
};

export default ErrorPage;