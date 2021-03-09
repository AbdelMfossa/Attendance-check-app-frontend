import React, { Component } from 'react';
import Layout from "../../components/Layout";
import CustomModal from "../../components/customModal";
import InfoSurveillantPerso from "../../components/infroSurveillantPerso";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import { place } from "../../scripts/form";
import $ from 'jquery';

class Surveillant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surveillants: this.props.survs
        }
    }
    render() {
        return (
            <>
                <Layout title="Info Surveillant">
                    <div className="container-fluid">
                        <div className="mainCard">
                            <header className="row">
                                <div className="col-12 header-card">
                                    <span>INFORMATIONS</span>
                                </div>
                            </header>
                            <section className="row">
                                <div className="col-12 content-card">
                                    <table id="datatable" className="table dt-responsive nowrap" style={{ borderCollapse: "collapse", borderSpacing: 0, width: "100%" }}>
                                        <tbody>
                                            {
                                                <InfoSurveillantPerso
                                                    dataSurveillant={this.state.surveillants}
                                                    key={this.state.surveillants.id}
                                                />
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
    const resp = await axios.get("surveillance/supervisor/3");
    const survs = resp.data.data;
    return {
        props: {
            survs
        }
    }
}
export default Surveillant;
