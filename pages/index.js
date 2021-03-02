import Layout from "../components/Layout";
import React from "react"
import ReactDOM from "react-dom";
import Link from "next/link";
import axios from "axios";


export default class Index extends React.Component {

    render() {

        return (
            <Layout title="Home">
                You failed password
            </Layout>
        )
    }
}