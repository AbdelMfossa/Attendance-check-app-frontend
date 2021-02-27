import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { responsbar, respons } from '../scripts/form';
import {Dropdown} from "react-bootstrap"
import CustomToggle from "./customToggle"

const Layout = ({ title, children }) => {

    useEffect(() => {
        responsbar();
        respons();
    });

    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{title}</title>
            </Head>
            <div>
                <div className="topbar"></div>
                <div className="d-flex" id="wrapper">

                    <div className="bg-light border-right" id="sidebar-wrapper">
                        <div className="sidebar-heading">ATTENDANCE CHECK APP</div>
                        <div className="list-group list-group-flush">
                            <a href="/anal/analytics" className="list-group-item list-group-item-action bg-light">ANALYTICS</a>
                            <a href="/surv/surveillant" className="list-group-item list-group-item-action bg-light">SURVEILLANTS</a>
                            <a href="/control/controleur" className="list-group-item list-group-item-action bg-light">CONTROLEURS</a>
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

                            <ul className="navbar-nav profil">
                                <li className="nav-item">
                                    <Dropdown>
                                        <Dropdown.Toggle as={CustomToggle}>
                                            <Image className="image" src="/static/avatar.jpg" alt="pic profile" width={40} height={40} />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Account</Dropdown.Item>
                                            <Dropdown.Divider/>
                                            <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                            </ul>
                        </nav>

                        <div className="main" id="main-interface">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Layout;
