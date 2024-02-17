"use client"
import Link from "next/link";
import { useState } from 'react'
import { usePathname } from "next/navigation";
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import { useScroll } from "@/hooks/useScroll";
import ThemeSwitch from '@/components/ThemeSwitch'
import clsx from 'clsx';

const Navlinks = [
    { id: 1, name: "Home", route: "#" },
    { id: 2, name: "About", route: "#about" },
    { id: 2, name: "Skills", route: "#skills" },
    { id: 2, name: "Projects", route: "#projects" },
    { id: 2, name: "Contact", route: "#contact" },
]
const Navbar = () => {
    const [openMobile, setOpenMobile] = useState(false);

    const pathName = usePathname();

    const handleMobile = () => {
        setOpenMobile(!openMobile)
    }

    const handleMenuItemClick = () => {
        // Close the mobile menu when a menu item is clicked
        setOpenMobile(false);
    };

    const scrolling = useScroll()
    return (
        <nav className={`fixed top-0 z-[99999] w-full  shadow-lg dark:shadow-green-500 ${scrolling ? "top-0 backdrop-blur-md tranistion duration-150": "relative"} `}>
            <div className="max-width-[1400px] w-[91%] mx-auto flex justify-between items-center py-6 ">
                <Link href="/">
                    <h1 className="font-bold text-green-400 text-3xl">Eliud</h1>
                </Link>

                <ul className="flex gap-10 max-md:hidden text-black dark:text-white">
                    {Navlinks.map((link) => {
                        return (
                            <Link
                                href={link.route}
                                key={link.id}
                                className={clsx(
                                    "hover:underline hover:text-green-500 transition duration-500",
                                    { "underline text-green-500": pathName === link.route }
                                )}
                            >
                                <li>{link.name}</li>
                            </Link>
                        );
                    })}

                </ul>
                <ThemeSwitch/>

                <div className="md:hidden block z-10 text-3xl text-black dark:text-white cursor-pointer transition duration-200" onClick={handleMobile}>
                    {openMobile ? <MdClose /> : <FiMenu />}
                </div>
                {openMobile && (
                    <ul className="md:hidden bg-green-500 absolute w-full h-screen top-0 left-0 px-4 py-6
                    text-center rounded-md flex flex-col justify-center items-center gap-3 shadow-md">
                        {Navlinks.map((link) => {
                            return(
                                <Link href={link.route} key={link.id}
                                className={clsx('text-white', {"text-black":pathName === link.name})}
                                >
                                <li className="py-6" onClick={handleMenuItemClick}>{link.name}</li>
                                </Link>
                            )
                        })}
                    </ul>


                )}
            </div>
        </nav>
    )
}

export default Navbar;