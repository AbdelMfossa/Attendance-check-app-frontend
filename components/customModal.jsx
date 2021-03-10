import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';

const CustomModal = ({ title }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="dark" className="bouton" onClick={handleShow} >
        NOUVEAU
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="modalSuppression"
      >
        <Modal.Header closeButton className="color-titre-ajout">
          <Modal.Title >Ajout nouveau {title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-form">
            <form >
              <div>
                <label>Nom</label>
                <input type="text" className="form-control" placeholder={"Nom du " + title} />
              </div>
              <div>
                <label >Prénom</label>
                <input type="text" className="form-control" placeholder={"Prénom du " + title} />
              </div>
              <div>
                <label >Genre</label>
                <select className="form-control">
                  <option value="M" onChange={e => this.genre = e.target.value}>masculin</option>
                  <option value="F" onChange={e => this.genre = e.target.value}>féminin</option>
                </select>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" type="submit" className="color-titre-ajout">Valider</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModal;
