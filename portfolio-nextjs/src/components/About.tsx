import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
export default function About() {
    return (
        <div id="about" className=" py-12 w-full">
            <div className=" mx-auto flex flex-col w-[70%] justify-center items-center text-center  ">
                <div >
                    <p>I&#39;m a Full stack Javascript/Typescript Web Developer
                        with over 2 years of experience of building with React, nextjs and Django.

                        I excel in turning design concepts into scalable,
                        user-friendly websites and apps. My focus is on crafting
                        user-centeric, responsive interfaces that marry stunning aesthetics
                        with top-notch functionality. From concept to code, I&#39;m here to
                        bring your digital visions to life, creating immersive experiences
                        that captivate and resonate with the audience.

                    </p>
               
                </div>

                <div className='my-10'>
                  <a href='/Eliud_Karuga_Resume.pdf' download={true}  className="border-2 border-green-500 px-8 py-2 rounded-lg text-center hover:bg-gradient-to-b from-green-400 to-green-600">Resume <span>
                  
                    </span> </a>
                  
                </div>

               
            </div>
        </div>
    )
}
