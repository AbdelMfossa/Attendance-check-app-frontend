import React from 'react'
import Head from "next/head";
import { Dropdown } from "react-bootstrap"
import CustomToggle from "./customToggle"
import CustomModalC from "./customModalC"
import Link from 'next/link';


const InfoSurveillant = ({ dataSurveillant, onDelete }) => {

  const { id, last_name, first_name, email, exam, matricule, phone, horaire } = dataSurveillant;

  return (
    <>
      <Head>
      </Head>
      <tr>
        <td>{`${last_name} ${first_name}`}</td>
        <td>{matricule}</td>
        <td>{phone}</td>
        <td>
          {exam.absent.map(
            explore => {
              return (
                explore.salle.code
              )
            })}
        </td>
        < td > {grade}</td>
        <td> {horaire.present.map(
          explore => {
            return (
              explore
            )
          })}</td>
        <td className="contextual-menu survDropdown">Afficher
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
    </>
  )
}

export default InfoSurveillant;
