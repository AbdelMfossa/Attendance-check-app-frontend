import Layout from "../../components/Layout";
import React from "react"
import ReactDOM from "react-dom";
import Link from "next/link";
import axios from "axios";
import CustomModalModif from "../../components/customModalModif";
import Router from 'next/router';


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

    async componentDidMount() {
      try {
        const res = await axios.get("users/currentuser");

        const {last_name, first_name, email, phone, role} = res.data.data;
        const user = {last_name: last_name.toUpperCase(), first_name: first_name.toUpperCase(), email, phone, role};

        let loading = this.state.isloading;
        this.setState({ user , isloading: !loading});
      } catch (err) {
        Router.push("auth/login");
      }
    }

    handleModification({ lname, fname, adEmail, nPhone, role }) {
      axios.put("users/users/info", {
        last_name: lname,
        first_name: fname,
        email: adEmail,
        phone: nPhone,
        role
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
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
                            <CustomModalModif
                              user={user}
                              onModification={this.handleModification}
                            />
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
