import Image from "next/image";
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

export default function Hero() {
  return (
    <div id="home" className="w-full py-5 h-screen md:py-10 flex justify-center items-center">
      <div className="max-w-6xl w-full px-4 md:px-8 flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2 flex flex-col justify-center items-center text-center md:text-left mb-10 md:mb-0 max-md:order-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-500 dark:text-white mb-4">Hi, I&#39;M <span className="text-black dark:text-green-400">Eliud</span></h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-white mb-6">
            A Web Developer collaborating with entrepreneurs, designers, and other developers to build stunning, functional, and scalable web apps, from conception to deployment.
          </p>
          <div className="flex justify-center md:justify-start mb-4 ">
            <Link href="https://github.com/MainBank5" target="_blank" className="text-gray-800 dark:text-white  hover:text-green-500 text-xl mr-4">
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/eliud-karuga-6549ab250/" target="_blank" className="text-gray-800 dark:text-white hover:text-green-500 text-xl mr-4">
              <FaLinkedinIn />
            </Link>
            <Link href="https://twitter.com/SzyslakS1" target="_blank" className="text-gray-800 dark:text-white hover:text-green-500 text-xl">
              <FaSquareXTwitter />
            </Link>
          </div>
          <div className="relative">
            <Link href="#projects">
              <p className="text-green-500 font-semibold text-xl border-b-2 border-green-500 hover:bg-green-500 hover:text-white py-1 px-2 transition duration-300 ease-in-out">
                Explore Projects <FaArrowRight className="inline ml-1" />
              </p>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end max-md:order-1">
          <div className="border-4 border-emerald-500 rounded-full overflow-hidden w-80 h-80">
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
    </div>
  );
}
