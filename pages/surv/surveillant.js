import React, { Component } from "react";
import Layout from "../../components/Layout";
import CustomModal from "../../components/customModal";
import InfoSurveillant from "../../components/infoSurveillant";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { place } from "../../scripts/form";
import $ from "jquery";
import Link from "next/link";
import Router from "next/router";
import { toast } from "react-toastify";

class Surveillant extends Component {
  constructor(props) {
    super(props);
    this.state = { surveillants: this.props.survs };
  }
  componentDidMount() {
    $(document).ready(function () {
      $("#datatable").DataTable({
        searching: true,
        paging: false,
        info: false,
        columnDefs: [{ orderable: false, targets: [1, 2, 6] }],
      });
    });
    // try {
    //   axios.get("users/currentuser");
    // } catch (err) {
    //   Router.push("/auth/login");
    // }
  }
  render() {
    return (
      <>
        <Layout title="Surveillant">
          <div className="container-fluid">
            <div className="mainCard">
              <header className="row">
                <div className="col-12 header-card">
                  <span>SURVEILLANTS({this.state.surveillants.length})</span>
                  <CustomModal title="Surveillant" />
                </div>
              </header>
              <section className="row">
                <div className="col-12 content-card">
                  <table
                    id="datatable"
                    className="table-responsive-sm nowrap "
                    style={{
                      borderCollapse: "collapse",
                      borderSpacing: 0,
                      width: "100%",
                    }}
                  >
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
                      {this.state.surveillants.map((surv) => {
                        return (
                          <InfoSurveillant
                            dataSurveillant={surv}
                            key={surv.id}
                          />
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

export async function getStaticProps() {
  try {
    const resp = await axios.get("surveillance/supervisor");
    const survs = resp.data.data;
    return { props: { survs } };
  } catch (err) {
    return {
      props: {
        survs: [],
      },
    };
  }
}
export default Surveillant;
