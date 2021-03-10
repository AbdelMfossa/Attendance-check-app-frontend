import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Image from 'next/image';
import { form } from '../../scripts/form';
import axios from "axios";
import {useCookies} from  "react-cookie"
import Router from 'next/router';
<<<<<<< HEAD

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    form();
  });

  const onSubmit = async event => {
    event.preventDefault();
    console.log({email, password});
    try {
        await axios.post('users/signin',{email ,password})
        .then(
            async (res)=>{
                localStorage.setItem('jwt', Object.values(res.data))
                console.log(localStorage.getItem('jwt'));

                Router.push("/");
            }

        )
    } catch (err) {
        console.log(err)
    }

  };



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
              <form className="myForm text-center" onSubmit={onSubmit} id="form">
                <header>
                  <h2>Login</h2>
                </header>

                <div className="FormContent">
                  <div className="md-form mb-0">
                    <input type="text"  name="email"  onChange={e=>setEmail(e.target.value)} className="form-control js-input" id="1"  />
                    <label for="email" className="form-label" id="label-1">Email</label>
                  </div>
                  <div className="md-form mb-0">
                    <input type="password"  name="password" onChange={e=>setPassword(e.target.value)} className="form-control js-input" id="2" />
                    <label for="password" className="form-label" id="label-2">Password</label>
                  </div>
                  <div className="md-form mb-0 mt-3 checkbox-input">
                    <label>
                      <input id="check_1" name="check_1" type="checkbox" />
                      <small> Garder ma session ouverte</small>
                      <div className="invalid-feedback"></div>
                    </label>
=======
import handleSubmit from "../../scripts/login";
import Head from "next/head";

class Login extends React.Component {
  componentDidMount() {
    form();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.email,
      password: this.password
    }
    axios.post('/users/signin', data)
      .then(res => console.log(res))
      .catch(err => console.log(err)
      )
  }

  render() {
    return (
      <>
        <Head>
          <meta charset='utf-8' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <title>Login</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>

        <div className="container">
          <div className="row myCard">
            <div className="col-md-5 ">
              <section className="rightSection">
                <div className="box">
                  <div>
                    <Image src="/static/img.png" className="img-logo" height={85} width={85} alt="logo du login" />
>>>>>>> 54be260d499873ca4c4b11e86f0acb2c29292c23
                  </div>
                </div>
<<<<<<< HEAD

                <div className="FormFooter">
                  <div className="md-form mb-0">
                    <a href="#" className="passForgot">Mot de passe oublié ?</a>
=======
              </section>
            </div>
            <div className="col-md">
              <section className="leftSection">
                <form className="myForm text-center" id="form" onSubmit={this.handleSubmit}>
                  <header>
                    <h2>Login</h2>
                  </header>

                  <div className="FormContent">
                    <div className="md-form mb-0">
                      <input type="text" name="email" className="form-control js-input" id="1" onChange={e => this.email = e.target.value} />
                      <label htmlFor="email" className="form-label" id="label-1">Email</label>
                    </div>
                    <div className="md-form mb-0">
                      <input type="password" name="password" className="form-control js-input" id="2" onChange={e => this.password = e.target.value} />
                      <label htmlFor="password" className="form-label" id="label-2">Password</label>
                    </div>
                    <div className="md-form mb-0 mt-3 checkbox-input">
                      <label>
                        <input id="check_1" name="check_1" type="checkbox" />
                        <small> Garder ma session ouverte</small>
                        <div className="invalid-feedback"></div>
                      </label>
                    </div>
>>>>>>> 54be260d499873ca4c4b11e86f0acb2c29292c23
                  </div>
                  <div className="md-form mb-0">
                    <button type="submit" className="butt">Login Now &#x27F6;</button>
                  </div>
<<<<<<< HEAD
                </div>
              </form>
            </section>
=======
                </form>

              </section>
            </div>
>>>>>>> 54be260d499873ca4c4b11e86f0acb2c29292c23
          </div>
        </div>
      </div>
    </>

  )


}

