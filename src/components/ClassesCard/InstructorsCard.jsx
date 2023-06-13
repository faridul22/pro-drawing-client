

const InstructorsCard = ({ instructor }) => {
    const { instructorName, instructorImage, instructorEmail } = instructor;
    return (
        <div className="card md:mx-auto shadow-sm border border-orange-200 w-full">
            <figure className="px-5 pt-5 ">
                {
                    instructorImage ? <img src={instructorImage} alt="" className="w-full h-[250px] rounded-lg" /> :
                        <img className="w-3/4" src="https://i.ibb.co/cLNMyCL/user-avata-removebg-preview.png" alt="" />
                }
            </figure>
            <div className="card-body text-center">
                <h2 className="text-2xl">{instructorName}</h2>
                <p className="">{instructorEmail}</p>
            </div>
        </div>
    );
};

export default InstructorsCard;