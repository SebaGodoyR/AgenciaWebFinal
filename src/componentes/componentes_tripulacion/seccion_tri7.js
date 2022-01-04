import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UseTri from "../../hooks/useTripulacion";
import "../global-styles/layout";
function SeccionTri7() {
  const response = UseTri();
  const data = response.allStrapiTripulacion.nodes[0].tripulacion_seccion8[0];
  const titulo = data.titulo;
  const descripcion = data.descripcion;
  const imagen = data.imagen[0].url;

  return (
    <div className="contenedor-body8">
      <Container >
        <Row >
          <Col id="imgMulti"  style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
         >
            <img
               style={{ width:"30%"}}
              src={imagen}
              alt=""
            ></img>
          </Col>
          <Col
       style={ { display:"flex", alignItems:"center" }} >
            <div>
            <h4 id="parf1multi" className="seccion8Titulo">{titulo}</h4>
            <h4  id="desc1multi" className="seccion8descripcion">{descripcion}</h4>
            <div id="imgDion" style={{ justifyContent:"center" }}>
            <img 
          style={{ width:"30%"}}
              src={imagen}
              alt=""
            ></img>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SeccionTri7;
