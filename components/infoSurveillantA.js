import React from "react";
import Head from "next/head";
import { Dropdown } from "react-bootstrap";
import CustomToggle from "./customToggle";
import CustomModalC from "./customModalC";
import Link from "next/link";

const InfoSurveillantA = ({ dataSurveillant }) => {
  const {
    id,
    last_name,
    first_name,
    exam,
    matricule,
    phone,
    grade,
  } = dataSurveillant;

  return (
    <>
      <tr>
        <td>{`${last_name} ${first_name}`}</td>
        <td>{matricule}</td>
        <td>{phone}</td>
        <td>{exam.present.map((explore) => explore.salle.code)}</td>
        <td>{grade === true ? `Chef de Salle` : `Surveillant`}</td>
        <td> {exam.present.length * 2}</td>
      </tr>
    </>
  );
};

export default InfoSurveillantA;
