import React from 'react'
import Head from "next/head";
import { Dropdown } from "react-bootstrap"
import CustomToggle from "./customToggle"
import CustomModalC from "./customModalC"
import Link from 'next/link';


const InfoSurveillantPerso = ({ dataSurveillant }) => {

    const { id, last_name, first_name, genre, exam, matricule, phone, grade } = dataSurveillant;

    return (
        <>
            <tr>
                <th>Nom</th>
                <td>{`${last_name} ${first_name}`}</td>
            </tr>
            <tr>
                <th>Matricule</th>
                <td>{matricule}</td>
            </tr>
            <tr>
                <th>Genre</th>
                <td>{genre}</td>
            </tr>
            <tr className="Trait">
                <th>Telephone</th>
                <td>{phone}</td>
            </tr>
            <tr>
                <th>Grade</th>
                <td> {grade === true ? `Chef de Salle` : `Surveillant`}</td>
            </tr>
            <tr>
                <th>Salle</th>
                <td>{exam.present.map(explore => explore.salle.code)}</td>
            </tr>
            <tr>
                <th>Cota Horaire</th>
                <td>{exam.present.length === 0 ? null : exam.present.length * 2}</td>
            </tr>
            <tr>
                <th>Details</th>
                <td>
                    <ul>
                        {exam.present.map(explore => {
                            return (
                                <li> `{explore.Ue.code} /{explore.niveau.filiere}/ {explore.Horaire.date}/ {explore.Horaire.begin} - {explore.Horaire.end}`</li>
                            )
                        })} 
                    </ul>
                </td>
            </tr>
        </>
    )
}

export default InfoSurveillantPerso;