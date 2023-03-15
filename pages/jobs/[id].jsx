import Layout from "@/layout"
import { apiUrl } from "@/utils"
import axios from "axios"
import Cookies from "js-cookie"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import ReactHtmlParser, {
    processNodes,
    convertNodeToElement,
    htmlparser2,
} from "react-html-parser"
import moment from "moment"

export default function Detail(props) {
    const router = useRouter()
    const token = Cookies.get("authDans")
    const [data, setData] = useState()
    const getData = () => {
        let config = {
            headers: {
                Authorization: "Bearer " + token,
            },
        }
        axios
            .get(`${apiUrl}/jobs/${router.query.id}`, config)
            .then((res) => {
                setData(res.data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        getData()
    }, [router.isReady])

    return (
        <Layout>
            <div className="bg-slate-50 rounded-lg p-7 my-10">
                <Link href="/jobs">Back</Link>
                <h4 className="text-sm opacity-50">{data?.type}</h4>
                <h3 className="text-4xl">{data?.title}</h3>
                <hr />
                <div className="bg-slate-200 p-5 mt-[20px]">
                    <div className="block">Location: {data?.location}</div>
                    <div className="block">
                        Updated:{" "}
                        {moment(data?.updatedAt).format("MMMM Do YYYY")}
                    </div>
                </div>
                <div className="mt-5 flex flex-wrap mx-[-15px]">
                    <div className="flex-[70%] max-w-[70%] w-full p-[15px]">
                        {ReactHtmlParser(data?.description)}
                    </div>
                    <div className="flex-[30%] max-w-[30%] w-full  p-[15px]">
                        <div className="bg-slate-200 p-5 rounded-lg">
                            <img
                                src={`${data?.company_logo}`}
                                alt={`${data?.company}`}
                            />
                            <Link
                                href={`${data?.company_url}`}
                                target="_blank"
                                className="text-xs underline"
                            >
                                {data?.company_url}
                            </Link>
                        </div>
                        <div className="bg-orange-100 p-5 rounded-lg mt-5">
                            <h4>How to Apply</h4>
                            {ReactHtmlParser(data?.how_to_apply)}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
