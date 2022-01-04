import React from "react";


import "../../componentes/global-styles/layout"
import { Container, Row, Col } from "react-bootstrap";
function SectionBanner() {
  return (
    <div style={{background:"#031FFF",}}>
      <Container className="contenedor-body" style={{
          padding: "40px 0px",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Row  className="justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}>
          <Col sm={6}  style={{color:"#fff",}}>
            <h1 style={{ fontSize: "60px" }}>Comunícate con Nosotros</h1>
            <p>
              Para saber más de nosotros o solicitar alguno de nuestros
              servicios, no dudes en escribirnos..
            </p>
          </Col>
          <Col sm={6} style={{textAlign:"center"}}><img className="lazyload img img-fluid" alt="" src="https://agencia-navegantes.s3.amazonaws.com/giphy_15_24debf2e1f.gif"></img></Col>
        </Row>
      </Container>
    </div>
  );
}

export default SectionBanner;
