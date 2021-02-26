import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { responsbar } from '../scripts/form';

const Layout = ({ title }) => {

    // responsbar();
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{title}</title>
            </Head>
            <div className="content-all">
                <div className="topbar"></div>
                <div className="d-flex" id="wrapper">

                    <div className="bg-light border-right" id="sidebar-wrapper">
                        <div className="sidebar-heading">ATTENDANCE CHECK APP</div>
                        <div className="list-group list-group-flush">
                            <a href="/anal/analytics" className="list-group-item list-group-item-action bg-light">ANALYTICS</a>
                            <a href="/surv/surveillants" className="list-group-item list-group-item-action bg-light">SURVEILLANTS</a>
                            <a href="/control/controleurs" className="list-group-item list-group-item-action bg-light">CONTROLEURS</a>
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
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <Image classNameName="image" src="/static/avatar.jpg" alt="pic profile" width={40} height={40} />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Account</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Logout</a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Layout;   