import { useEffect, useState } from "react";
import InstructorsCard from "../../../components/ClassesCard/InstructorsCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('https://pro-drawing-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div className="mt-20">
            <SectionTitle subHeading="Our most" heading="Popular Instructors"></SectionTitle>
            <div className="grid lg:grid-cols-3 gap-6 mt-10">
                {
                    instructors.slice(0, 6).map(instructor => <InstructorsCard
                        key={instructor._id}
                        instructor={instructor}
                    ></InstructorsCard>)

                }
            </div>
        </div>
    );
};

export default PopularInstructors;