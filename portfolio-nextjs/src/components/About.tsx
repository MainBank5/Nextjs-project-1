import { HiDownload } from "react-icons/hi";
import { IoMdRibbon } from "react-icons/io";
import { GoTrophy } from "react-icons/go";
import { VscSmiley } from "react-icons/vsc";
import Image from "next/image";
import AboutCard from "@/UI/aboutcard";


export default function About() {
    return (
        <div id="about" className="w-full py-5 md:py-10 flex justify-center items-center min-h-screen">
            <div className="max-w-6xl w-full px-4 md:px-8 flex flex-col md:flex-row justify-center items-center">
                <div className="md:w-1/2 flex flex-col justify-center items-center text-center md:text-left mb-8 md:mb-0 max-md:order-2">
                    <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-green-500 mb-10">About Me</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 p-8">
                        <AboutCard title="Experience" icon={<IoMdRibbon />} desc="2 Years" />
                        <AboutCard title="Projects" icon={<GoTrophy />} desc="4+ Projects" />
                        <AboutCard title="Clients" icon={<VscSmiley />} desc="2 clients" />
                    </div>
                    <p className="text-lg md:text-xl lg:text-2xl mb-6 text-center md:text-left">
                        I'm a Full stack Javascript/Typescript Web Developer with over 2 years of experience building with React, Next.js, and Django. I excel in turning design concepts into scalable, user-friendly websites and apps. My focus is on crafting user-centric, responsive interfaces that marry stunning aesthetics with top-notch functionality. From concept to code, I'm here to bring your digital visions to life, creating immersive experiences that captivate and resonate with the audience.
                    </p>
                    <div className="relative self-center md:self-start mb-8 md:mb-0">
                        <a href="/Eliud_Karuga_Resume.pdf" download className="inline-flex items-center justify-center border-2 border-green-500 px-8 py-2 rounded-lg text-center hover:bg-gradient-to-b from-green-400 to-green-600">
                            <span>Download CV</span>
                            <span className="ml-2"><HiDownload size={20} /></span>
                        </a>
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <div className="border-4 border-emerald-500 rounded-full overflow-hidden w-80 h-80">
                        <Image
                            src="/man.jpg"
                            width={300}
                            height={300}
                            alt="working-pc"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
  }