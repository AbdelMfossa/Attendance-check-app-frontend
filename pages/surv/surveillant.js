import Layout from "../../components/Layout";
import CustomModal from "../../components/customModal";
import InfoSurveillant from "../../components/infoSurveillant"
import ReactDOM from "react-dom";
import React from "react";

export default class Surveillant extends React.Component {

    render() {
        const surveillants = [
            {
                nom: "Abdel Aziz Mfossa",
                matricule: "56M0345",
                phone: 656553898,
                qualite: "Surveillant"
            },
            {
                nom: "Luc Panta Perin",
                matricule: "56M0345",
                phone: 656553898,
                qualite: "Surveillant"
            },
            {
                nom: "Delano Roosvelt",
                matricule: "56M0345",
                phone: 656553898,
                qualite: "Surveillant"
            },
            {
                nom: "Kenne Roosvelt",
                matricule: "56M0345",
                phone: 656553898,
                qualite: "Surveillant"
            },
            {
                nom: "Dilane Kombou",
                matricule: "56M0345",
                phone: 656553898,
                qualite: "Surveillant"
            },
            {
                nom: "Joan Loic",
                matricule: "56M0345",
                phone: 656553898,
                qualite: "Surveillant"
            }
        ];

        return (
            <>
                <head>

                </head>
                <Layout title="Surveillant">


                    <div className="container-fluid">
                        <div className="mainCard">
                            <header className="row">
                                <div className="col-12 header-card">
                                    <span>SURVEILLANTS({surveillants.length})</span>
                                    <CustomModal title="Surveillant" />

                                </div>
                            </header>
                            <section className="row">
                                <div className="col-12 middle-card">
                                    <input type="text" placeholder="Search for Supervisor" />
                                    <i className="bi bi-search"></i>
                                </div>
                            </section>
                            <section className="row">
                                <div className="col-12 content-card">

                                    <table id="datatable" className="table dt-responsive nowrap" style={{ borderCollapse: "collapse", borderSpacing: 0, width: "100%" }}>
                                        <thead>
                                            <tr>
                                                <th>Nom</th>
                                                <th>Matricule</th>
                                                <th>Phone</th>
                                                <th>Salle</th>
                                                <th>Qualite</th>
                                                <th>Horaire</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                surveillants.map(surv => (
                                                    <InfoSurveillant dataSurveillant={surv} />
                                                ))
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
