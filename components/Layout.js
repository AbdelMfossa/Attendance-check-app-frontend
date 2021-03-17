import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Dropdown } from "react-bootstrap";
import CustomToggle from "./customToggle";
import Link from "next/link";
import axios from "axios";
import Router from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

class Layout extends React.Component {

    constructor(props) {
        super(props);

        // this.currentUser();

        this.state = {
            navs: [
                {
                    id: 1,
                    name: "analytic",
                    active: "activeNav"
                },
                {
                    id: 2,
                    name: "surveillant",
                    active: "activeNav"
                },
                {
                    id: 3,
                    name: "controlleur",
                    active: "activeNav"
                },
                {
                    id: 4,
                    name: "salle",
                    active: "activeNav"
                }
            ],

            authorized: this.props.auth,

            responsive: {
                class: null,
                mainInterface: "auto"
            }
        }
    }

    async componentDidMount() {
        let resp = this.state.responsive;

        resp.class = window.innerHeight - 100;

        window.addEventListener("resize", () => {
            let height = window.innerHeight;
            let res = this.state.responsive;

            res.mainInterface = height - 100;

            this.setState({ responsive: res });
        });

        try {
            const res = await axios.get("users/currentuser");

            if (res.data.data !== null) {
                this.setState({ authorized: true });
            }
        } catch(err) {
            console.log(err);
        }

        this.setState({ responsive: resp });
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

    render() {
        const auth = this.state.authorized;

        return (
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
                                        <Link href="/analyse/analytic"><a className={`list-group-item list-group-item-action bg-light ${this.state.navs[0].active}`} id={`nav-${this.state.navs[0].id}`} >ANALYTICS </a></Link>
                                        <Link href="/surv/surveillant"><a className={`list-group-item list-group-item-action bg-light ${this.state.navs[1].active}`} id={`nav-${this.state.navs[1].id}`} >SURVEILLANTS</a></Link>
                                        <Link href="/control/controleur"><a className={`list-group-item list-group-item-action bg-light ${this.state.navs[2].active}`} id={`nav-${this.state.navs[2].id}`} >CONTROLEURS</a></Link>
                                        <Link href="/salle/salleAllocation"><a className={`list-group-item list-group-item-action bg-light ${this.state.navs[3].active}`} id={`nav-${this.state.navs[3].id}`} >ALLOCATION DES SALLES</a></Link>
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
                                    <div className="main" id="interface" style={{ height: `${this.state.responsive.mainInterface}px` }}>
                                        {this.props.children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
        )
    }
}

export default Layout;
