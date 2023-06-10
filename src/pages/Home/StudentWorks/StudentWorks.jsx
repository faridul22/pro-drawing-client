import { Bounce, Slide, Zoom } from "react-awesome-reveal";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const StudentWorks = () => {
    return (
        <>
            <SectionTitle subHeading="Gallery" heading="Student Works"></SectionTitle>
            <div className="grid lg:grid-rows-2 lg:grid-cols-3 grid-flow-row gap-4">
                <div className=" ...">
                    <Slide>
                        <img className="lg:w-full sm:w-3/4 mx-auto" src="https://i.ibb.co/DMy4tWQ/drawing1.jpg" alt="" />
                    </Slide>
                </div>
                <div className=" ...">
                    <Zoom className="h-full">
                        <img className="lg:w-full sm:w-3/4 mx-auto h-full" src="https://i.ibb.co/gyzSzyY/drawing2.jpg" alt="" />
                    </Zoom>
                </div>
                <div className=" h-full lg:row-span-2 ...">
                    <img className="lg:w-full sm:w-3/4 mx-auto h-full" src="https://i.ibb.co/jTKScdX/drawing3.jpg" alt="" />

                </div>
                <div className=" lg:col-span-2 ...">
                    <Bounce className="h-full">
                        <img className="lg:w-full sm:w-3/4 mx-auto h-full" src="https://i.ibb.co/X2kTnsD/drawing4.jpg" alt="" />
                    </Bounce>
                </div>
            </div>
        </>
    );
};

export default StudentWorks;