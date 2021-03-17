import React, { useState } from 'react'
import { Modal, Button, Dropdown } from 'react-bootstrap';
import axios from "axios"
import { toast } from 'react-toastify'


function customModalC(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = (survid) => {
        if (props.titre == 'users') {
            axios.delete(`users/users/${survid}`)
                .then((res) => {
                    if (res.data != null) {
                        toast.success("Controleur supprimmé avec succes");
                        props.deleted(survid);
                    }
                })
                .catch(err => { console.log(err); toast.error("Erreur lors de la suppression"); })
        }
        if (props.titre == 'surveillant') {
            axios.delete(`surveillance/supervisor/${survid}`)
                .then((res) => {
                    if (res.data != null) {
                        toast.success("surveillant supprimmé avec succes");

                        props.deleted(survid);
                    }
                })
                .catch(err => { console.log(err); toast.error("Erreur lors de la suppression "); })
        }
    }

    return (
        <>
            <Dropdown.Item onClick={handleShow}>
                Delete
            </Dropdown.Item>
            <Modal show={show} onHide={handleClose} className="modalSuppression">
                <Modal.Header closeButton className="color-titre-ajout">
                    <Modal.Title className="colorTitre">SUPPRESSION</Modal.Title>
                </Modal.Header>
                <Modal.Body>Etes vous certains de vouloir  le supprimer ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No/Close
                    </Button>
                    <Button variant="danger" onClick={() => {
                        handleDelete(props.id);
                        setShow(false);
                    }} >
                        YES
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default customModalC;
