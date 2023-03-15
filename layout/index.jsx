import { Banerpages, Header } from "@/components"
import Head from "next/head"
import React from "react"

export default function Layout(props) {
    return (
        <>
            <Head>
                <title>DANS Multi Pro | Jobs</title>
            </Head>
            <Header />
            <Banerpages title="Get Your Dream Jobs" />
            <div className="container">{props.children}</div>
            <div className="bg-slate-100 p-5 text-center text-sm">
                &copy; {new Date().getFullYear()}
            </div>
        </>
    )
}
