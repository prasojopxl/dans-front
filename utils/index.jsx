export const apiUrl = process.env.API_URL
export const test = process.env.TEST
import { getCookie } from "cookies-next"
import axios from "axios"

const token = getCookie("authDans")
