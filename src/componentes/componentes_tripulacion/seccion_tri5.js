import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UseTri from "../../hooks/useTripulacion";
import "../global-styles/layout";
function SeccionTri5() {
  const response = UseTri();
  const data = response.allStrapiTripulacion.nodes[0].tripulacion_seccion6[0];
  const titulo = data.titulo;
  const descripcion = data.descripcion;
  const imagen = data.imagen[0].url;

  return (
    <div  className="contenedor-body6">
      <Container>
        <Row className="row-tri4">
          <Col id="imgMulti"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
        
          >
            <img className="lazyload img"
                  style={{ width:"45%"}}
              src={imagen}
              alt=""
            ></img>
          </Col>
          <Col
            style={{
              display:"flex",
          
              alignItems: "center",
           
            }}
          >
            <div>
            <h4 id="parf1multi" style={{ textAlign:"left", color:"#ff5983", fontSize:"60px", lineHeight:"1.1em", fontWeight:"700" }}>{titulo}</h4>
            <h4  id="desc1multi" style={{ color:"#ff5983", fontSize:"23px", fontWeight:"300" }}>{descripcion}</h4>
            <div id="imgDion" style={{ justifyContent:"center" }}>
            <img className="lazyload img"
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

export default SeccionTri5;
