import Layout from "../components/Layout";
import React from "react"
import ReactDOM from "react-dom";
import Link from "next/link";
import axios from "axios";

export default class Index extends React.Component {
  constructor() {
    super();

    this.state = {
      email: ""
    };
  }
  componentDidMount() {
    let email = document.cookie.slice(6);

    this.setState({ email });
  }

  render() {
    let user = {};
    return (
      <Layout title="Home">
        { "Hello " + this.state.email}
      </Layout>
    )
  }
}
