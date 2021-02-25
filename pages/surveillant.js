import Layout from "../components/Layout";


export default function Surveillant() {
    return (
        <Layout title="Surveillant">
            <div className="row interne">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body table-responsive">
                            <h4 className="m-t-0 header-title mb-4"><b>Default Example</b></h4>

                            <table id="datatable" className="table table-bordered dt-responsive nowrap tableau">
                                <thead>
                                    <tr>
                                        <th>Nom</th>
                                        <th>Matricule</th>
                                        <th>Phone</th>
                                        <th>Salle</th>
                                        <th>Qualité</th>
                                        <th>Horaire</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>System Architect</td>
                                        <td>Edinburgh</td>
                                        <td>61</td>
                                        <td>2011/04/25</td>
                                        <td>$320,800</td>
                                        <td>Afficher</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}