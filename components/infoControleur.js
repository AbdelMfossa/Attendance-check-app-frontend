import React from 'react'
import Head from "next/head";
import { Dropdown } from "react-bootstrap"
import CustomToggle from "./customToggle"
import CustomModalC from "./customModalC"
import Link from 'next/link';


const InfoSurveillant = ({ dataSurveillant, onDelete }) => {

    const { last_name, first_name, email, phone, matricule, role, id } = dataSurveillant;

    return (
        <>
            {role.id === 2 ?
                <tr>
                    <td>{`${last_name} ${first_name}`}</td>
                    <td>{matricule}</td>
                    <td>{phone}</td>
                    <td>{email}</td>
                    <td className="contextual-menu survDropdown">
                        Afficher
                <Dropdown >
                            <Dropdown.Toggle as={CustomToggle}>
                                <i className="bi bi-three-dots-vertical options-icon" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="options">
                                <Dropdown.Item href="modif/edite" >Edit</Dropdown.Item>
                                <Dropdown.Divider />
                                <CustomModalC id={id} onDelete={onDelete} donne={dataSurveillant} />
                            </Dropdown.Menu>
                        </Dropdown>
                    </td>
                </tr>
                : null
            }
        </>
    )
}

export default InfoSurveillant;
