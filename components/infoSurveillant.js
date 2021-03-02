import React from 'react'
import Head from "next/head";
import { Dropdown } from "react-bootstrap"
import CustomToggle from "./customToggle"
import CustomModalC from "./customModalC"


const InfoSurveillant = ({ dataSurveillant, onDelete }) => {

  // const { nom, matricule, phone, qualite } = dataSurveillant;
  const { id, name, email, phone } = dataSurveillant;

  return (
    <>
      <Head>
      </Head>
      <tr>
        <td>{ name }</td>
        <td>{ id }</td>
        <td>{ email }</td>
        <td>S005</td>
        <td>{ phone }</td>
        <td>5</td>
        <td className="contextual-menu survDropdown">Afficher
          <Dropdown >
            <Dropdown.Toggle as={CustomToggle}>
              <i className="bi bi-three-dots-vertical options-icon" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="options">
              <Dropdown.Item href="modif/edite" >Edit</Dropdown.Item>
              <Dropdown.Divider />
              <CustomModalC onDelete={onDelete} />
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    </>
  )
}

export default InfoSurveillant;
