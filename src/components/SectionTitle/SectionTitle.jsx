
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className=" w-full md:mx-auto text-center my-10 pb-5 mt-32 shadow-sm">
            <p className=" text-[#FF944B] text-xl">{subHeading}</p>
            <h3 className="uppercase border-t-4 border-[#FF944B]  py-2 mt-2 text-3xl font-semibold w-1/2 mx-auto">{heading}</h3>
        </div>
    );
};

export default SectionTitle;