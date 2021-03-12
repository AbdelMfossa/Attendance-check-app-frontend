import React, { useState } from 'react'
import { Modal, Button, Dropdown } from 'react-bootstrap';
import axios from "axios"
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'


function customModalC({ id, onDelete }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = (survid) => {
        axios.delete(`surveillance/supervisor/${survid}`).then(
            (res) => {
                if (res.data != null) {
                    toast.success("surveillant supprimmée")
                    this.setState({ surveillants: this.state.surveillants })
                }
            }
        )
            .catch(
                err => console.log(err)
            )

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
                        handleDelete(id);
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
