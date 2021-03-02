import React, { Component } from 'react';
import Layout from "../../components/Layout";
import CustomModal from "../../components/customModal";
import InfoSurveillant from "../../components/infoSurveillant";
import axios from "axios";


class Surveillant extends Component {
    constructor(props) {
        super(props);

        this.state = {
            surveillants: this.props.survs
        }
    }

    handleDelete = (id) => {
        let surveillants = [...this.state.surveillants];

        let index = surveillants.findIndex(surv => surv.id === id);

        surveillants.splice(index, 1);

        this.setState({surveillants});
    }

    render() {
        return (
            <>
                <head>

                </head>
                <Layout title="Surveillant">


                    <div className="container-fluid">
                        <div className="mainCard">
                            <header className="row">
                                <div className="col-12 header-card">
                                    <span>SURVEILLANTS({ this.state.surveillants.length })</span>
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
                                                this.state.surveillants.map(surv => {
                                                    return (
                                                        <InfoSurveillant
                                                            dataSurveillant={surv}
                                                            key={surv.id}
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
    const survs = res.data;

    return {
        props: {
            survs
        }
    }
}

export default Surveillant;
