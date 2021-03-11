import Layout from "../components/Layout";
import React from "react"
import ReactDOM from "react-dom";
import Link from "next/link";
import axios from "axios";
import Homepage from './auth/test';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 7a784e9d8bb21e68a8e8411fbf130c4360f923e3
=======
import Router from 'next/router';
>>>>>>> 938bf71ae3c2feaee696f98fd8c90deb46ca3d1b
>>>>>>> feature

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      jwt: "",
    };
  }
  componentDidMount() {
    let jwt = localStorage.getItem('jwt');

    if (jwt !== null) {
      this.setState({ jwt });
    }

    axios.get("users/currentuser")
<<<<<<< HEAD
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      })
=======
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      Router.push("auth/login");
    })
>>>>>>> feature
  }

  render() {
    return (
      <Layout title="Home" className="HomeIndex">
        Bienvenue dans l'application de gestion des surveillance de l'universite de Yaounde 1
      </Layout>
    )
  }
}
