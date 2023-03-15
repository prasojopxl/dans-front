import { Header } from "@/components"
import Head from "next/head"
import React from "react"

export default function Layout(props) {
    return (
        <>
            <Head>
                <title>
                    ATS Internet | Kontak person ade irma suryani untuk
                    pemasangan internet, wifi wireless, dan fiber
                </title>
            </Head>
            <Header />
            {props.children}
            <div className="bg-slate-100 p-5 text-center text-sm">
                &copy; {new Date().getFullYear()}
            </div>
        </>
    )
}
