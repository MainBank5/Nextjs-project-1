import { HiDownload } from "react-icons/hi";
import { IoMdRibbon } from "react-icons/io";
import { GoTrophy } from "react-icons/go";
import { VscSmiley } from "react-icons/vsc";
import Image from "next/image";
import AboutCard from "@/UI/aboutcard";


export default function About() {
    return (
        <div id="about" className="w-full py-10 md:py-24 flex justify-center items-center min-h-screen">
            <div className="max-w-6xl w-full flex flex-col justify-center items-center">
                <h2 className="text-4xl md:text-5xl text-center mt-20 mb-10">About Me</h2>
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between ">
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mb-10 md:mb-0 max-md:order-2">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4 p-4">
                            <AboutCard title="Experience" icon={<IoMdRibbon />} desc="2 Years" />
                            <AboutCard title="Projects" icon={<GoTrophy />} desc="4+ Projects" />
                            <AboutCard title="Clients" icon={<VscSmiley />} desc="2 clients" />
                        </div>
                        <p className="text-lg md:text-xl lg:text-xl mb-6 text-center md:text-left px-4">
                            I&#39;m a Full stack Javascript/Typescript Web Developer with over 2 years of experience building with React, Next.js, and Django. I excel in turning design concepts into scalable, user-friendly websites and apps. My focus is on crafting user-centric, responsive interfaces that marry stunning aesthetics with top-notch functionality. From concept to code, I'm here to bring your digital visions to life, creating immersive experiences that captivate and resonate with the audience.
                        </p>
                        <div className="relative self-center md:self-start">
                            <a href="/Eliud_Karuga_Resume.pdf" download className="inline-flex items-center justify-center border-2 border-green-500 px-8 md:ml-10 py-2 rounded-lg text-center hover:bg-gradient-to-b from-green-400 to-green-600">
                                <span>Download CV</span>
                                <span className="ml-2"><HiDownload size={20} /></span>
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center max-md:order-1">
                        <Image src="/man.jpg" alt="manworking" height={300} width={375} className="object-cover rounded-lg"/>
                    </div>
                </div>
            </div>
        </div>
    );
}