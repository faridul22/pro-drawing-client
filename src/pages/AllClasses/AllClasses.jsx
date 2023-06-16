import { useEffect, useState } from "react";
import ClassesCard from "../../components/ClassesCard/ClassesCard";
import { Helmet } from "react-helmet-async";


const AllClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('https://pro-drawing-server.vercel.app/approvedclasses')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <>
            <Helmet>
                <title>Pro Drawing | All Classes</title>
            </Helmet>
            <div className="">
                <div className="h-32"></div>
                <h3 className="text-center text-3xl border-b-2 uppercase pb-5">All Classes</h3>
                <div className="grid lg:grid-cols-3 gap-4 mb-20 mt-10">

                    {
                        classes.map(classData => <ClassesCard
                            key={classData._id}
                            classData={classData}
                        ></ClassesCard>)
                    }

                </div>
            </div>
        </>
    );
};

export default AllClasses;