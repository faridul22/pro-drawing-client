import InstructorsCard from "../../../components/ClassesCard/InstructorsCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAllUsers from "../../../hooks/useAllUsers";


const PopularInstructors = () => {
    const [allUsers] = useAllUsers();
    return (
        <div className="mt-20">
            <SectionTitle subHeading="Our most" heading="Popular Instructors"></SectionTitle>
            <div className="grid lg:grid-cols-3 gap-6 mt-10">
                {
                    allUsers?.slice(0, 6).map(instructor => <InstructorsCard
                        key={instructor._id}
                        instructor={instructor}
                    ></InstructorsCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;