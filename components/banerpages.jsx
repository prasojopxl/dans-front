import React from "react"

export default function Banerpages(props) {
    return (
        <div className="bg-blue">
            <div className="container">
                <div className="content flex justify-center min-h-[300px] items-center sm:flex-row flex-col">
                    <div className="pt-[90px] font-main text-4xl text-white">
                        <h1>{props.title}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
