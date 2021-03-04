import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "../styles/style.css"
import "../styles/style1.css"
import "../styles/style2.css"
import axios from "axios";

axios.defaults.baseURL = "https://192.168.1.108:8000/api/"

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}