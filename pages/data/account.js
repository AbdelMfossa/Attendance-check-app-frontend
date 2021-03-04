import Layout from "../../components/Layout";
import React from "react"
import ReactDOM from "react-dom";
import Link from "next/link";
import axios from "axios";


export default class Account extends React.Component {

    render() {
        return (
            <Layout title="Account" >
                <div className="loadData">
                    Chargement de nouveaux surveillant
                </div>

            </Layout>
        )
    }
}