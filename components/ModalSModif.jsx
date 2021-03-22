import axios from "axios";
import React from "react";
import { Modal, Button, Dropdown } from "react-bootstrap";
import { toast } from "react-toastify";

export default class ModalSModif extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      first_name: this.props.surveillant.first_name,
      last_name: this.props.surveillant.last_name,
      phone: this.props.surveillant.phone,
      matricule: this.props.surveillant.matricule,
      genre: this.props.surveillant.genre,
      grade: this.props.surveillant.grade,
    };
  }
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  handleModif = async (event) => {
    event.preventDefault();
    const data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      phone: this.state.phone,
      matricule: this.state.matricule,
      email: this.state.email,
      role: this.state.role,
    };
    axios
      .put(`surveillance/supervisor/${this.props.surveillant.id}`, data)
      .then((res) => {
        toast.success(
          "Information du surveillant modifie avec succès Veuillez recharchez la page"
        );
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erreur lors de la modification du surveillant");
      });
    this.setState({ show: false });
    console.log(data);
  };

  render() {
    return (
      <>
        <Dropdown.Item onClick={this.handleShow}>Edit</Dropdown.Item>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
          className="modalSuppression"
        >
          <Modal.Header closeButton className="color-titre-ajout">
            <Modal.Title className="colorTitre">{`modification d'un ${this.props.title}`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-form">
              <form>
                <div>
                  <label>Nom</label>
                  <input
                    type="text"
                    value={this.state.first_name}
                    className="form-control"
                    placeholder=""
                    onChange={(e) =>
                      this.setState({ first_name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label>Prenom</label>
                  <input
                    type="text"
                    value={this.state.last_name}
                    className="form-control"
                    placeholder=""
                    onChange={(e) =>
                      this.setState({ last_name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label>matricule</label>
                  <input
                    type="text"
                    value={this.state.matricule}
                    className="form-control"
                    placeholder=""
                    onChange={(e) =>
                      this.setState({ matricule: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label>Numéro de téléphone</label>
                  <input
                    type="text"
                    value={this.state.phone}
                    className="form-control"
                    placeholder=""
                    onChange={(e) => this.setState({ phone: e.target.value })}
                  />
                </div>
                <div>
                  <label>Genre</label>
                  <select
                    className="form-control"
                    onChange={(e) => this.setState({ genre: e.target.value })}
                    value={this.state.genre}
                  >
                    <option value="masculin">masculin</option>
                    <option value="feminin">féminin</option>
                  </select>
                </div>
                <div>
                  <label>Grade</label>
                  <select
                    className="form-control"
                    onChange={(e) => {
                      e.target.value == "1"
                        ? this.setState({ grade: true })
                        : this.setState({ grade: grade });
                    }}
                    value={this.state.grade}
                  >
                    <option value="0">Surveillant</option>
                    <option value="1">Chef de salle</option>
                  </select>
                </div>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Fermer
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={this.handleModif}
              className="color-titre-ajout"
            >
              Valider
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
