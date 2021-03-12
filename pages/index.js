import Layout from "../components/Layout";
import React from "react"
import ReactDOM from "react-dom";
import Link from "next/link";
import axios from "axios";
import Homepage from './auth/test';
import Router from 'next/router';
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
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        Router.push("/auth/login");
      })
  }

  render() {
    return (
      <Layout title="Home" className="HomeIndex">
        Bienvenue dans l'application de gestion des surveillance de l'universite de Yaounde 1
      </Layout>
    )
  }
}
