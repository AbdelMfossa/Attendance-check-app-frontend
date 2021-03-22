import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Dropdown } from "react-bootstrap";
import CustomToggle from "./customToggle";
import Link from "next/link";
import axios from "axios";
import Router from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { respon } from '../scripts/form';

class Layout extends React.Component {

    constructor(props) {
        super(props);

        this.currentUser();

        this.state = {
            navs: {
                analytic: "activeNav",
                controlleur: "notActive",
                surveillant: "notActive",
                salle: "notActive"
            },

            authorized: this.props.auth,

            responsive: {
                class: null
            }
        }
    }

    async componentDidMount() {
        if (this.state.authorized){
            respon();
        }

        try {
            const res = await axios.get("users/currentuser");

            if (res.data.data !== null) {
                this.setState({ authorized: true});
            }
        } catch (err) {
            console.log(err);
        }
    }

    logout = async () => {
        try {
            const res = await axios.post("users/signout");

            Router.push("/auth/login");
        } catch (err) {
            console.log(err);
        }
    }

    async currentUser() {
        try {
            const res = await axios.get("users/currentuser");

            if (res.data.data.role.id !== 1) {
                Router.push("/auth/login");
            }

            this.setState({ authorized: true });
        } catch(err) {
            Router.push("/auth/login");
        }
    }

    toggle = () => {
        let res = this.state.responsive;

        if (res.class === null) {
            res.class = "toggled";
        } else {
            res.class = null;
        }

        this.setState({ responsive: res });
    }

    switchNavigation = (navigationName) => {
        let navigation = this.state.navs;

        navigation.analytic = "notActive";
        navigation.controlleur = "notActive";
        navigation.surveillant = "notActive";
        navigation.salle = "notActive";

        if (navigationName === "analytic") {
            navigation.analytic = "activeNav";
        } else if (navigationName === "controlleur") {
            navigation.controlleur = "activeNav";
        } else if (navigationName === "surveillant") {
            navigation.surveillant = "activeNav";
        } else if (navigationName === "salle") {
            navigation.salle = "activeNav";
        }

        this.setState({ navs: navigation });
    }

    render() {
        const auth = this.state.authorized;

        return (
            <>
                {
                    this.state.authorized ? (
                        <>

                            <Head>
                                <meta charset="UTF-8" />
                                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                                <title>{this.props.title}</title>
                            </Head>
                            <div>
                                 <div className="topbar"></div>
                                <div className={`d-flex ${this.state.responsive.class}`} id="wrapper">

                                    <div className="bg-light border-right" id="sidebar-wrapper">
                                        <div className="sidebar-heading "><Link href="/" ><a className="homeLink">ATTENDANCE CHECK APP</a></Link></div>
                                        <div className="list-group list-group-flush" id="menuLoading">
                                            <Link href="/analyse/analytic">
                                                <a className={`list-group-item list-group-item-action bg-light ${this.state.navs.analytic}`}
                                                    onClick={() => this.switchNavigation("analytic")}
                                                >
                                                    ANALYTICS
                                                </a>
                                            </Link>
                                            <Link href="/surv/surveillant">
                                                <a className={`list-group-item list-group-item-action bg-light ${this.state.navs.surveillant}`}
                                                    onClick={() => this.switchNavigation("surveillant")}
                                                >
                                                    SURVEILLANTS
                                                </a>
                                            </Link>
                                            <Link href="/control/controleur">
                                                <a className={`list-group-item list-group-item-action bg-light ${this.state.navs.controlleur}`}
                                                    onClick={() => this.switchNavigation("controlleur")}
                                                >
                                                    CONTROLEURS
                                                </a>
                                            </Link>
                                            <Link href="/salle/salleAllocation">
                                                <a className={`list-group-item list-group-item-action bg-light ${this.state.navs.salle}`}
                                                    onClick={() => this.switchNavigation("salle")}
                                                >
                                                    ALLOCATION DES SALLES
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex-1" id="page-content-wrapper">

                                        <nav className="navbar navbar-expand-lg navbar-light border-bottom bg-col">
                                            <div className="logo-menu" id="icon-menu" onClick={this.toggle}>
                                                <i className="bi bi-justify"></i>
                                            </div>

                                            <div className="logo-text">
                                                <img src="/static/university.png " alt="picture of uy1" width="40px" height="40" />
                                                <span>The University of Yaounde I</span>
                                            </div>
                                            <div className="logo-textL">
                                                <Dropdown>
                                                    <Dropdown.Toggle as={CustomToggle}>
                                                        <Image className="img-xs image" src="/static/avatar.jpg" alt="pic profile" width={40} height={40} />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="/data/account">Account</Dropdown.Item>
                                                        <Dropdown.Divider />
                                                        <Dropdown.Item onClick={() => this.logout()} >Logout</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>

                                            </div>
                                        </nav>
                                        <div className="main" id="interface" >
                                            {this.props.children}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ):null
                }
            </>
        )
    }
}

export default Layout;
