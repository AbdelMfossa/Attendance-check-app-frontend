import axios from 'axios';
import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { toast } from 'react-toastify'

class CustomModalExam extends React.Component {
    state = {
        show: false,
        horaire: this.props.horaire,
        ue: this.props.matiere,
        semestre: this.props.semestre
    }

    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });

    handleCreate = event => {
        event.preventDefault();
        const data = {
            date: this.date,
            plage: this.plage,
            nom: this.nom,
            semestre: this.semestre,
            ue: this.props.matiere
        }

        axios.post(`surveillance/examen`, data)
            .catch(err => toast.error("Erreur lors de la creation de l'examen"))
            .then(toast.success("Examen crée avec succès"))
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
                                    <input type="text" className="form-control" placeholder="" onChange={e => this.date = e.target.value} />
                                </div>
                                <div>
                                    <label >Nom </label>
                                    <input type="text" className="form-control" placeholder="" onChange={e => this.name = e.target.value} />
                                </div>
                                <div>
                                    <label >plage</label>
                                    <select className="form-control" onChange={e => this.plage = e.target.value}>
                                        {this.state.horaire.map(plage =>
                                            <option value={plage.id}>{plage.begin} - {plage.end}</option>
                                        )}
                                    </select>
                                </div>
                                <div>
                                    <label >Ue</label>
                                    <select className="form-control" onChange={e => this.ue = e.target.value}>
                                        {this.state.ue.map(ue =>
                                            <option value={ue.id}>{ue.code}:{ue.intitule}</option>
                                        )}
                                    </select>
                                </div>
                                <div>
                                    <label >Semestre</label>
                                    <select className="form-control" onChange={e => this.semestre = e.target.value}>
                                        {this.state.semestre.map(semestre =>
                                            <option value={semestre.id}>{semestre.num_semestre}</option>
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
