import InstructorsCard from "../../../components/ClassesCard/InstructorsCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAllClasses from "../../../hooks/useAllClasses";


const PopularInstructors = () => {
    const [allClasses] = useAllClasses();
    const i = []
    console.log(i)
    return (
        <div className="mt-20">
            <SectionTitle subHeading="Our most" heading="Popular Instructors"></SectionTitle>
            <div className="grid lg:grid-cols-3 gap-6 mt-10">
                {

                    allClasses?.slice(0, 6).map(instructor => {
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

export default PopularInstructors;