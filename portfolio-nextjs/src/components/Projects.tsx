
import Image from "next/image"


export default function Projects() {
    return (
        <div id="projects" className="min-h-screen w-full flex justify-center items-center py-10 md:py-20">
            <div className="mx-auto w-4/5">
                <h2 className="text-4xl md:text-5xl text-green-400 mb-9 text-center">Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 py-6">

                    <div className="px-6">
                        <Image src="/fitness.jpg" alt="fitnessweb" width={400} height={400} className="rounded-md" />
                        
                        <div className="inset-0  flex flex-col items-center justify-center">
                            <h1>A fitness website built with Nextjs</h1>
                            <div className="flex justify-center items-center">
                                <a href="#" className="mx-4">Live Demo</a>
                                <a href="#" className="mx-4">Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="px-6 group hover:transform">
                        <Image src="/travel.jpg" alt="fitnessweb" width={350} height={100} className="rounded-md" />
                        <div className="flex flex-col justify-center items-center">
                            <h1>A fullstack tour and travel website built with Nextjs</h1>
                            <div className="flex flex-col justify-center items-center">
                                <a href="#" className="mx-4">Live Demo</a>
                                <a href="#" className="mx-4">Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="px-6">
                        <Image src="/realestate.jpg" alt="realestateweb" width={400} height={50} className="h-48 rounded-md" />
                        <div className="flex flex-col justify-center items-center">
                            <h1>A realestate website built with react</h1>
                            <div className="flex justify-center items-center">
                                <a href="#" className="mx-4">Live Demo</a>
                                <a href="#" className="mx-4">Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="px-6">
                        <Image src="/commerce.jpg" alt="realestateweb" width={350} height={50} className="h-48 rounded-md" />
                        <div className="flex flex-col justify-center items-center">
                            <h1>An ecommerce website built with react & django</h1>
                            <div className="flex justify-center items-center">
                                <a href="#" className="mx-4">Live Demo</a>
                                <a href="#" className="mx-4">Code</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}