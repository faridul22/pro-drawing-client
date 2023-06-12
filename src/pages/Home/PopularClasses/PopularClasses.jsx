import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ClassesCard from "../../../components/ClassesCard/ClassesCard";


const PopularClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data.slice(0, 6)))
    }, [])

    return (
        <div>
            <SectionTitle subHeading="Here are some of our most" heading="Popular Classes"></SectionTitle>
            <div className="grid lg:grid-cols-3 gap-4 mt-10">

                {
                    classes.map(classData => <ClassesCard
                        key={classData._id}
                        classData={classData}
                    ></ClassesCard>)
                }

            </div>
        </div>
    );
};

export default PopularClasses;