import React, { Component } from 'react';
import Layout from "../../components/Layout";
import CustomModal from "../../components/customModal";
import InfoSurveillantA from "../../components/infoSurveillantA"
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery/dist/jquery.min.js';
// import $ from 'jquery';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import { place } from "../../scripts/form";
import $ from 'jquery';
import Link from "next/link"
import jsPDF from "jspdf";
import "jspdf-autotable";
import Chart from 'chart.js';


class Analystic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surveillants: this.props.survs
        }
    }

    componentDidMount() {
        // const ctx = document.getELementById("myCanvas");

        // console.log(ctx);

        $(document).ready(function() {
            let ctx = $("#myCanvas");

            let chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'black'],
                    datasets: [{
                        label: '# Analystic',
                        data: [12, 19, 3, 5, 2, 3, 6],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(0, 0, 0, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(0, 0, 0, 1)'
                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    scales: {
                        xAxes: [{
                            gridLines: {
                                offsetGridLines: true
                            }
                        }]
                    }
                }
            });
        });
    }

    handlePrint = () => {
        // ss
    }

    exportPDF = () => {
        const unit = "pt";
        const size = "A4";
        const orientation = "portrait";

        const marginLeft = 40;
        const title = "\t\t\t\tSURVEILLANCES UNIVERSITE YAOUNDE I";
        const doc = new jsPDF(orientation, unit, size);
        doc.setFontSize(15);
        const headers = [["Noms et Prénoms", "Matricule", "Phone", "Salle", "Qualité", "Cota Horaires"]];
        const data = this.state.surveillants.map(elt => [`${elt.first_name} ${elt.last_name}`, elt.genre]);

        const datas = this.state.surveillants.map(elt => [`${elt.first_name} ${elt.last_name}`, elt.matricule, elt.phone,
        elt.exam.present.map(salle => salle.code + " / "), elt.grade === true ? `Chef de Salle` : `Surveillant`, elt.exam.present.length * 2]);

        let content = {
            startY: 50,
            head: headers,
            body: datas,
            theme: 'grid'
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
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
                                    <button className="btn btn-secondary exportB" onClick={this.exportPDF}>Export as PDF</button>
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

                                    <canvas id="myCanvas" style={{ width: "100%", height: "200px" }}>mon canavas</canvas>

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
