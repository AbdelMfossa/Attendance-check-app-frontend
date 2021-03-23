import axios from "axios";
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";

class CustomModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      genre: "masculin",
      phone: "",
      matricule: "",
      grade: false,
    };
    this.show = false;
  }
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  handleCreate = async (event) => {
    event.preventDefault();
    const data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      genre: this.state.genre,
      phone: this.state.phone,
      matricule: this.state.matricule,
      grade: this.state.grade,
    };
    axios
      .post(`/surveillance/supervisor`, data)
      .then(() =>
        toast.success(
          "Surveillant Crée avec succès Veuillez recharchez la page"
        )
      )
      .catch((err) => {
        console.log(err);
        toast.error("Erreur lors de la suppression");
      });
    this.setState({ show: false });
  };
  render() {
    return (
      <>
        <Button
          variant="dark"
          className="btn boutonE"
          onClick={this.handleShow}
        >
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
            <div className="modal-form">
              <form>
                <div>
                  <label>Noms</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    onChange={(e) => (this.state.first_name = e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Prénom</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    onChange={(e) => (this.state.last_name = e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Matricule</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    onChange={(e) => (this.state.matricule = e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Numéro de téléphone</label>
                  <input
                    type="tel"
                    maxLength="9"
                    minLength="9"
                    className="form-control"
                    placeholder=""
                    onChange={(e) => (this.state.phone = e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Genre</label>
                  <select
                    className="form-control"
                    onChange={(e) => this.setState({ genre: e.target.value })}
                    required
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
                    required
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
              onClick={this.handleCreate}
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

export default CustomModal;
