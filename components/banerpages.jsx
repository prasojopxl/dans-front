import React from "react"

export default function Banerpages(props) {
    return (
        <div className="bg-orange-200">
            <div className="container">
                <div className="content flex justify-center min-h-[300px] items-center sm:flex-row flex-col">
                    <div className="pt-[90px] font-main text-4xl">
                        <h1>{props.title}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
