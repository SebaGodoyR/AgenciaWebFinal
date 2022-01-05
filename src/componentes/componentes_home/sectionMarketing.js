import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
import "../global-styles/estilo.scss"



const sectionMarketing = () => {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion3[0];
  const descripcion = data.descripcion;
  const descripcion2 = data.description2;
  const imagen_iconos = data.imagen_iconos;
  const Titulo = data.titulo;

  return (
    <div style={{ backgroundColor: "#280077", padding: "50px 0" }}>
      <Container id="contenedor-pc" className="contenedor-body">
        <Row
          className="justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col sm={6} className="order-xs-12 order-md-1">
            <Row style={{ justifyContent: "center", alignItems: "center" }}>
              {imagen_iconos.map((item, i) => (
                <Col xs={6} md={6} sm={6} key={i}>
                  <img
                  alt=""
                    key={i}
                    className="lazyload img img-fluid"
                    src={item.url}
                    width={300}
                  ></img>

                  
                </Col>
              ))}
            </Row>
          </Col>
          <Col sm={6} className="order-xs-1 order-md-2">
            <h2
              style={{
                lineHeight: "1em",
                fontWeight: "700",
                color: "#ED5682",
                fontSize: "60px",
              }}
            >
              {Titulo}
            </h2>
            <p
              style={{
                color: "#fff",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {descripcion}
            </p>
            <p
              style={{
                color: "#fff",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {descripcion2}
            </p>
            <p
              style={{
                color: "#fff",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {/* {contenido} */}
            </p>
            <div className="hoverclas2" style={{position:"absolute"}} >
            <a
            
              href="/marketingdigital"
              style={{
                paddingBottom:"20px",
                color: "#fffe00",
                fontSize: "18px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Descubre más aquí <i className="bi bi-arrow-right"  style={{ marginTop: "5px", paddingLeft: "10px" }}></i>
              
            </a>
            </div>
          </Col>
        </Row>
      </Container>
        
              
      <Container id="contenedor-movil" className="contenedor-body">
        <Row
          className="justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >

<Col sm={6} className="order-xs-1 order-md-2">
            <h2
              style={{
                lineHeight: "1.1em",
                fontWeight: "700",
                color: "#ED5682",
                fontSize: "42px ",
              }}
            >
              {Titulo}
            </h2>
            <p
              style={{
                color: "#fff",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {descripcion}
            </p>
            <p
              style={{
                color: "#fff",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {descripcion2}
            </p>
            <p
              style={{
                color: "#fff",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {/* {contenido} */}
            </p>
            <div style={{position:"absolute"}} >
            <a
            className="estiloLink "
              href="/marketingdigital"
              style={{
                paddingBottom:"20px",
                color: "#fffe00",
                
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Descubre más aquí <i className="bi bi-arrow-right"  ></i>
              
            </a>
            </div>
          </Col>    

          <Col style={{ marginTop:"50px" }}  sm={6} className="order-xs-12 order-md-1">
            <Row style={{ justifyContent: "center", alignItems: "center" }}>
              {imagen_iconos.map((item, i) => (
                <Col xs={6} md={6} sm={6} key={i}>
                  <img
                  alt=""
                    key={i}
                    className="lazyload img img-fluid"
                    src={item.url}
                    width={300}
                  ></img>

                  
                </Col>
              ))}
            </Row>
          </Col>
   
        </Row>
      </Container>        



    </div>
  );
};

export default sectionMarketing;
