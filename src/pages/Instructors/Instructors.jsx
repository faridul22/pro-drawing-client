import InstructorsCard from "../../components/ClassesCard/InstructorsCard";
import useAllClasses from "../../hooks/useAllClasses";


const Instructors = () => {
    const [allClasses] = useAllClasses();
    const i = []
    console.log(i)
    return (
        <div className="py-32 ">
            <h3 className="text-center text-3xl uppercase border-b-2 mb-5 w-1/2 mx-auto">All Instructors</h3>
            <div className="grid lg:grid-cols-3 gap-6">
                {

                    allClasses?.map(instructor => {
                        if (i.length == 0) {
                            i.push(instructor.instructorEmail)
                            return <InstructorsCard
                                key={instructor._id}
                                instructor={instructor}
                            ></InstructorsCard>
                        }

                        if (i.indexOf(instructor.instructorEmail) == -1) {
                            i.push(instructor.instructorEmail)
                            return <InstructorsCard
                                key={instructor._id}
                                instructor={instructor}
                            ></InstructorsCard>

                        }


                    })
                }
            </div>
        </div>
    );
};

export default Instructors;