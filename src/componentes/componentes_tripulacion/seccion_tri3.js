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
  <p className="p-equipo" style={{ textAlign:"justify", fontSize: "20px", fontWeight: "300" }}>Nuestras ideas rompen la barrera de lo físico y viajan a través de internet para construir relaciones sólidas con audiencias y brindar experiencias únicas e interactivas.  </p> 
  

</div>
<div className="imagenes-esconder" style={{marginBottom:"30px", display:"flex", justifyContent:"center"}} >
<div className="sb-div" >
<div>
<img className="img-sabermas" style={{width:"60%", marginTop:"-20px"}} loading="lazy"  alt="" src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1644376134/izquierda_abbfc3daad.webp" ></img>
</div>
<div  >
<h1 style={{textAlign:"center"}} className="txt-Tagencia" >Nuestro Equipo</h1> 
        <p className="parrafos-movil" style={{ textAlign:"center", paddingLeft:"60px", paddingRight:"60px", fontSize: "18px", fontWeight: "300" }}>Nuestras ideas rompen la barrera de lo físico y viajan a través de internet para construir relaciones sólidas con audiencias y brindar experiencias únicas e interactivas.</p> 
        
</div>

<div>
<img className="img-sabermas" style={{width:"80%",marginLeft: "35px", marginTop: "-20px"}} loading="lazy" alt="" src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1644376134/derecha_c3efd98861.webp" ></img>
</div>
</div>
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

loading="lazy"
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
                      <img className="hoverclas2" style={{marginRight:"5px"}} src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1644439681/insta_1_cddf368cfd.webp" height={25} width={25}></img>
                    </Link>
                    <Link to={item.linkenid}>
                    <img className="hoverclas2" style={{marginLeft:"5px"}}  src="https://res.cloudinary.com/agencia-web-refresh/image/upload/v1644439681/in_385250e59e.webp" height={25} width={25}></img>
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
