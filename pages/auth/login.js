import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Image from 'next/image';
import { form } from '../../scripts/form';



export default function Login() {

  useEffect(() => {
    form();
  });

  const [email, setEmail]=useState('')
  const[password ,setPassword]=useState('');

 const onSubmit=async(event)=>{
   event.preventDefault()
   try {
    const {response}= await axios.post('http://localhost:8000/',{
      email , password
    });
   console.log(response.data)
     
   } catch (err) {
      console.log(err)
   }

 }

  return (
    <>
      <head>
        <meta charset='utf-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <title>Login</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>

      <div className="container">
        <div className="row myCard">
          <div className="col-md-5 ">
            <section className="rightSection">
              <div className="box">
                <div>
                  <Image src="/static/img.png" className="img-logo" height={85} width={85} alt="logo du login" />
                </div>
                <p>Page de connexion au systeme</p>
              </div>
            </section>
          </div>
          <div className="col-md">
            <section className="leftSection">
              <form  onSubmit={onSubmit} className="myForm text-center">
                <header>
                  <h2>Login</h2>
                </header>

                <div className="FormContent">
                  <div className="md-form mb-0">
                    <input type="text" name="email" onChange={e=>setEmail(e.target.name)}  className="form-control js-input" id="1" />
                    <label for="username" className="form-label" id="label-1">Email</label>
                  </div>
                  <div className="md-form mb-0">
                    <input type="password"  onChange={e=>setPassword (e.target.name)} name="password" className="form-control js-input" id="2" />
                    <label for="password" className="form-label" id="label-2">Password</label>
                  </div>
                  <div className="md-form mb-0 mt-3 checkbox-input">
                    <label>
                      <input id="check_1" name="check_1" type="checkbox" required />
                      <small> Garder ma session ouverte</small>
                      <div className="invalid-feedback"></div>
                    </label>
                  </div>
                </div>
                <div className="FormFooter">
                  <div className="md-form mb-0">
                    <a href="#" className="passForgot">Mot de passe oublié ?</a>
                  </div>
                  <div className="md-form mb-0">
                    <input type="submit" className="butt" value="Login Now &#x27F6;" />
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
