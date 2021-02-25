import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Layout = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <body>
                <div className="container-scroller navbar1"></div>
                <div className="container-scroller ">
                    <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row navbar2 border border-dark colbar">
                        <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
                            <p className="attendance">ATTENDANCE CHECK APP</p>
                            <hr className="" />
                        </div>
                        <div className="navbar-menu-wrapper d-flex align-items-center">
                            <ul className="navbar-nav navbar-nav-center header-links d-none d-md-flex mx-auto">
                                <li className="nav-item active ">
                                    <i className="mdi mdi-elevation-rise">
                                        <Image src="/static/university.png" className="img" height={50} width={35} alt="University logo" />
                                    </i>
                                </li>
                                <li>
                                    <span className="titrelogo ">The University of Yaounde I</span>
                                </li>
                            </ul>
                            <ul className="navbar-nav navbar-nav-right">
                                <a className="nav-link dropdown-toggle" id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                                    <img className="img-xs rounded-circle" src="/static/avatar.jpg" alt="Profile image" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown pt-3" aria-labelledby="UserDropdown">
                                    <a href="settings.html" className="dropdown-item">Account</a>
                                    <a className="dropdown-item">Logout</a>
                                </div>
                            </ul>
                            <button className="navbar-toggler navbar-toggler-left d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                                <span className="mdi mdi-menu"></span>
                            </button>

                        </div>
                    </nav>
                    <div className="container-fluid page-body-wrapper">
                        <nav className="sidebar sidebar-offcanvas border border-dark" id="sidebar">
                            <ul className="nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">
                                        <i className="menu-icon mdi mdi-chart-line "></i>
                                        <span className="menu-title">ANALYTICS</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/surveillant">
                                        <i className="menu-icon mdi mdi-phone "></i>
                                        <span className="menu-title">SURVEILLANTS</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        <i className="menu-icon mdi mdi-home"></i>
                                        <span className="menu-title">CONTROLEUR</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="main-panel">
                            <div className="content-wrapper">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </body>

        </>
    )
}
export default Layout;   