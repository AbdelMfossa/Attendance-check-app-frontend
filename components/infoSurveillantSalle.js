import React, { useEffect } from 'react'
import Head from "next/head";
import Link from 'next/link';
import axios from "axios"


export default function InfoSurveillantSalle({ dataSurveillant, salle }) {
    const { id, last_name, first_name, grade, phone } = dataSurveillant;
    return (
        <>
            <tr>
                <td>{`${last_name} ${first_name}`}</td>
                <td>{phone}</td>
                < td >{grade === true ? `Chef de Salle` : `Surveillant`}</td>
                <td>
                    <select className="form-control" onChange={e => this.salle = e.target.value}>
                        {salle.map(salle =>
                            <option value={salle.code}>{salle.code}</option>
                        )}
                    </select>
                </td>
            </tr>
        </>
    )
}

