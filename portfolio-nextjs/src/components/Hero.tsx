import Image from "next/image";
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

export default function Hero() {
  return (
    <div id="hero" className="w-full py-10">
      <div className="mx-auto flex flex-col justify-center items-center md:flex-row w-[92%] shadow-md ">
        <div id="text" className="w-full md:w-2/3 p-4 flex flex-col text-center max-md:order-2 ">
          <h1 className="max-md:text-4xl text-3xl ">Hi, I&#39;M <span className="text-green-500">Eliud</span></h1>
          <span>A Web Developer</span> 
          <div>
            <p>I collaborate with entrepreneurs, designers, and other developers in building stunning, functional, and scalable web apps. From conception to deployment.</p>
          </div>
          <div className=" flex justify-center md:justify-between max-md:gap-6 items-center py-4 md:w-1/4">
            <FaGithub /> <FaLinkedinIn /> <FaSquareXTwitter />
          </div>
          
          <div className="relative w-2 group ml-2 mx-auto mt-10 flex-grow">
        
          <Link href='#projects' className=''>Projects</Link>
          </div>
          
        </div>
        <div className="border-4 shadow-md shadow-emerald-600  border-emerald-500 relative rounded-full max-md:order-1 overflow-hidden w-80 h-80 pt-0">
          <Image
            src="/eliud.png"
            width={300}
            height={300}
            alt="Me"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}
