import React from "react";
import { Link } from "gatsby";
import { Col, Row, Container } from "react-bootstrap";
import UseTri from "../../hooks/useTripulacion";
import "../global-styles/layout";
function seccionTri3() {
  const response = UseTri();
  const data = response.allStrapiTripulacion.nodes[0].tripulacion_seccion11;
  

  return (
    <div >
      <Container>
        
      <div class="esconder-titulos">

<h1 className="t-equipo" style={{ textAlign:"center", fontSize: "40px", fontWeight: "700" }}>Nuestro Equipo</h1> 
  <p className="p-equipo" style={{ textAlign:"center", fontSize: "20px", fontWeight: "300" }}>Nuestras ideas rompen la barrera de lo <br/> físico y viajan a través de internet para <br/> construir relaciones sólidas con audiencias y <br/> brindar experiencias únicas e interactivas.  </p> 
  

</div>
<div style={{ display:"flex", justifyContent:"center" }}>
<img
                  style={{marginBottom:"30px", width:"80%", borderRadius: "20px" }}
             
                  className="lazyload img desvanecer tripubanner"
                  src="https://agencia-navegantes.s3.amazonaws.com/nuestroo_3846bc63d6.PNG"
                 
                  alt="hgg"
                ></img>

</div>
        <Col className="margen-tripu" >
       
          <Row id="cnt-tripulacion" style={{ justifyContent: "center", alignItems: "center" }}>
            {data.map((item, i) => (
              <Col
                style={{ marginBottom: "20px" }}
                className="div-imagen"
                lg={3}
                key={i}
              >
                <img

        
                  style={{ borderRadius: "20px" }}
                  key={i}
                  className="lazyload img desvanecer "
                  src={item.imagen.url}
                  width={300}
                  alt=""
                ></img>
                <Container id="tripulacion-cards"
                 
                  className="contain cards-tripulacion"
                >
                  <div>


                  <p  className="nombreEquipo">
                    {item.nombre}
                  </p>
                  <p className="descripcionEquipo2">{item.ocupacion}</p>
                  <h1 style={{ letterSpacing: "10px" }}>
                    <Link className="hoverclas2 links" to={item.link_insta}>
                      <i id="iconos" className="bi bi-instagram"></i>
                    </Link>
                    <Link to={item.linkenid}>
                      <i id="iconos" className="bi bi-linkedin"></i>
                    </Link>
                  </h1>
                  <p
                    className="descripcionEquipo"
                   
                  >
                    {item.descripcion}
                  </p>
                  </div>
                </Container>
              </Col>
            ))}
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default seccionTri3;
