import React from 'react'
import Head from "next/head";
import { Dropdown } from "react-bootstrap"
import CustomToggle from "./customToggle"
import CustomModalC from "./customModalC"
import ModalCModif from "./ModalCModif"
import Link from 'next/link';


const infoControleur = ({ dataSurveillant, onDelete }) => {

    const { last_name, first_name, email, phone, matricule, role, id } = dataSurveillant;

    return (
        <>
            {role == null ?
                null :
                (role.id === 2 ?
                    <tr>
                        <td>{`${last_name} ${first_name}`}</td>
                        <td>{matricule}</td>
                        <td>{phone}</td>
                        <td>{email}</td>
                        <td className="contextual-menu survDropdown">
                            <Link href={`/control/${id}`} key={id}><a>Afficher</a></Link>
                            <Dropdown >
                                <Dropdown.Toggle as={CustomToggle}>
                                    <i className="bi bi-three-dots-vertical options-icon" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="options">
                                    <ModalCModif controleur={{ last_name, first_name, email, phone, matricule, role, id }} />
                                    <Dropdown.Divider />
                                    <CustomModalC id={id} titre={`users`} deleted={onDelete} />
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    : null
                )}
        </>
    )
}

export default infoControleur;
