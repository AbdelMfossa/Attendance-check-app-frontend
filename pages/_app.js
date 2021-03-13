import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "../styles/style.css"
import "../styles/style1.css"
import "../styles/style2.css"
import {CookiesProvider} from "react-cookie"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = "https://attendceappuy1.herokuapp.com/api/"
// axios.defaults.baseURL = "http://192.168.8.101:8000/api/"
axios.defaults.withCredentials = true;

export default function MyApp({ Component, pageProps }) {
  const notify = () => toast("Wow so easy !");

    return (
      <>
        <Component {...pageProps} />
        <CookiesProvider/>
        <ToastContainer />
      </>
    )
}
