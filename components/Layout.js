import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { responsbar, respons, } from '../scripts/form';
import { Dropdown } from "react-bootstrap"
import CustomToggle from "./customToggle"
import Link from "next/link";
import axios from "axios";
import Router from 'next/router';

class Layout extends React.Component {
    componentDidMount() {
        responsbar();
        respons();
    }
    render() {

        return (
            <>
                <Head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>{this.props.title}</title>
                </Head>
                <div>
                    <div className="topbar"></div>
                    <div className="d-flex" id="wrapper">

                        <div className="bg-light border-right" id="sidebar-wrapper">
                            <div className="sidebar-heading "><Link href="/" ><a className="homeLink">ATTENDANCE CHECK APP</a></Link></div>
                            <div className="list-group list-group-flush" id="menuLoading">
                                <Link href="/analyse/analytic"><a className="list-group-item list-group-item-action bg-light">ANALYTICS </a></Link>
                                <Link href="/surv/surveillant"><a className="list-group-item list-group-item-action bg-light">SURVEILLANTS</a></Link>
                                <Link href="/control/controleur"><a className="list-group-item list-group-item-action bg-light">CONTROLEURS</a></Link>
                                <Link href="/salle/salleAllocation"><a className="list-group-item list-group-item-action bg-light">ALLOCATION DES SALLES</a></Link>
                            </div>
                        </div>
                        <div className="flex-1" id="page-content-wrapper">

                            <nav className="navbar navbar-expand-lg navbar-light border-bottom bg-col">
                                <div className="logo-menu" id="icon-menu">
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
                                            <Dropdown.Item href="../data/account">Account</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="../auth/login">Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </div>
                            </nav>
                            <div className="main" id="interface">
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
