"use client"
import { useRouter } from "next/navigation"

export default function Notfound() {
    const router = useRouter();
    const handleClick = () => {
        router.push("/")
    }
    return (
        <div className=" bg-white mx-auto container mt-60 ">
            <div className="flex flex-col flex-wrap flex-grow justify-center items-center px-8">
                <h1 className="text-3xl ">404 | We Couldn`t Find The Page You`re Looking For</h1>

                <div className="mt-4 ">
                    <button className="border-2 rounded-md shadow-lg border-emerald-500 py-4 px-10 text-center hover:bg-emerald-500 hover:text-white" onClick={handleClick}>Home</button>
                </div>
            </div>


        </div>
    )
}
