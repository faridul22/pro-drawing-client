import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer p-10 bg-opacity-30 bg-[#4499B3] text-base-content">
                    <div className="my-auto text-center">
                        <img className="mr-3 ml-9" width={80} src="https://i.ibb.co/Cn29qsD/drawing.png" alt="" />
                        <p className="text-xl font-bold uppercase">Pro Drawing</p>
                    </div>
                    <div>
                        <span className="footer-title">Social Link</span>
                        <a className="flex items-center link link-hover"><FaFacebook className='mr-2' /> <span>Facebook</span></a>
                        <a className="flex items-center link link-hover"><FaTwitter className='mr-2' /> <span>Twitter</span></a>
                        <a className="flex items-center link link-hover"><FaInstagram className='mr-2' /> <span>Instagram</span></a>
                        <a className="flex items-center link link-hover"><FaLinkedin className='mr-2' /> <span>LinkedIn</span></a>
                    </div>
                    <div>
                        <span className="footer-title">Office Address</span>
                        <a className="link link-hover">Mirpur-2, Hosen Market</a>
                        <a className="link link-hover">2nd floor,Left Side</a>
                        <a className="link link-hover">Road-42/43,Asia market north</a>
                        <a className="link link-hover">Dhaka, Bangladesh</a>
                    </div>


                    <div className="md:w-1/2">
                        <span className="footer-title">Newsletter</span>
                        <div className="form-control w-64">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <div className="relative">
                                <input type="email" placeholder="enter your email" className="input input-bordered w-full sm:pr-5 lg:pr-16" />
                                <button className="btn hover:bg-[#FF944B] text-white border-0 bg-[#4499B3] absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-center p-4 bg-opacity-30 bg-[#4499B3] text-base-content">
                    <div>
                        <p>Copyright © 2023 - All right reserved by Pro Drawing Industries Ltd</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;