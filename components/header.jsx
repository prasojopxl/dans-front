import Image from "next/image"
import { HiMenuAlt3 } from "react-icons/hi"
import Link from "next/link"
import React, { useState } from "react"

export default function Header() {
    const [menu, setMenu] = useState(false)
    const changeMenu = () => {
        menu ? setMenu(false) : setMenu(true)
    }
    return (
        <>
            <div className="header absolute left-0 top-0 right-0">
                <div className="container mx-auto  flex justify-between items-center">
                    <Link href="/" className="flex items-center">
                        <div className="bg-white rounded-full overflow-hidden p-2 w-[100px] h-[100px] mr-[10px]">
                            JOBS
                        </div>
                    </Link>
                    <div>Logout</div>
                </div>
            </div>
        </>
    )
}
