import InstructorsCard from "../../components/ClassesCard/InstructorsCard";
import useAllUsers from "../../hooks/useAllUsers";


const Instructors = () => {
    const [allUsers] = useAllUsers();
    return (
        <div className="py-32 ">
            <h3 className="text-center text-3xl uppercase border-b-2 mb-5 w-1/2 mx-auto">All Instructors</h3>
            <div className="grid lg:grid-cols-3 gap-6">
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

export default Instructors;