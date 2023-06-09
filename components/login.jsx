import Image from "next/image"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import axios from "axios"
import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { apiUrl } from "@/utils"

export default function Login() {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [errorMessage, setErrorMessage] = useState(false)
    const [message, setMessage] = useState(null)
    const router = useRouter()
    const getLogin = (username, password) => {
        axios
            .post(`${apiUrl}/auth/login`, {
                email: username,
                password: password,
            })
            .then((res) => {
                setErrorMessage(false)
                Cookies.set("authDans", res.data.token)
                router.push("/", {
                    shallow: true,
                })
            })
            .catch((error) => {
                setErrorMessage(true)
                setMessage("Periksa username dan password")
            })
    }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        getLogin(data.username, data.password)
    }
    useEffect(() => {
        const subscription = watch((value, { name, type }) => {})
        return () => subscription.unsubscribe()
    }, [watch])
    return (
        <div className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700 w-full">
            <div className="container h-full p-10">
                <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                    <div className="w-full">
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                            <div className="g-0 lg:flex lg:flex-wrap">
                                <div className="px-4 md:px-0 lg:w-6/12">
                                    <div className="md:mx-6 md:p-12">
                                        <div className="text-center">
                                            <Image
                                                className="mx-auto w-48"
                                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                alt="logo"
                                                width={200}
                                                height={100}
                                            />
                                            <h4 className="mt-1 mb-12 pb-1 text-xl font-semibold">
                                                Get Job With Dans Multi Pro
                                            </h4>
                                        </div>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <p className="mb-4">
                                                Please login to your account
                                            </p>
                                            <div
                                                className="relative mb-4"
                                                data-te-input-wrapper-init
                                            >
                                                <input
                                                    type="text"
                                                    className="peer block min-h-[auto] w-full rounded border border-solid bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Email"
                                                    {...register("username", {
                                                        required: true,
                                                    })}
                                                />
                                                <label
                                                    htmlFor="exampleFormControlInput1"
                                                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-blue-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                                >
                                                    Email
                                                </label>
                                            </div>
                                            <div
                                                className="relative mb-4"
                                                data-te-input-wrapper-init
                                            >
                                                <input
                                                    type="password"
                                                    className="peer block min-h-[auto] w-full rounded border border-solid bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="exampleFormControlInput11"
                                                    placeholder="Password"
                                                    {...register("password", {
                                                        required: true,
                                                    })}
                                                />
                                                <label
                                                    htmlFor="exampleFormControlInput11"
                                                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-blue-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                                >
                                                    Password
                                                </label>
                                            </div>
                                            {errorMessage && (
                                                <div className="text-red text-sm capitalize">
                                                    {message}
                                                </div>
                                            )}
                                            <div className="mb-12 pt-1 pb-1 text-center">
                                                <input
                                                    type="submit"
                                                    className="mb-3 inline-block w-full rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                    value="Login"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light"
                                                    style={{
                                                        background: "#2F61AF",
                                                    }}
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                                    style={{ background: "#2F61AF" }}
                                >
                                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                        <h4 className="mb-6 text-xl font-semibold">
                                            Get Your Jobs Here!
                                        </h4>
                                        <p className="text-sm">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
