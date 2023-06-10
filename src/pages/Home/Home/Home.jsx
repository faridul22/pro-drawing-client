import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";


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
            </div>
        </>
    );
};

export default Home;