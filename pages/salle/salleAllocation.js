import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import CustomModalSalle from "../../components/customModalSalle"
import CustomModalExam from "../../components/CustomModalExam"
import $ from 'jquery';
import axios from "axios"
import InfoSurveillantSalle from "../../components/infoSurveillantSalle"
import { respons } from "../../scripts/form";


class Salle extends React.Component {
    state = {
        survs: this.props.survs,
        salle: this.props.salle,
        matiere: this.props.matiere,
        horaire: this.props.horaire,
        semestre: this.props.semestre,
        ue: this.props.ue
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
                                <CustomModalExam
                                    matiere={this.state.matiere}
                                    horaire={this.state.horaire}
                                    semestre={this.state.semestre}
                                    ue={this.state.ue}
                                />
                            </div>
                        </header>
                        <section className="row">
                            <div className="col-12 content-card">
                                <table id="datatable" className="table dt-responsive nowrap" style={{ borderCollapse: "collapse", borderSpacing: 0, width: "100%" }}>
                                    <thead>
                                        <tr>
                                            <th>Nom</th>
                                            <th>Grade</th>
                                            <th>Examen</th>
                                            <th>Salle</th>
                                            <th>Valider</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            this.state.survs.map(surv => {
                                                return (
                                                    <InfoSurveillantSalle
                                                        dataSurveillant={surv}
                                                        salle={this.state.salle}
                                                        examen={this.state.examen}
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
export async function getServerSideProps() {
    try {
        const rep1 = await axios.get("surveillance/supervisor");
        const rep2 = await axios.get("surveillance/room");
        const rep3 = await axios.get("surveillance/matiere");
        const rep4 = await axios.get("surveillance/horaire");
        const rep5 = await axios.get("surveillance/semestre");
        const rep6 = await axios.get("surveillance/ue");
        const rep7 = await axios.get("surveillance/examen")

        const survs = rep1.data.data;
        const salle = rep2.data.data;
        const matiere = rep3.data.data;
        const horaire = rep4.data.data;
        const semestre = rep5.data.data;
        const ue = rep6.data.data;
        const examen = rep7.data.data;


        return {
            props: {
                survs: survs,
                salle: salle,
                matiere: matiere,
                horaire: horaire,
                semestre: semestre,
                ue: ue,
                examen: examen
            }
        }
    } catch (err) {
        return { props: { survs: [], salle: [], matiere: [], horaire: [], semestre: [], ue: [] } }
    }
}
export default Salle;