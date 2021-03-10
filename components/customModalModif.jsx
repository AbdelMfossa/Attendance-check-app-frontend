import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const CustomModalModif = ({ user, onModification }) => {
  const {last_name, first_name, email, phone, role} = user;
  const [show, setShow] = useState(false);

  const [lname, setLname] = useState(last_name);
  const [fname, setFname] = useState(first_name);
  const [adEmail, setEmail] = useState(email);
  const [nPhone, setPhone] = useState(phone);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleModif = () => {
    onModification({ lname, fname, adEmail, nPhone, role: role.id })

    handleClose();
  }

  return (
    <>
      <Button variant="dark" className="bouton" onClick={handleShow} >
        MODIFIER
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="modalModification"
      >
        <Modal.Header closeButton className="color-titre-ajout">
          <Modal.Title >Modification des infos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-form">
            <form >
              <div>
                <label>First_name</label>
                <input type="text" value={fname} className="form-control" placeholder="votre nom" onChange={e => setLname(e.target.value)} />
              </div>
              <div>
                <label >Last_name</label>
                <input type="text" value={lname} className="form-control" placeholder="votre prenom" onChange={e => setFname(e.target.value)} />
              </div>
              <div>
                <label >Email</label>
                <input type="email" value={adEmail} className="form-control" placeholder="votre email" onChange={e => setEmail(e.target.value)} />
              </div>
              <div>
                <label>Phone</label>
                <input type="text" value={nPhone} className="form-control" placeholder="votre numero de telephone" onChange={e => setPhone(e.target.value)} />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" type="submit" className="color-titre-ajout" onClick={handleModif}>Valider</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModalModif;
