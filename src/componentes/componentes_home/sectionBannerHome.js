
import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
import "../global-styles/estilo.scss"
const sectionBannerHome = () => {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccionBanner[0];

  const Imagen = data.imagen1[0].url;

  const descripcion = data.desccription;
  const texto_pregunta = data.texto_pregunta;
  let Lista = [
    <li className="link-stil" key="id1">
      <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
        key="id1"
        className="lazyload img img-check"
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646659739/check_m6hzc3.webp"
      ></img>
      <p>
     Configuramos tu embudo de ventas en menos de 30 días.</p>
    </li>,
    <li className="link-stil" key="id2">
      <img
      loading="lazy"
      alt=""
        key="id2"
        className="lazyload img img-check"
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646659739/check_m6hzc3.webp"
      ></img>
 <p>Maximizamos tu facturación en menos de 60 días.</p>    </li>,
    <li className="lazyload img link-stil" key="id3">
      <img
      loading="lazy"
          alt=""
        key="id3"
        className="lazyload img img-check"
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646659739/check_m6hzc3.webp"
      ></img>
       <p>Escalamos tus resultados en menos de un semestre.</p>
    </li>,
    <li className="link-stil" key="id4">
      <img
      loading="lazy"
          alt=""
        key="id4"
        className="lazyload img img-check"
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646659739/check_m6hzc3.webp"
      ></img>
     <p>Convertimos este año en tu mejor año..</p> 
    </li>,
  ];
  return (
    <div className="bnHomee" style={{ paddingTop:"150px", backgroundColor: "blue" }}>
      <Container className="contenedor-body">
        <Row
          className="justify-content-center"
          id="columnas"
          style={{ alignItems: "center" }}
        >
          <Col sm={6} style={{ color: "#fff" }}>
            <h1 style={{fontWeight:"700", lineHeight:"1em", fontSize:"75px", color: "#fff" }} className="encabezado">
            Aumentamos tus Ventas Online.
        
            </h1>
            
            <ul
            className="list-list"
              style={{
                fontSize: "21px",
                listStyle: "none",
              }}
            >
              {Lista}
            </ul>
            <p className="list-list" >{descripcion}</p>
            <h3 className="list-list2" >{texto_pregunta}</h3>
            
            <div className="hoverclas2 link-co" >
            

            <a
              href="/#agencia-marketing" 
               className="btn-clss" style={{ fontSize:"22px", fontWeight:"700", color: "#fff", textDecoration: "none" }}
            >
              
             <span  ><i style={{fontSize:"14px", marginRight:"3px"}}  className=" bi bi-chevron-down"></i>Conócenos!</span>
            </a>
            </div>
          </Col>
          <Col sm={6} >
            <img loading="lazy"  className="col-s6-baner lazyload img img-fluid imagenBannerHome" width={549} height={309} alt="" src={Imagen}></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default sectionBannerHome;
