import React from 'react'
import Head from "next/head";
import { Dropdown } from "react-bootstrap"
import CustomToggle from "./customToggle"
import CustomModalC from "./customModalC"
import Link from 'next/link';


const InfoSurveillantSalle = ({ dataSurveillant, props }) => {

    const { id, last_name, first_name, grade, phone } = dataSurveillant;

    return (
        <>
            <tr>
                <td>{`${last_name} ${first_name}`}</td>
                <td>{phone}</td>
                <td>{grade}</td>
                <td>
                    <select className="form-control">
                        {props.salle.map(salle =>
                            <option onChange={e => this.salle = e.target.value}>{salle.code}</option>)}
                    </select>
                </td>
            </tr>
        </>
    )
}

export async function getStaticProps() {
    try {
        const res = await axios.get("surveillance/room");
        const salle = res.data;
        return {
            props: {
                salle: salle
            }
        }
    } catch (err) {
        console.log(err)
    }
}
export default InfoSurveillantSalle;
