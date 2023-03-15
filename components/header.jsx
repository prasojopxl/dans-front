import Link from "next/link"
import React from "react"
import Cookies from "js-cookie"
import { useRouter } from "next/router"

export default function Header() {
    const router = useRouter()
    const Logout = () => {
        router.push("/")
        Cookies.remove("authDans")
        router.reload(window.location.pathname)
    }
    return (
        <>
            <div className="header absolute left-0 top-2 right-0">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center">
                        <div className="bg-white rounded-full overflow-hidden p-2 w-[50px] h-[50px] mr-[10px] flex justify-center items-center font-bold text-[12px]">
                            DANS
                        </div>
                    </Link>
                    <div className="cursor-pointer text-white" onClick={Logout}>
                        Logout
                    </div>
                </div>
            </div>
        </>
    )
}
