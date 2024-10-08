
import Image from "next/image"


export default function Projects() {
    return (
        <div id="projects" className="min-h-screen w-full flex justify-center items-center py-10 md:py-28">
            <div className="container w-4/5">
                <h2 className="text-4xl md:text-5xl text-green-400 mb-9 text-center">Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 py-6 shadow-md rounded-lg">

                    <div className="px-6 object-cover bg-no-repeat relative">
                        <Image src="/ecommerce.png" alt="fitnessweb" width={600} height={600} className="rounded-md" />
                        
                        <div className="flex flex-col items-center justify-center py-2">
                            <h1>E-commerce Website</h1>
                            <div className="flex justify-center items-center py-4 md:py-8">
                                <a href="https://ecommerce-green-phi.vercel.app/" target="_blank" className="text-center mx-4 py-2 px-4 border-green-500 border-2 rounded-md">Live Demo</a>
                                <a href="https://github.com/MainBank5/ecommerce/tree/main/dist" target="_blank" className="text-center mx-4 py-2 px-4 border-green-500 border-2 rounded-md ">Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="px-6 bg-no-repeat object-cover">
                        <Image src="/appointment.png" alt="fitnessweb" width={600} height={600} className="rounded-md" />
                        
                        <div className="flex flex-col justify-center items-center py-2">
                            <h1>MedCare</h1>
                            <div className="flex justify-end items-center py-4 text-center">
                                <a href="http://poggg0wss8ss8wkss8oc0g0o.164.90.182.75.sslip.io/" target="_blank" className=" text-center mx-4 py-2 px-4 border-green-500 border-2 rounded-md">Live Demo</a>
                                <a href="https://github.com/MainBank5/Appointment-booking-system" target="_blank" className="text-center mx-4 py-2 px-4  border-green-500 border-2 rounded-md">Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="px-6">
                        <Image src="/realestate.jpg" alt="realestateweb" width={400} height={400} className=" rounded-md" />
                        <div className="flex flex-col justify-center items-center py-2">
                            <h1>A realestate website built with react</h1>
                            <div className="flex justify-end items-center py-4">
                                <a href="#" target="_blank" className=" text-center mx-4 py-2 px-4 border-green-500 border-2 rounded-md ">Live Demo</a>
                                <a href="#" target="_blank" className=" text-center mx-4 py-2 px-4 border-green-500 border-2 rounded-md ">Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="px-6 relative">
                        <Image src="/commerce.jpg" alt="realestateweb" width={400} height={400} className=" rounded-md" />
                        <div className="flex flex-col justify-center items-center py-2">
                            <h1>An ecommerce website built with react & django</h1>
                            <div className="flex justify-end items-center py-4">
                                <a href="#" className=" text-center mx-2 py-2 px-4 border-green-500 border-2 rounded-md ">Live Demo</a>
                                <a href="#" className="text-center mx-4 py-2 px-4 border-green-500 border-2 rounded-md ">Code</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
