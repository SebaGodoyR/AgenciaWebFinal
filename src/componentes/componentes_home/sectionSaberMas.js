import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
import "../global-styles/estilo.scss"

const sectionSaberMas = () => {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion11[0];

  return (
    <div  className="cont-mov" style={{ backgroundColor: "#fff", textAlign:"center"}}>
      <div  class="esconder-titulos">

<h1 className="subtituloSobrer" style={{ fontSize: "50px", fontWeight: "700" }}>¿Quieres saber mas sobre nosotros?</h1> 
<div className="contenedorParaffo">
<p className="parrafoSaber">Somos parte de un holding de empresas digitales que buscan utilizar el internet como un canal de difusión, promoción y ventas.</p>
<p className="parrafoSaber">No solo nos enfocamos en servicios, nos apasiona la educación, los proyectos sociales y las comunidades de nicho.</p>
<p className="parrafoSaber">Aprovechamos las posibilidades que el mundo online hoy nos ofrece para sacar el máximo provecho a la tecnología.</p>
</div>

</div>



  <img loading="lazy" alt="" src={data.imagen_titulo[0].url} style={{paddingTop:"40px",}} className="lazyload img img-fluid imagenes-esconder" ></img>
      <Container className="contenedor-body9">
        <Row id="saberMas"
          className="justify-content-center"
          style={{marginTop:"20px", justifyContent: "center", alignItems: "center",paddingLeft:"80px",paddingRight:"80px", }}
        >
          <Col id="saberMas2"  sm={3}><a  href="https://www.fbadschile.cl/"><img loading="lazy" width={242} height={360}  src={data.img_nosotros[0].url}  alt="" className="lazyload img hoverclas img-fluid"></img></a></Col>
          <Col id="saberMas2" sm={3}><a href="https://www.matiasvillanueva.com/"><img loading="lazy" width={242} height={360} src={data.img_nosotros[1].url} alt="" className="lazyload img hoverclas img-fluid"></img></a></Col>
          <Col sm={3}><a href="https://www.academiametrics.com/"><img loading="lazy" width={242} height={360} src={data.img_nosotros[2].url}  alt=""className="lazyload img hoverclas img-fluid"></img></a></Col>
          <Col sm={3}><a href="https://www.autodidactasdigitales.com/"><img loading="lazy" width={242} height={360} src={data.img_nosotros[3].url} alt="" className="lazyload img hoverclas img-fluid"></img></a></Col>
        </Row>
      </Container>
    </div>
  );
};

export default sectionSaberMas;


