import { NextResponse } from "next/server"

export function middleware(request) {
    // console.log("MID")

    const cookie = request.cookies.get("authDans")
        ? request.cookies.get("authDans")
        : false

    // redirect page
    // if (request.nextUrl.pathname.startsWith("/")) {
    //     return cookie
    //         ? NextResponse.redirect(new URL("/dashboard", request.url))
    //         : NextResponse.next()
    // }

    if (request.nextUrl.pathname === "/") {
        return cookie
            ? NextResponse.redirect(new URL("/jobs", request.url))
            : NextResponse.next("/")
    }

    if (request.nextUrl.pathname.startsWith("/jobs")) {
        return cookie
            ? NextResponse.next("/jobs")
            : NextResponse.redirect(new URL("/", request.url))
    }


    return NextResponse.next()
}
