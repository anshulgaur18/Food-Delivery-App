import { FaGooglePlay } from "react-icons/fa6";
import { IoLogoApple } from "react-icons/io5";

const Footer  = () => {
    return(
        <div className="footer">
            <div className="upper bg-slate-200 h-28  m-8 flex flex-row content-evenly justify-evenly">
                <div className="left w-96 mt-auto mr-24 mb-auto ml-0">
                    <span className="font-bold text-2xl text-slate-600">For better experience,download the app now</span>
                </div>
                <div className="right   flex flex-row justify-center content-center mt-auto h-16 mr-2 mb-auto ml-2">
                <div className="play mx-4 text-white bg-black rounded-md">
                <p className="font-bold text-lg">Get it on Google Play</p>
                <FaGooglePlay />
                </div>
              <div className="apple mx-4  text-white bg-black rounded-md">       
                <p className="font-bold text-lg">Download on the App Store</p>
                <IoLogoApple />
              </div>
                </div>
            </div>
            <div className="lower bg-black h-96 text-white flex justify-center ">
                <div className="first m-10">
                    <ul>
                        <li className="mb-4 text-lg font-bold">Company</li>
                        <li className="mb-4">About</li>
                        <li className="mb-4">Careers</li>
                        <li className="mb-4">team</li>
                    </ul>
                </div>
                <div className="sec m-10">
                <ul>
                        <li className="mb-4 text-lg font-bold">Company</li>
                        <li className="mb-4">About</li>
                        <li className="mb-4">Careers</li>
                        <li className="mb-4">team</li>
                    </ul>
                </div>
                <div className="third m-10">
                <ul>
                        <li className="mb-4 text-lg font-bold">Company</li>
                        <li className="mb-4">About</li>
                        <li className="mb-4">Careers</li>
                        <li className="mb-4">team</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;