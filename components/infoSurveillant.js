import React from "react";
import Head from "next/head";
import { Dropdown } from "react-bootstrap";
import CustomToggle from "./customToggle";
import CustomModalC from "./customModalC";
import Link from "next/link";

const InfoSurveillant = ({ dataSurveillant }) => {
  const {
    id,
    last_name,
    first_name,
    email,
    exam,
    matricule,
    phone,
    grade,
  } = dataSurveillant;

  return (
    <>
      <tr>
        <td>{`${last_name.toUpperCase()} ${first_name.toUpperCase()}`}</td>
        <td>{matricule}</td>
        <td>{phone}</td>
        <td>{exam.absent.map((explore) => explore.salle.code + " / ")}</td>
        <td>{grade === true ? `Chef de Salle` : `Surveillant`}</td>
        <td> {exam.present.length * 2}</td>
        <td className="contextual-menu survDropdown">
          <Link href={`/analyse/${id}`} key={id}>
            <a>Afficher</a>
          </Link>
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle}>
              <i className="bi bi-three-dots-vertical options-icon" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="options">
              <Dropdown.Item>Edit</Dropdown.Item>
              <Dropdown.Divider />
              <CustomModalC id={id} titre={"surveillant"} />
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    </>
  );
};

export default InfoSurveillant;
