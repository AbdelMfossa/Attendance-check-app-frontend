import React, { useEffect } from 'react'
import Head from "next/head";
import Link from 'next/link';
import axios from "axios"


export default class InfoSurveillantSalle extends React.Component {
    state = {
        surveillant: this.props.dataSurveillant,
        examen: this.props.examen,
        salle: this.props.salle
    }
    handleAlloc = async () => {
        const data = {
            idexam: this.examen,
            id: this.state.surveillant.id,
            sal: this.salle
        }
        axios.post("surveillance/control", data)
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <tr>
                    <td>{`${this.state.surveillant.last_name} ${this.state.surveillant.first_name}`}</td>
                    < td >{this.state.surveillant.grade === true ? `Chef de Salle` : `Surveillant`}</td>
                    <td>
                        <select className="form-select" onChange={e => this.examen = e.target.value}>
                            {examen.map(examen =>
                                <option value={examen.id}>{examen.nom}</option>
                            )}
                        </select>
                    </td>
                    <td>
                        <select className="form-select" onChange={e => this.salle = e.target.value}>
                            {salle.map(salle =>
                                <option value={salle.code}>{salle.code}</option>
                            )}
                        </select>
                    </td>
                    <td><button type="submit" onClick={this.handleAlloc} variant="dark" className="btn bouton ">Allouer </button></td>
                </tr>
            </>
        )
    }
}

