import React from 'react'
import Head from "next/head";
import { Dropdown } from "react-bootstrap"
import CustomToggle from "./customToggle"
import CustomModalC from "./customModalC"
import Link from 'next/link';


const InfoSurveillant = ({ dataSurveillant, onDelete }) => {

  // const { nom, matricule, phone, qualite } = dataSurveillant;
  const { id, name, email, username } = dataSurveillant;

  return (
    <>
      <Head>
      </Head>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{username}</td>
        <td>S005</td>
        <td>{email}</td>
        <td>5</td>
        <td className="contextual-menu survDropdown"><Link href="../anal/analytics"> <a>Afficher</a></Link>
          <Dropdown >
            <Dropdown.Toggle as={CustomToggle}>
              <i className="bi bi-three-dots-vertical options-icon" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="options">
              <Dropdown.Item href="modif/edite" >Edit</Dropdown.Item>
              <Dropdown.Divider />
              <CustomModalC onDelete={onDelete} id={id} />
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    </>
  )
}

export default InfoSurveillant;
