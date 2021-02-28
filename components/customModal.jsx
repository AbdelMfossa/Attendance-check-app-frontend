import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';

const CustomModal = ({ title }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        NOUVEAU
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="color-titre-ajout">
          <Modal.Title >Ajout nouveau {title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-form">
            <form>
              <div>
                <label htmlFor="matricule">Matricule</label>
                <input type="text" className="form-control" placeholder={"matricule du " + title} />
              </div>

              <div>
                <label htmlFor="nom">Nom</label>
                <input type="text" className="form-control" placeholder={"nom du " + title} />
              </div>

              <div>
                <label htmlFor="phone">Telephone</label>
                <input type="number" className="form-control" placeholder={"telephone du " + title} />
              </div>

              <div>
                <label htmlFor="qualite">Qualite</label>
                <select className="form-control">
                  <option value="1">{title}</option>
                  <option value="1">Chef de salle</option>
                </select>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" className="color-titre-ajout">Valider</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModal;
