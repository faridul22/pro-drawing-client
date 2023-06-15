import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div >
            <Carousel>
                <div className='relative'>
                    <img src="https://i.ibb.co/zfhH1cn/banner1-1.jpg" />
                    <div className="absolute text-center lg:bottom-36 w-full mx-auto">
                        <h3 className='text-7xl text-[#E94675] mb-5 font-bold'>Now <br /> 25% Discount</h3>
                        <button className='btn mx-auto bg-[#4499B3] text-white border-0 hover:bg-[#FF944B]'>Enroll Now</button>
                    </div>
                </div>
                <div className='relative'>
                    <img src="https://i.ibb.co/9NkdJFm/banner2-1.jpg" />
                    <div className="absolute text-center lg:bottom-36 w-full mx-auto">
                        <h3 className='text-7xl text-[#E94675] mb-5 font-bold'>Now <br /> 25% Discount</h3>
                        <button className='btn mx-auto bg-[#4499B3] text-white border-0 hover:bg-[#FF944B]'>Enroll Now</button>
                    </div>
                </div>
                <div className='relative'>
                    <img src="https://i.ibb.co/XSxNHcr/banner3-1.jpg" />
                    <div className="absolute text-center lg:bottom-36 w-full mx-auto">
                        <h3 className='text-7xl text-[#E94675] mb-5 font-bold'>Now <br /> </h3>
                        <button className='btn mx-auto bg-[#4499B3] text-white border-0 hover:bg-[#FF944B]'>Enroll Now</button>
                    </div>
                </div>
                <div className='relative'>
                    <img src="https://i.ibb.co/DVVJG7s/banner4-1.jpg" />
                    <div className="absolute text-center lg:bottom-36 w-full mx-auto">
                        <h3 className='text-7xl text-[#E94675] mb-5 font-bold'>Now <br /> 25% Discount</h3>
                        <button className='btn mx-auto bg-[#4499B3] text-white border-0 hover:bg-[#FF944B]'>Enroll Now</button>
                    </div>
                </div>
                <div className='relative'>
                    <img src="https://i.ibb.co/zsQQNg3/banner5-1.jpg" />
                    <div className="absolute text-center lg:bottom-36 w-full mx-auto">
                        <h3 className='text-7xl text-[#E94675] mb-5 font-bold'>Now <br /> 25% Discount</h3>
                        <button className='btn mx-auto bg-[#4499B3] text-white border-0 hover:bg-[#FF944B]'>Enroll Now</button>
                    </div>
                </div>
                <div className='relative'>
                    <img src="https://i.ibb.co/M6PpFCk/banner6-1.jpg" />
                    <div className="absolute text-center lg:bottom-36 w-full mx-auto">
                        <h3 className='text-7xl text-[#E94675] mb-5 font-bold'>Now <br /> 25% Discount</h3>
                        <button className='btn mx-auto bg-[#4499B3] text-white border-0 hover:bg-[#FF944B]'>Enroll Now</button>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;