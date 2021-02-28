import React from 'react'
import Head from "next/head";
import { Dropdown } from "react-bootstrap"
import CustomToggle from "./customToggle"


const InfoSurveillant = ({ dataSurveillant }) => {

  const { nom, matricule, phone, qualite } = dataSurveillant;

  return (
    <>
      <Head>
      </Head>
      <tr>
        <td>{nom}</td>
        <td>{matricule}</td>
        <td>{phone}</td>
        <td>S005</td>
        <td>{qualite}</td>
        <td>5</td>
        <td className="contextual-menu">Afficher
          <Dropdown >
            <Dropdown.Toggle as={CustomToggle}>
              <i className="bi bi-three-dots-vertical" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="modif/edite">Edit</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="../del/delete">Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    </>
  )
}

export default InfoSurveillant;
