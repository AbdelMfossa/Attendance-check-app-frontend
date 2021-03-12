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
            surveillant: this.state.surveillant.id,
            examen: this.examens,
            salle: this.salle,
            user: 0
        }
        axios.post("surveillance/controle", data)
            .catch(err => console.log(err))
        console.log(data);

    }

    render() {
        return (
            <>
                <tr>
                    <td>{`${this.state.surveillant.last_name} ${this.state.surveillant.first_name}`}</td>
                    < td >{this.state.surveillant.grade === true ? `Chef de Salle` : `Surveillant`}</td>
                    <td>
                        <select className="form-select" onChange={e => this.examens = parseInt(e.target.value)}>
                            {this.state.examen.map(examen =>
                                <option value={examen.id}>{examen.name} - {examen.day}</option>
                            )}
                        </select>
                    </td>
                    <td>
                        <select className="form-select" onChange={e => this.salle = parseInt(e.target.value)}>
                            {this.state.salle.map(salle =>
                                <option value={salle.id}>{salle.code}</option>
                            )}
                        </select>
                    </td>
                    <td><button type="submit" onClick={this.handleAlloc} variant="dark" className="btn bouton ">Allouer </button></td>
                </tr>
            </>
        )
    }
}

