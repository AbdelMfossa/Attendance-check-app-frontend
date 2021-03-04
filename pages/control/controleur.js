import React from 'react';
import Layout from "../../components/Layout";
import CustomModal from "../../components/customModal";
import InfoSurveillant from "../../components/infoSurveillant";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import { search } from "../../scripts/form";
import $ from 'jquery';


class Controleur extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            controleurs: this.props.controleurs
        }
    }

    handleDelete = (id) => {
        let controleurs = [...this.state.controleurs];

        let index = controleurs.findIndex(surv => surv.id === id);

        controleurs.splice(index, 1);

        this.setState({ controleurs });
    }
    componentDidMount() {
        $(document).ready(function () {
            var table = $('#datatable').DataTable({
                "searching": true,
                "paging": false,
                "info": false,
                "columnDefs": [
                    { orderable: false, targets: [1, 2, 3, 4, 6] }
                ],
            });
        });
    }

    render() {
        return (
            <>
                <head>

                </head>
                <Layout title="Controleur">
                    <div className="container-fluid">
                        <div className="mainCard">
                            <header className="row">
                                <div className="col-12 header-card">
                                    <span>CONTROLEURS({this.state.controleurs.length})</span>
                                    <CustomModal title="Controleur" />

                                </div>
                            </header>
                            <section className="row">
                                {/* <div className="col-12 middle-card">
                                    <input type="text" id="myInputTextField" placeholder="Search for controler" />
                                    <i className="bi bi-search"></i>
                                </div> */}
                            </section>
                            <section className="row">
                                <div className="col-12 content-card">

                                    <table id="datatable" className="table dt-responsive nowrap " style={{ borderCollapse: "collapse", borderSpacing: 0, width: "100%" }}>

                                        <thead>
                                            <tr>
                                                <th>Nom</th>
                                                <th>Matricule</th>
                                                <th >Phone</th>
                                                <th >Salle</th>
                                                <th >Qualite</th>
                                                <th>Horaire</th>
                                                <th >Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                this.state.controleurs.map(contr => {
                                                    return (
                                                        <InfoSurveillant
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
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const controleurs = res.data;

    return {
        props: {
            controleurs
        }
    }
}

export default Controleur;
