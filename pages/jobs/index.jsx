import Layout from "@/layout"
import React, { useEffect, useState } from "react"
import Cookies from "js-cookie"
import axios from "axios"
import { apiUrl } from "@/utils"
import Link from "next/link"
import moment from "moment"

export default function jobs() {
    const [data, setData] = useState([])
    const [allData, setAllData] = useState([])
    const [jobsSearch, setJobSearch] = useState(false)
    const [locationSearch, setLocationSearch] = useState(false)
    const [typeSearch, setTypeSearch] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const token = Cookies.get("authDans")
    const getData = () => {
        let config = {
            headers: {
                Authorization: "Bearer " + token,
            },
        }
        axios
            .get(`${apiUrl}/jobs?limit=4&page=${currentPage}`, config)
            .then((res) => {
                setData(res.data.data)
                setAllData(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const getSearch = () => {
        let config = {
            headers: {
                Authorization: "Bearer " + token,
            },
        }
        axios
            .get(
                `${apiUrl}/jobs/search?${jobsSearch && "title=" + jobsSearch}&${
                    locationSearch && "location=" + locationSearch
                }&${typeSearch && "type=full time"}`,
                config
            )
            .then((res) => {
                setData(res.data.data)
                setAllData(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const nextPage = () => {
        currentPage == 2 ? setCurrentPage(2) : setCurrentPage(currentPage + 1)
        getData()
    }
    const prevPage = () => {
        currentPage == 1 ? setCurrentPage(1) : setCurrentPage(currentPage - 1)
        getData
    }
    useEffect(() => {
        getData()
    }, [currentPage])
    return (
        <Layout>
            <div className="py-12">
                <h1 className="text-center text-3xl mb-10">Jobs List</h1>
                <div className="bg-orange-50 flex p-5 justify-start items-center space-x-5">
                    <div>
                        <label className="block">Job</label>
                        <input
                            type="text"
                            className="p-2 w-full"
                            onChange={(e) => setJobSearch(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block">Location</label>
                        <input
                            type="text"
                            className="p-2 w-full"
                            onChange={(e) => setLocationSearch(e.target.value)}
                        />
                    </div>
                    <div className="flex">
                        <input
                            type="checkbox"
                            className="p-2 mr-2"
                            onChange={(e) =>
                                setTypeSearch(
                                    typeSearch ? setTypeSearch(false) : true
                                )
                            }
                        />
                        <label className="block">Fulltime</label>
                    </div>
                    <div>
                        <div
                            className="bg-blue text-white cursor-pointer p-2"
                            onClick={getSearch}
                        >
                            Search
                        </div>
                    </div>
                </div>

                {data.map((item, i) => {
                    return (
                        <div
                            key={item.id}
                            className="bg-slate-100 rounded-md p-5 my-2"
                        >
                            <Link href={`/jobs/${item.id}`}>
                                <h4 className="text-lg text-black">
                                    {item.title}
                                </h4>
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
                            <div className="block capitalize text-sm opacity-50">
                                {item.location} -{" "}
                                {moment(data?.updatedAt).fromNow()}
                            </div>
                        </div>
                    )
                })}
                <div className="flex justify-center space-x-2 items-center">
                    <div
                        className="bg-blue text-white py-2 px-5 cursor-pointer"
                        onClick={prevPage}
                    >
                        Back
                    </div>
                    <div className="mx-1">Page:{allData.page}</div>
                    <div
                        className="bg-blue text-white py-2 px-5 cursor-pointer"
                        onClick={nextPage}
                    >
                        Next
                    </div>
                </div>
            </div>
        </Layout>
    )
}
