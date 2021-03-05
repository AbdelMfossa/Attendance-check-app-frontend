import React, { useState } from 'react'
import { Modal, Button, Dropdown } from 'react-bootstrap';
import axios from "axios"



function customModalC({ id, onDelete, donnee }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Dropdown.Item onClick={handleShow}>
                Delete
            </Dropdown.Item>
            <Modal show={show} onHide={handleClose} className="modalSuppression">
                <Modal.Header closeButton className="color-titre-ajout">
                    <Modal.Title>SUPPRESSION</Modal.Title>
                </Modal.Header>
                <Modal.Body>Etes vous certains de vouloir  le supprimer ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        NO/Close
                    </Button>
                    <Button variant="danger" onClick={() => onDelete({ id })} >
                        YES
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default customModalC;
