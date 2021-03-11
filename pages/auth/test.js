import axios from "axios"
// import { cookie, header } from "express-validator"
import { param } from "jquery"
import { useEffect } from "react"
import { parseCookie } from "../../api/client-request"



export default function Homepage(){
    //axios.defaults.headers.get['Accept'] = 'application/json'
     useEffect(async ()=>{
        try {

          const head = {
            'Content-Type': 'application/json',
            'Authorization': 'cookie: '+localStorage.getItem('jwt')
          }
      //axios.defaults.headers.common['Authorization'] = 'cookie: '+localStorage.getItem('jwt');
      // axios.defaults.withCredentials = true
        await axios.get('users/currentuser')
        .then((res)=>{
                console.log(res)
              });
            console.log(res)

        } catch (err) {
            console.log(err)
        }
     })


     return <>
      <h1> jidjd</h1>
     </>
}
