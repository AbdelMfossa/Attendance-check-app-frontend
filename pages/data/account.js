import Layout from "../../components/Layout";
import React from "react"
import ReactDOM from "react-dom";
import Link from "next/link";
import axios from "axios";


export default class Account extends React.Component {
    constructor() {
      super();

      this.state = {
        user: {
          last_name: "",
          first_name: "",
          email: "",
          phone: "",
          role: null
        },

        isloading: true
      }
    }

    componentDidMount() {
      try {
        axios.get("users/currentuser")
        .then(res => {
          const {last_name, first_name, email, phone, role} = res.data.data;
          console.log(role)
          const user = {last_name: last_name.toUpperCase(), first_name: first_name.toUpperCase(), email, phone, role};

          let loading = this.state.isloading;
          this.setState({ user , isloading: !loading});
        });
      } catch (err) {
        console.log(err);
      }
    }

    render() {
      const user = this.state.user;
        return (
            <Layout title="Account" >
                <div className="loadData">
                    {
                      this.state.isloading ? "Chargement" : (
                        <div className="personalData">
                          <header>
                            <h2>Informations Personnelles</h2>
                            <button className="btn btn-dark text-light">Modifier</button>
                          </header>
                          <div className="personalData-info">
                            <span>Nom: </span>
                            <span>{ user.first_name }</span>
                          </div>
                          <div className="personalData-info">
                            <span>Prenom: </span>
                            <span>{ user.last_name }</span>
                          </div>
                          <div className="personalData-info">
                            <span>Email: </span>
                            <span>{ user.email }</span>
                          </div>
                          <div className="personalData-info">
                            <span>Phone: </span>
                            <span>{ user.phone }</span>
                          </div>
                          <div className="personalData-info">
                            <span>Role: </span>
                            <span>{ user.role.name }</span>
                          </div>
                        </div>
                      )
                    }
                </div>
            </Layout>
        )
    }
}
