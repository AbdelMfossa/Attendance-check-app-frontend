import Layout from "../components/Layout";
import React from "react"
import ReactDOM from "react-dom";
import Link from "next/link";
import axios from "axios";
<<<<<<< HEAD
=======
import Homepage from './auth/test';
>>>>>>> 7a784e9d8bb21e68a8e8411fbf130c4360f923e3

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
      console.error(err);
    })
  }

  render() {
<<<<<<< HEAD
    let user = {};
=======
>>>>>>> 7a784e9d8bb21e68a8e8411fbf130c4360f923e3
    return (
      <Layout title="Home">
        { "Hello " + this.state.jwt }
      </Layout>
    )
  }
}
