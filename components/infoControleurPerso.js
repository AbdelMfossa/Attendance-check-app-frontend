import React from "react";
import Head from "next/head";
import { Dropdown } from "react-bootstrap";
import Link from "next/link";

const InfoControleurPerso = ({ datas }) => {
  const { id, last_name, first_name, genre, surv, matricule, phone } = datas;

  return (
    <>
      <tr>
        <th>Nom</th>
        <td>{`${last_name.toUpperCase()} ${first_name.toUpperCase()}`}</td>
      </tr>
      <tr>
        <th>Matricule</th>
        <td>{matricule}</td>
      </tr>
      <tr>
        <th>Genre</th>
        <td>{genre}</td>
      </tr>
      <tr>
        <th>Telephone</th>
        <td>{phone}</td>
      </tr>
      <tr>
        <th>Nombre de surveillant checqués</th>
        <td>{surv.present.length === 0 ? `0` : surv.present.length}</td>
      </tr>
      <tr>
        <th>Details</th>
        <td>
          <ul>
            {surv.present.map((explore) => {
              return (
                <li>
                  {" "}
                  `{explore.surv.matricule} | {explore.surv.nom}/{" "}
                  {explore.salle.code}/ {explore.Ue.code} :{explore.Ue.intitule}{" "}
                  - {explore.Horaire.date} / {explore.Horaire.begin} -{" "}
                  {explore.Horaire.end}`
                </li>
              );
            })}
          </ul>
        </td>
      </tr>
    </>
  );
};

export default InfoControleurPerso;
