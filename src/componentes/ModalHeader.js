import React from "react";
import { Modal, Nav, Button, Col, Row, Container } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "gatsby";
import "../componentes/global-styles/estilo.scss"
import immagen from "../images/hamburguesa.png"
function ModalHeader() {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);

  return (
    <div>
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h4 className="text-white">Collapsed content</h4>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav className="navbar navbar-dark nh">
          <button
          style={{display:"flex", justifyContent:"end"}}
            onClick={() => setShow(true)}
           className="botonHamburguer"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img loading="lazy" 
              width={43}
              height={43}
              src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1643852419/hamburguesa_d720686eaf.webp"
              className="imagen-menu"
              alt="s"
            ></img>
          </button>
        </nav>
      </div>

      <Modal style={{ overflowY: "hidden", backgroundColor: "rgba(0,0,0,.8)" }}
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
       

        <Row style={{ marginTop:"5%" }}>

          <Col className="menu-movil2" style={{ textAlign: "center", lineHeight: "2" }}>

            <Nav.Item id="myDIV">
              <Link
                className="navbar-brand item-menu  "
                to="/"
                activeStyle={{
                  color: "#cdcd41",
                  fontWeight: 700
                }}
                style={{ fontSize: "32px" }}
              >
                Inicio
              </Link>
            </Nav.Item>
            <Nav.Item className="navbar-brand">
              <Link
                className="navbar-brand item-menu  "
                to="/tripulacion"
                activeStyle={{
                  color: "#cdcd41",
                  fontWeight: 700
                }}
                style={{ fontSize: "32px" }}
              >
                Tripulación
              </Link>
            </Nav.Item>
            <Nav.Item>
              <a
                className="navbar-brand item-menu "
                href="https://ecommerce.agencialosnavegantes.cl/"
                style={{ fontSize: "32px" }}
              >
                Desarrollo Web
              </a>
            </Nav.Item>
            <Nav.Item>
              <Link
                className="navbar-brand item-menu"
                to="/marketing-digital"
                style={{ fontSize: "32px" }}
                activeStyle={{
                  color: "#cdcd41",
                  fontWeight: 700
                }}
              >
                Marketing Digital
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                className="navbar-brand item-menu"
                to="/analitica-performance"
                style={{ fontSize: "32px" }}
                activeStyle={{
                  color: "#cdcd41",
                  fontWeight: 700
                }}
              >
                Anlítica y Performance
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                className="navbar-brand item-menu"
                to="/blog/page"
                style={{ fontSize: "32px" }}
                activeStyle={{
                  color: "#cdcd41",
                  fontWeight: 700
                }}
              >
                Blog
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                className="navbar-brand item-menu"
                to="/contacto"
                style={{ fontSize: "32px" }}
                activeStyle={{
                  color: "#cdcd41",
                  fontWeight: 700
                }}
              >
                Contacto
              </Link>
            </Nav.Item>


          </Col>







        </Row>
        <Button
        className="equis-movil"
          style={{
            marginLeft: "90%",
            background: "transparent",
            border: "none",
            fontSize: "80px",
            position: "fixed"

          }}
          onClick={handleClose}
        >
          <i className="bi bi-x"></i>
        </Button>
      </Modal>
    </div>
  );
}

export default ModalHeader;
