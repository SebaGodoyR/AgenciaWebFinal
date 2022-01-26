import React from "react";
import gaviota from "../../images/gaviota-sinf.png"
import "../global-styles/estilo.scss"
import "../../componentes/global-styles/layout"
import { Container, Row, Col } from "react-bootstrap";
function SectionBanner() {
  return (
    
    <div className="inicioo">
    <Container className="contenedor-body">
    <Row id="rowSc1">
        <Col className="padd-bann"  style={{ paddingTop: "100px", textAlign: "center" }}>
          <h1 style={{lineHeight:"1em", width:"85%"}} className="letrasBanner">Comunícate
con Nosotros</h1>
          <h4 style={{width:"85%"}} className="descripcionBanner">Para saber más de nosotros o solicitar alguno de nuestros servicios, no dudes en escribirnos...</h4>
        </Col>
        <Col style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
          <img id="rowSc2" alt="aa" className="gift1 lazyload img" src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1643211786/giphy_27_p684ht.gif"></img>
          <img id="rowSc2" alt="aa" className="nogift1 lazyload img" src={gaviota}></img>
        </Col>
      </Row>
    </Container>
  </div>
  );
}

export default SectionBanner;
