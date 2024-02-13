import Image from "next/image";
import Link from 'next/link';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {FaSquareXTwitter} from 'react-icons/fa6';

export default function Hero() {
  return (
    <div id="hero" className="w-full py-10">
      <div className="mx-auto flex flex-col justify-center items-center md:flex-row w-[92%]">
        <div id="text" className="w-full md:w-2/3 p-4 flex flex-col max-md:text-center ">
          <h1 className="text-3xl">Hi, I&#39;M <span className="text-green-500">Eliud</span></h1>
          <span>A Web Developer</span> 
          <div>
            <p>I collaborate with entrepreneurs, designers, and other developers in building stunning, functional, and scalable web apps. From conception to deployment.</p>
          </div>
          <div className="flex justify-center md:justify-between max-md:gap-6 items-center py-4 md:w-1/4">
            <FaGithub /> <FaLinkedinIn /> <FaSquareXTwitter />
          </div>
          <Link href='contact'>Let&#39;s Chat</Link>
        </div>
        <div className="">
          <Image
            src="/eliud.png"
            width={300}
            height={200}
            alt="Me"
          />
        </div>
      </div>
    </div>
  )
}



