import React, { useState } from 'react'
import { Modal, Button, Dropdown } from 'react-bootstrap';



function customModalC() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => {
        console.log("suppression");
    }

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
                    <Button variant="danger" onClick={handleDelete}>
                        YES
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default customModalC;