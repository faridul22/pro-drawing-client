import InstructorsCard from "../../../components/ClassesCard/InstructorsCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAllClasses from "../../../hooks/useAllClasses";


const PopularInstructors = () => {
    const [allClasses] = useAllClasses();
    return (
        <div className="mt-20">
            <SectionTitle subHeading="Our most" heading="Popular Instructors"></SectionTitle>
            <div className="grid lg:grid-cols-3 gap-6 mt-10">
                {
                    allClasses?.slice(0, 6).map(instructor => <InstructorsCard
                        key={instructor._id}
                        instructor={instructor}
                    ></InstructorsCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;