import React from 'react';
import Layout from "../../components/Layout";
import ModalC from "../../components/ModalC"
import InfoControleur from "../../components/infoControleur";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import { place } from "../../scripts/form";
import $ from 'jquery';


class Controleur extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            controleurs: this.props.controleurs
        }
    }

    handleDelete = (id) => {
        axios.delete(`users/users/${id}`)
        this.setState({ controleurs: this.state.controleurs })
    }
    componentDidMount() {
        $(document).ready(function () {
            $('#datatable').DataTable({
                "searching": true,
                "paging": false,
                "info": false,
                "columnDefs": [
                    { orderable: false, targets: [1, 2, 3, 4] }
                ],
            });
        });
    }

    render() {
        return (
            <>
                <Layout title="Controleur">
                    <div className="container-fluid">
                        <div className="mainCard">
                            <header className="row">
                                <div className="col-12 header-card">
                                    <span>CONTROLEURS({this.state.controleurs.length})</span>
                                    <ModalC title="Controleur" />
                                </div>
                            </header>
                            <section className="row">
                                <div className="col-12 content-card">
                                    <table id="datatable" className="table-responsive-sm nowrap " style={{ borderCollapse: "collapse", borderSpacing: 0, width: "100%" }}>
                                        <thead>
                                            <tr>
                                                <th>Nom</th>
                                                <th >Matricule</th>
                                                <th >Phone</th>
                                                <th >Email</th>
                                                <th >Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.controleurs.map(contr => {
                                                    return (
                                                        <InfoControleur
                                                            dataSurveillant={contr}
                                                            key={contr.id}
                                                            onDelete={this.handleDelete}
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
    const res = await axios.get("users/users");
    const controleurs = res.data;
    return {
        props: {
            controleurs: controleurs
        }
    }
}

export default Controleur;
