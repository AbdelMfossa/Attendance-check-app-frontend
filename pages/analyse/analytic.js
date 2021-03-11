import React, { Component } from 'react';
import Layout from "../../components/Layout";
import CustomModal from "../../components/customModal";
import InfoSurveillantA from "../../components/infoSurveillantA"
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import { place } from "../../scripts/form";
import $ from 'jquery';
import Link from "next/link"


class Analystic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surveillants: this.props.survs
        }
    }
    handlePrint = () => {
        ss
    }

    render() {
        return (
            <>
                <Layout title="Analystic">
                    <div className="container-fluid">
                        <div className="mainCard">
                            <header className="row">
                                <div className="col-12 header-card">
                                    <span>SURVEILLANCES UNIVERSITE YAOUNDE I</span>
                                </div>
                            </header>
                            <section className="row">
                                <div className="col-12 content-card">
                                    <button className="btn btn-secondary exportB" onClick={this.handlePrint}>Export as PDF</button>
                                    <table id="datatable" className="table dt-responsive nowrap" style={{ borderCollapse: "collapse", borderSpacing: 0, width: "100%" }}>
                                        <thead>
                                            <tr>
                                                <th>Nom</th>
                                                <th>Matricule</th>
                                                <th>Phone</th>
                                                <th>Salle</th>
                                                <th>Qualité</th>
                                                <th>Cota Horaire</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                this.state.surveillants.map(surv => {
                                                    return (
                                                        <InfoSurveillantA
                                                            dataSurveillant={surv}
                                                            key={surv.id}
                                                        />
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>

                                </div>
                            </section>
                        </div>
                    </div>
                </Layout>
            </>
        )
    }
}
export async function getStaticProps() {
    try {
        const resp = await axios.get("surveillance/supervisor");
        const survs = resp.data.data;
        return {
            props: {
                survs
            }
        }
    } catch (err) {
        console.log(err)
        return {
            props: {
                survs: []
            }
        }
    }


}
export default Analystic;
