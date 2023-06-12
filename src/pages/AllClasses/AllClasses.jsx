import { useEffect, useState } from "react";
import ClassesCard from "../../components/ClassesCard/ClassesCard";


const AllClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div className="">
            <div className="h-32"></div>
            <h3 className="text-center text-3xl border-b-2 pb-5">All Classes</h3>
            <div className="grid lg:grid-cols-3 gap-4 mb-20 mt-10">

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

export default AllClasses;