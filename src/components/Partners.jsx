import { HiArrowLongRight } from "react-icons/hi2";

export default function Partnerrs() {

    return (
        <div className="pb-[5%] relative bg-[#cca479]">
            <img src="./5.jpg" alt="image5" className="absolute h-full w-full opacity-10 " />
            <div className="relative z-10">
                <p className="text-center text-sm pb-4">THANK YOU</p>
                <h1 className="lg:text-3xl text-white font-poppins text-center">To our Sponsors and  <br /> Event{" "}
                <span className="text-black">Partners</span>
                </h1>
                <div className="py-[5%] flex flex-wrap items-center justify-center gap-x-8">
                    <img src="./11.jpg" alt="image11" className="lg:w-52 w-40 lg:h-52  opacity-20  object-contain" />
                    <img src="./12.jpg" alt="image12" className="lg:w-52 w-40 lg:h-52 object-contain" />
                    <img src="./13.jpg" alt="image13" className="lg:w-52 w-40 lg:h-52 object-contain" />
                    <img src="./10.jpg" alt="image10" className="lg:w-52 w-40 lg:h-52 object-contain" />
                </div>
            </div>
            <div className="flex justify-center pb-[5%]">
            <button className="border border-solid border-black flex items-center justify-center gap-x-2 h-14 bg-transparent px-16 text-lg hoverButton">
                Book Now<HiArrowLongRight />
                </button>
            </div>
            
        </div>
    );
}