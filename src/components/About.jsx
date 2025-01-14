import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";
import { SlArrowRight } from "react-icons/sl";

export default function About() {
    return (
        <div id="about" className="bg-[#cca479] relative">
            <div className="container mx-auto pt-24 px-3">
                <p className="text-center text-sm pb-4">10 THINGS</p>
                <h1 className="lg:text-3xl text-white font-poppins text-center">
                    You probably didn't know <br />
                    about <span>
                        ancient Egypt
                        </span>
                </h1>
                <section className="lg:flex py-[10%] justify-center gap-x-[10%]">
                    <div className="text-white lg:w-1/4">
                        <h2 className="lg:text-3xl">
                            His original name was Not Tutankhamum 
                            </h2>
                        <p className="leading-7 py-6">
                            Tutankhamum was originaliy named Tutankhaten. This name, which literally meands "living  image of the Aten, reflected the fact that Tutankhaten's parents worshipped a sun god known as "the Aten". After a few  years on the throne the young king
                        </p>
                        <a href="#" className="text-black">
                            Read more
                            </a>
                    </div>
                    <div className="relative lg:h-[25rem] h-[230rem] lg:w-[25rem] w-[230px] lg:max-0 mx-auto">
                        <div className="linear-gradient absolute h-full w-full rotate">
                        </div>
                        <img src="./2.jpg" alt="photos" className="absolute w-full h-full object-contain lg:-top-20 lg:left-8"/>
                        <div className="absolute -right-8 top-0 flex vertical-text">
                            <p className="text-sm rotate-text">
                                Tutankhamum 1336-1327 BCE
                                </p>
                            <SlArrowRight className="text-white text-2xl rotate-45" />
                        </div>
                    </div>
                </section>
                <div className="flex lg:flex-row flex-col-reverse pt-[10%] pb-[5%] justify-center gap-x-[10%]">
                    <div className="relative lg:h-[25rem] h-[250px] lg:w-[25rem] w-[250px] lg:mx-0 mx-auto lg:py-0 flex justify-center items-center">
                        <div className="linear-gradient absolute h-full w-full rounded-full">
                        </div>
                            <img src="./6.jpg" alt="image" className="absolute lg:w-[120%] w-full h-full object-contain lg:-top-20 lg:-left-0" />
                            <div className="absolute -left-8 flex vertical-text">
                                <p className="text-sm rotate-text">
                                    Bastet 2890 BCE
                                    </p>
                                <SlArrowRight className="text-white text-2xl rotate-135" />
                            </div>
                        </div>
                        <div className="text-white lg:w-1/4">
                            <h2 className="lg:text-3xl">Cats were represented In religious practices</h2>
                            <p className="leading-7 py-6">
                                cats in accient Egypt werre represented in social  and religious  practices of Ancient Eygpt for more than 30 centuries. Several  Ancient Egypt  deities were  depicted and sculptured with cat-like heads such as Mafdet, Bastet and sekmet, representing justice, fertility and power. The dety Mut was alsodepicted as a cat and in the company of a cat.
                                </p>
                            <a href="#" className="text-black">Read more</a>
                        </div>
                </div>
                <div className="flex justify-center lg:pt-0 py-[10%]">
                    <button className="border border-solid border-black flex items-center justify-center gap-x-2 h-14 bg-transparent px-16 text-lg hoverButton">SHOW MORE <HiArrowLongRight />
                    </button>
                </div>
                <section className="lg:py-0 py-[10%]">
                    <p className="text-center text-sm pb-4">
                        THE ANCIENT
                        </p>
                        <h1 className="lg:text-3xl text-white font-poppins text-center">
                            Egyption
                            <span className="text-black">
                                civilization
                                </span>
                        </h1>
                    <div className="lg:flex lg:w-3/4 mx-auto text-white py-[5%] leading-7 gap-x-[10%]">
                        <p>
                            The ancient Egypion civilization, famous for its pyramids, pharaohs, mumies and tombs, flourished for thousand of year, But what was its lasting impact?
                        </p>
                        <p>
                            Watch the video below to learn how ancient Eygpt contributed to modern-day society with its many cultural developments, partticlarly in language & mathematics.
                        </p>
                    </div>
                    <div className="lg:w-3/4 lg:h-[40rem] mx-auto">
                        <img src="./4.jpg" alt="image4" className="w-full h-full object-cover" />
                    </div>
                </section>
                <section className="py-[10%]">
                    <p className="text-center text-sm pb-4">
                        GO BACK IN TIME
                        </p>
                        <h1 className="lg:text-3xl text-whitefont-poppins text-center">
                            With our top 
                            <span className="text-black">
                                experiences
                                </span>
                        </h1>
                        <p className="text-white lg:w-1/3 py-8 mx-auto text-center leading-7">
                        magnificent monments, lush delta, and with its long past and welcoming, story-loving people
                        </p>
                    <div className="relative flex flex-col items-center justify-center pt-12">
                        <div className="flex lg:flex-row flex-col lg:w-full mx-auto gap-y-4">

                            <div className="relative lg:w-1/3 w-full lg:h-[40rem] h-80 flex flex-col justify-center items-center hoverBtn">
                                <img src="./3.jpg" alt="image3" className="absolute w-full h-full object-cover" />
                                <span className="absolute bottom-8 text-white text-center">
                                    <p className="text-sm">
                                        GIZA
                                        </p>
                                    <p className="lg:text-3xl font-poppins">
                                        Red Pyramid
                                        </p>
                                </span>
                            </div>

                            <div className="relative lg:w-1/3 lg:h-[40rem] h-80 flex flex-col justify-center items-center hoverBtn">
                                <img src="./7.jpg" alt="image7" className="absolute w-full h-full object-cover" />
                                <span className="absolute bottom-8 text-white text-center">
                                    <p className="text-sm">
                                        LUXOR
                                        </p>
                                    <p className="lg:text-3xl font-poppins">
                                        Valley of Kings
                                        </p>
                                </span>
                            </div>

                            <div className="relative lg:w-1/3 lg:h-[40rem] h-80 flex flex-col justify-center items-center hoverBtn">
                                <img src="./9.jpg" alt="image9" className="absolute w-full h-full object-cover" />
                                <span className="absolute bottom-8 text-white text-center">
                                    <p className="text-sm">
                                        CAIRO
                                        </p>
                                    <p className="lg:text-3xl font-poppins">
                                        Giza Pyramid
                                        </p>
                                </span>
                            </div>

                        </div>
                        <button className="absolute left-4 lg:flex hidden flex-col bg-transparent border-none outline-none cursor-pointer">
                        <HiArrowLongLeft className="text-2xl" /> Back
                        </button>

                        <button className="absolute right-4 lg:flex hidden flex-col bg-transparent border-none outline-none cursor-pointer">
                        <HiArrowLongRight className="text-2xl" /> Next
                        </button>

                    </div>
                </section>
            </div>
        </div>
    );
}