import Layout from "@/layout"
import React, { useEffect, useState } from "react"
import Cookies from "js-cookie"
import axios from "axios"
import { apiUrl } from "@/utils"
import Link from "next/link"

export default function jobs() {
    const [data, setData] = useState([])
    const token = Cookies.get("authDans")
    const getData = () => {
        let config = {
            headers: {
                Authorization: "Bearer " + token,
            },
        }
        axios
            .get(`${apiUrl}/jobs`, config)
            .then((res) => {
                setData(res.data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <Layout>
            <div className="py-12">
                <h1 className="text-center text-3xl mb-10">Jobs List</h1>
                {data.map((item, i) => {
                    return (
                        <div
                            key={item.id}
                            className="bg-slate-100 rounded-md p-5 my-2"
                        >
                            <Link href={`/jobs/${item.id}`}>
                                <h4 className="text-lg">{item.title}</h4>
                            </Link>
                            <div className="block">
                                <Link
                                    href={`${item.company_url}`}
                                    target="_blank"
                                    className="text-blue"
                                >
                                    {item.company}
                                </Link>{" "}
                                -{" "}
                                <span className="opacity-50 italic">
                                    {item.type}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}
