import React from 'react';
import Layout from "../../components/Layout";
import ModalC from "../../components/ModalC"
import InfoControleur from "../../components/infoControleur"
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import jsPDF from "jspdf";
import "jspdf-autotable";


class Controleur extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            controleurs: this.props.controleurs
        }
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
    exportPDF = () => {
        const unit = "pt";
        const size = "A4";
        const orientation = "portrait";

        const marginLeft = 40;
        const title = "\t\t\tLISTE DES CONTROLEURS EXAMEN";
        const doc = new jsPDF(orientation, unit, size);
        doc.setFontSize(15);
        const headers = [["Noms et Prénoms", "Matricule", "Phone", "Email"]];
        const datas = this.state.controleurs.map(elt => [`${elt.first_name} ${elt.last_name} `, elt.matricule, elt.phone, elt.email]);

        let content = {
            startY: 50,
            head: headers,
            body: datas,
            theme: 'grid'
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("ListeControleur.pdf")
    }

    handleDeleteControleur = (id) => {
        let controleurs = [...this.state.controleurs];
        let index = controleurs.findIndex(ctr => ctr.id === id);

        controleurs.splice(index, 1);

        this.setState({ controleurs });
    }

    handleAddControleur = (controleur) => {
        let controleurs = [...this.state.controleurs];
        controleurs.push(controleur);

        this.setState({ controleurs });
    }

    render() {
        let a = 0;
        this.state.controleurs.map(
            explore => {
                if (explore.role !== null && explore.role.id == 2) {
                    a += 1;
                }
            })
        return (
            <>
                <Layout title="Controleur">
                    <div className="container-fluid">
                        <div className="mainCard">
                            <header className="row">
                                <div className="col-12 header-card">
                                    <span>CONTROLEURS({a})</span>
                                    <ModalC title="Controleur" onAddControleur={this.handleAddControleur} />
                                </div>
                            </header>
                            <section className="row">
                                <div className="col-12 content-card">
                                    <button className="btn btn-secondary exportB" onClick={this.exportPDF}>Export as PDF</button>
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
                                                            onDelete={this.handleDeleteControleur}
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
        const res = await axios.get("users/users");
        const controleurs = res.data;
        return { props: { controleurs: controleurs } }
    }
    catch (err) {
        console.log("Echec du chargement de la liste des controleurs ");
        return { props: { controleurs: [] } }
    }
}

export default Controleur;
