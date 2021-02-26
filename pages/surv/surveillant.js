import Layout from "../../components/Layout";



export default function Surveillant() {
    return (
        <>
            <head>

            </head>
            <Layout title="Surveillant">


                <div class="container-fluid">
                    <div class="mainCard">
                        <header class="row">
                            <div class="col-12 header-card">
                                <span>SURVEILLANTS(8)</span>
                                <button class="btn btn-dark text-light">NOUVEAU</button>
                            </div>
                        </header>
                        <section class="row">
                            <div class="col-12 middle-card">
                                <input type="text" placeholder="Search for Supervisor" />
                                <i class="bi bi-search"></i>
                            </div>
                        </section>
                        <section class="row">
                            <div class="col-12 content-card">

                                <table id="datatable" class="table dt-responsive nowrap" style={{borderCollapse: "collapse", borderSpacing: 0, width: "100%"}}>

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
                                        <tr>
                                            <td>Abdel Aziz Mfossa</td>
                                            <td>56M0345</td>
                                            <td>656553898</td>
                                            <td>S005</td>
                                            <td>Surveillant</td>
                                            <td>5</td>
                                            <td>Afficher</td>
                                        </tr>
                                        <tr>
                                            <td>Luc Perin Panta</td>
                                            <td>16Y4983</td>
                                            <td>679043452</td>
                                            <td>NB3</td>
                                            <td>Surveillant</td>
                                            <td>3</td>
                                            <td>Afficher</td>
                                        </tr>
                                        <tr>
                                            <td>Delano Roosvelt</td>
                                            <td>19M3332</td>
                                            <td>689365898</td>
                                            <td>NB4</td>
                                            <td>Surveillant</td>
                                            <td>5</td>
                                            <td>Afficher</td>
                                        </tr>
                                        <tr>
                                            <td>Dilane Kombou</td>
                                            <td>99M0345</td>
                                            <td>659553898</td>
                                            <td>A250</td>
                                            <td>Surveillant</td>
                                            <td>1</td>
                                            <td>Afficher</td>
                                        </tr>
                                        <tr>
                                            <td>Joan Loic</td>
                                            <td>98M0345</td>
                                            <td>664553898</td>
                                            <td>NB1</td>
                                            <td>Surveillant</td>
                                            <td>5</td>
                                            <td>Afficher</td>
                                        </tr>
                                        <tr>
                                            <td>Maurice Joel</td>
                                            <td>62M0345</td>
                                            <td>684553898</td>
                                            <td>A350</td>
                                            <td>Surveillant</td>
                                            <td>5</td>
                                            <td>Afficher</td>
                                        </tr>
                                        <tr>
                                            <td>Roosvelt Kenne</td>
                                            <td>89M0345</td>
                                            <td>654553898</td>
                                            <td>A350</td>
                                            <td>Surveillant</td>
                                            <td>5</td>
                                            <td>Afficher</td>
                                        </tr>
                                        <tr>
                                            <td>Ivan Sandez</td>
                                            <td>99M0345</td>
                                            <td>674553898</td>
                                            <td>A250</td>
                                            <td>Surveillant</td>
                                            <td>5</td>
                                            <td>Afficher</td>
                                        </tr>

                                        <tr>
                                            <td>Ivan Sandez</td>
                                            <td>99M0345</td>
                                            <td>674553898</td>
                                            <td>A250</td>
                                            <td>Surveillant</td>
                                            <td>5</td>
                                            <td>Afficher</td>
                                        </tr>
                                        <tr>
                                            <td>Ivan Sandez</td>
                                            <td>99M0345</td>
                                            <td>674553898</td>
                                            <td>A250</td>
                                            <td>Surveillant</td>
                                            <td>5</td>
                                            <td>Afficher</td>
                                        </tr>
                                        <tr>
                                            <td>Ivan Sandez</td>
                                            <td>99M0345</td>
                                            <td>674553898</td>
                                            <td>A250</td>
                                            <td>Surveillant</td>
                                            <td>5</td>
                                            <td>Afficher</td>
                                        </tr>
                                        <tr>
                                            <td>Ivan Sandez</td>
                                            <td>99M0345</td>
                                            <td>674553898</td>
                                            <td>A250</td>
                                            <td>Surveillant</td>
                                            <td>5</td>
                                            <td>Afficher</td>
                                        </tr>
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
