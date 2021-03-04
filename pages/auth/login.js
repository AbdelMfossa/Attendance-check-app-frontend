import React, { Component } from "react";
import ReactDOM from "react-dom";
import Image from 'next/image';
import { form } from '../../scripts/form';
import axios from "axios";
import Router from 'next/router';
import handleSubmit from "../../scripts/login";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      session: false
    }
  }
  componentDidMount() {
    form();
    const formular = document.getElementById("form");
    formular.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = e.target[0].value;
      const password = e.target[1].value;
      const session = e.target[2].checked;

      handleSubmit({ email, password, session });
    });
  }

  handleChange = (event) => {
    const id = event.currentTarget.id;
    const value = event.currentTarget.value;

    // on verifie si le l'evenement vient du champ email
    if (id === "1") {
      this.setState({ email: value });
    } else if (id === "2") {
      this.setState({ password: value });
    }
  }

  render() {

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
                <form className="myForm text-center" id="form">
                  <header>
                    <h2>Login</h2>
                  </header>

                  <div className="FormContent">
                    <div className="md-form mb-0">
                      <input type="text" value={this.state.email} name="email" className="form-control js-input" id="1" onChange={this.handleChange} />
                      <label for="email" className="form-label" id="label-1">Email</label>
                    </div>
                    <div className="md-form mb-0">
                      <input type="password" value={this.state.password} name="password" className="form-control js-input" id="2" onChange={this.handleChange} />
                      <label for="password" className="form-label" id="label-2">Password</label>
                    </div>
                    <div className="md-form mb-0 mt-3 checkbox-input">
                      <label>
                        <input id="check_1" name="check_1" type="checkbox" />
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
                      <button type="submit" className="butt">Login Now &#x27F6;</button>
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
}

export default Login;
