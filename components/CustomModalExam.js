import axios from 'axios';
import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';


class CustomModalExam extends React.Component {
    state = {
        show: false
    }
    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });

    handleCreate = event => {
        event.preventDefault();
        const data = {
            date: this.date,
            plage: this.plage,
            ue: this.ue,
            nom: this.nom,
            semestre: this.semestre
        }

        axios.post(`surveillance/examen`, data)
            .catch(
                err => console.log(err)
            )
        this.setState({ show: false })

    }
    render() {

        return (
            <>
                <Button variant="dark" className="btn boutonE" onClick={this.handleShow} >
                    CREER UN EXAMEN
      </Button>
                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                    className="modalSuppression"
                >
                    <Modal.Header closeButton className="color-titre-ajout">
                        <Modal.Title className="colorTitre" >CREATION D'UNE EXAMEN</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal-form" >
                            <form >
                                <div>
                                    <label>Date</label>
                                    <input type="text" className="form-control" placeholder="Code de la salle Exemple: R110" onChange={e => this.date = e.target.value} />
                                </div>
                                <div>
                                    <label >Name</label>
                                    <input type="text" className="form-control" placeholder="Situer la salle " onChange={e => this.name = e.target.value} />
                                </div>
                                <div>
                                    <label >plage</label>
                                    <select className="form-select" onChange={e => this.plage = e.target.value}>
                                        {horaire.map(plage =>
                                            <option value={salle.code}>{plage.begin} - {plage.end}</option>
                                        )}
                                    </select>
                                </div>
                                <div>
                                    <label >Ue</label>
                                    <select className="form-select" onChange={e => this.ue = e.target.value}>
                                        {ue.map(ue =>
                                            <option value={ue.code}>{ue.code}:{ue.intitule}</option>
                                        )}
                                    </select>
                                </div>
                                <div>
                                    <label >Semestre</label>
                                    <select className="form-select" onChange={e => this.semestre = e.target.value}>
                                        {semestre.map(semestre =>
                                            <option value={semestre.nom}>{semestre.nom}</option>
                                        )}
                                    </select>
                                </div>
                            </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Fermer
          </Button>
                        <Button variant="primary" type="submit" onClick={this.handleCreate} className="color-titre-ajout">Valider</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default CustomModalExam;
