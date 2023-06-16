import { useEffect, useState } from "react";
import InstructorsCard from "../../components/ClassesCard/InstructorsCard";
import { Helmet } from "react-helmet-async";


const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('https://pro-drawing-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    return (
        <>
            <Helmet>
                <title>Pro Drawing | Instructors</title>
            </Helmet>
            <div className="py-32 ">
                <h3 className="text-center text-3xl uppercase border-b-2 mb-5 w-1/2 mx-auto">All Instructors</h3>
                <div className="grid lg:grid-cols-3 gap-6">
                    {
                        instructors.map(instructor => <InstructorsCard
                            key={instructor._id}
                            instructor={instructor}
                        ></InstructorsCard>)

                    }
                </div>
            </div>
        </>
    );
};

export default Instructors;