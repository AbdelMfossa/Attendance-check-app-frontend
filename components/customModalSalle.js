import axios from 'axios';
import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';


class CustomModalSalle extends React.Component {

  state = {
    show: false
  }
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  handleCreate = event => {
    event.preventDefault();
    const data = {
      code: this.code,
      libelle: this.libelle,
      localisation: this.localisation
    }

    axios.post(`/surveillance/room`, data)
      .catch(
        err => console.log(err)
      )

  }
  render() {

    return (
      <>
        <Button variant="dark" className="btn boutonE" onClick={this.handleShow} >
          CREER UNE SALLE
      </Button>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
          className="modalSuppression"
        >
          <Modal.Header closeButton className="color-titre-ajout">
            <Modal.Title >CREATION D'UNE SALLE</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-form" >
              <form >
                <div>
                  <label>code</label>
                  <input type="text" className="form-control" placeholder="Code de la salle Exemple: R110" onChange={e => this.code = e.target.value} />
                </div>
                <div>
                  <label >Libellé</label>
                  <input type="text" className="form-control" placeholder="" onChange={e => this.libelle = e.target.value} />
                </div>
                <div>
                  <label >Localisation</label>
                  <input type="text" className="form-control" placeholder="Situer la salle " onChange={e => this.localisation = e.target.value} />
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

export default CustomModalSalle;
