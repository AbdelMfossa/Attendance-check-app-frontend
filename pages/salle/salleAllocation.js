import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import CustomModalSalle from "../../components/customModalSalle"
import $ from 'jquery';
import axios from "axios"
import InfoSurveillantSalle from "../../components/infoSurveillantSalle"
import { respons } from "../../scripts/form";


class Salle extends React.Component {
    state = {
        survs: this.props.survs,
        salle: this.props.salle
    }
    handleAlloc = () => {
        axios.put(`surveillance/supervisor/${state.id}`, state)

    }
    componentDidMount() {
        $(document).ready(function () {
            $('#datatable').DataTable({
                "searching": true,
                "paging": false,
                "info": false,
                "columnDefs": [
                    { orderable: false, targets: [1, 3] }
                ],
            });
        });
    }
    render() {
        return (
            <Layout title="Allocation des salles">
                <div className="container-fluid">
                    <div className="mainCard">
                        <header className="row">
                            <div className="col-12 header-card">
                                <span>ALLOCATION DES SALLES</span>
                                <CustomModalSalle />
                            </div>
                        </header>
                        <section className="row">
                            <div className="col-12 content-card">
                                <table id="datatable" className="table dt-responsive nowrap" style={{ borderCollapse: "collapse", borderSpacing: 0, width: "100%" }}>
                                    <thead>
                                        <tr>
                                            <th>Nom</th>
                                            <th>Phone</th>
                                            <th>Grade</th>
                                            <th>Salle</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            this.state.survs.map(surv => {
                                                return (
                                                    <InfoSurveillantSalle
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
        )
    }
}
export async function getStaticProps() {
    const resp = await axios.get("/surveillance/supervisor");
    const rep = await axios.get("/surveillance/room");
    const salle = rep.data.data;
    const survs = resp.data.data;
    return {
        props: {
            survs: survs,
            salle: salle
        }

    }
}
export default Salle;