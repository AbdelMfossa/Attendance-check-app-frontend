import axios from 'axios';
import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import { toast } from 'react-toastify'

export default class ModalC extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            first_name: '',
            last_name: '',
            phone: '',
            matricule: '',
            email: '',
            password: 'admin',
            role: 2
        }
    }
    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });

    handleCreate = async (event) => {
        event.preventDefault();
        const data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            phone: this.state.phone,
            matricule: this.state.matricule,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password,
            role: this.state.role
        }
        axios.post(`/users/signup`, data)
            .catch(err => { console.log(err); toast.error("Erreur lors de la creation du controleur"); })
            .then((res) => {
                if (res.data != null)
                    toast.success("Controleur Crée avec succès Veuillez recharchez la page");
            });
        this.setState({ show: false })
        console.log(data)
    }

    render() {
        return (
            <>
                <Button variant="dark" className="btn boutonE" onClick={this.handleShow} >
                    NOUVEAU
                 </Button>
                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                    className="modalSuppression"
                >
                    <Modal.Header closeButton className="color-titre-ajout">
                        <Modal.Title className="colorTitre">{`Ajout d'un ${this.props.title}`}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal-form" >
                            <form >
                                <div>
                                    <label>Nom</label>
                                    <input type="text" className="form-control" placeholder="" onChange={e => this.state.first_name = e.target.value} />
                                </div>
                                <div>
                                    <label >Prenom</label>
                                    <input type="text" className="form-control" placeholder="" onChange={e => this.state.last_name = e.target.value} />
                                </div>
                                <div>
                                    <label >Email</label>
                                    <input type="text" className="form-control" placeholder="" onChange={e => this.state.email = e.target.value} />
                                </div>
                                <div>
                                    <label >matricule</label>
                                    <input type="text" className="form-control" placeholder="" onChange={e => this.state.matricule = e.target.value} />
                                </div>
                                <div>
                                    <label >Numéro de téléphone</label>
                                    <input type="text" className="form-control" placeholder="" onChange={e => this.state.phone = e.target.value} />
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
