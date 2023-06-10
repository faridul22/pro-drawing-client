import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import StudentWorks from "../StudentWorks/StudentWorks";


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Pro Drawing | Home</title>
            </Helmet>
            <div className="mb-24">
                <Banner></Banner>
                <PopularClasses></PopularClasses>
                <PopularInstructors></PopularInstructors>
                <StudentWorks></StudentWorks>
            </div>
        </>
    );
};

export default Home;