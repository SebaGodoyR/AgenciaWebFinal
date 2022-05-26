import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../global-styles/estilo.scss"
import UseHome from "../../hooks/useHome";

function Section_d3() {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion3[0];
  const imagen_iconos = data.imagen_iconos;
 
  return (
    <div>
    <div className="cont-mov" style={{ fontFamily: "Brandon, Brandon", paddingTop:"40px", paddingBottom:"40px" }}>
      <Container>
           
      <Row>
  
          <Col className="col-mktz order-xs-12 order-md-2">
            <Row className="row-mkt"  >
    
                <Col xs={6} md={3} sm={12} style={{ display:"flex", alignItems:"center", textAlign:"center"}}>
                <div>
                  <img
                  
                  loading="lazy"
                  alt=""

                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653591932/sector4_0dd6ad7573.jpg"
                    width="100%"
                 
                  ></img>
                   <h1>Plataforma</h1>
                   <h1>Shopify o Woocomerce.</h1>
 </div>
                  
                </Col>
   
            </Row>
          </Col>
        </Row>

      
      </Container>
    </div>

    <div className="cont-mov" style={{ fontFamily: "Brandon, Brandon", background: "#290078", paddingTop:"40px", paddingBottom:"40px" }}>
      <Container>

      <Row>
    <Col className="fortres" >

    <div className="forsolos">
    <h1 className="cont-par-cont" >Contáctanos hoy y en menos de 24 horas hábiles responderemos a tu solicitud para</h1>
          <h1 className="cont-par-cont2" >AGENDAR UNA LLAMADA </h1>  </div>
    </Col>



    <Col className="fonnam" >
      
      <a
            className="cont-par-cont3"
              href="/marketing-digital"
              style={{
     
                color: "#fffe00",
                
          
                textDecoration: "none",
              }}
            >
              COORDINAR UNA REUNION
            </a>
      
      
      
 
    </Col>
  </Row>
 


         

      </Container>
    
    </div>

    <div className="pc-for cont-mov" style={{ fontFamily: "Brandon, Brandon", background: "#87D5D9", paddingTop:"60px", paddingBottom:"60px" }}>
      <Container>

      <Row>
    <Col  id="iconss-iconss"  style={{ display:"flex", justifyContent:"center" }}>
    
    <div className="w3-card-4" style={{width:"50%", textAlign:"center"}}>
    <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="70%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652972815/Landing_Ecommerce_05_b13bd6f740.png"
      ></img>

    <div className="w3-container w3-center">
      <p className="primerParf">CREACIÓN</p>
      <p className="primerParf2">Crear campañas de ventas.</p>
    </div>
  </div>

  <div className="w3-card-4" style={{width:"50%", textAlign:"center"}}>
  <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="70%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652972815/Landing_Ecommerce_Icon_06_a3240b3cd7.png"
      ></img>

    <div className="w3-container w3-center">
    <p className="primerParf">CREATIVOS</p>
      <p className="primerParf2">Anuncios que venden.</p>
    </div>
  </div>

  <div className="w3-card-4" style={{width:"50%", textAlign:"center"}}>
  <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="70%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652972815/Landing_Ecommerce_Icon_07_62ab6ea7a8.png"
      ></img>

    <div className="w3-container w3-center">
    <p className="primerParf">OPTIMIZACIÓN</p>
      <p className="primerParf2">Mejoras semanales y mensuales.</p>
    </div>
  </div>

  <div className="w3-card-4" style={{width:"50%", textAlign:"center"}}>
  <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="70%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652972815/Landing_Ecommerce_Icon_08_90597ea819.png"
      ></img>

    <div className="w3-container w3-center">
    <p className="primerParf">SEGUIMIENTOS</p>
      <p className="primerParf2">Resultados de performance</p>
    </div>
  </div>

  <div className="w3-card-4" style={{width:"50%", textAlign:"center"}}>
  <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="70%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652972815/Landing_Ecommerce_Icon_09_c0ae863d79.png"
      ></img>

    <div className="w3-container w3-center">
    <p className="primerParf">VENTAS</p>
      <p className="primerParf2">Incrementar tus resultados</p>
    </div>
  </div>
  <div className="w3-card-4" style={{width:"50%", textAlign:"center"}}>
  <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="70%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652972815/Landing_Ecommerce_Icon_10_e7d0f140f1.png"
      ></img>

    <div class="w3-container w3-center">
    <p className="primerParf">ANALÍTICA</p>
      <p className="primerParf2">Informes de DataStudio.</p>
    </div>
  </div>    
    </Col>
  </Row>
      </Container>
    </div>

    <div className="movil-for  cont-mov" style={{ fontFamily: "Brandon, Brandon", background: "#87D5D9", paddingTop:"60px", paddingBottom:"60px" }}>
      <Container>

      <Row>
    <Col  id="iconss-iconss"  style={{ display:"flex", justifyContent:"center" }}>
    
    <div className="w3-card-4" style={{width:"50%", textAlign:"center", marginBottom:"20px"}}>
    <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="70%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652972815/Landing_Ecommerce_05_b13bd6f740.png"
      ></img>

    <div className="w3-container w3-center">
      <p className="primerParf">CREACIÓN</p>
      <p className="primerParf2">Crear campañas de ventas.</p>
    </div>
  </div>

  <div className="w3-card-4" style={{width:"50%", textAlign:"center", marginBottom:"20px"}}>
  <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="70%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652972815/Landing_Ecommerce_Icon_06_a3240b3cd7.png"
      ></img>

    <div className="w3-container w3-center">
    <p className="primerParf">CREATIVOS</p>
      <p className="primerParf2">Anuncios que venden.</p>
    </div>
  </div>
  </Col>
  </Row>
  <Row>
    <Col  id="iconss-iconss"  style={{ display:"flex", justifyContent:"center" }}>

  <div className="w3-card-4" style={{width:"50%", textAlign:"center", marginBottom:"20px"}}>
  <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="70%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652972815/Landing_Ecommerce_Icon_07_62ab6ea7a8.png"
      ></img>

    <div className="w3-container w3-center">
    <p className="primerParf">OPTIMIZACIÓN</p>
      <p className="primerParf2">Mejoras semanales y mensuales.</p>
    </div>
  </div>

  <div className="w3-card-4" style={{width:"50%", textAlign:"center", marginBottom:"20px"}}>
  <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="70%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652972815/Landing_Ecommerce_Icon_08_90597ea819.png"
      ></img>

    <div className="w3-container w3-center">
    <p className="primerParf">SEGUIMIENTOS</p>
      <p className="primerParf2">Resultados de performance</p>
    </div>
  </div>
  </Col>
  </Row>

  <Row>
    <Col  id="iconss-iconss"  style={{ display:"flex", justifyContent:"center" }}>


  <div className="w3-card-4" style={{width:"50%", textAlign:"center"}}>
  <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="70%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652972815/Landing_Ecommerce_Icon_09_c0ae863d79.png"
      ></img>

    <div className="w3-container w3-center">
    <p className="primerParf">VENTAS</p>
      <p className="primerParf2">Incrementar tus resultados</p>
    </div>
  </div>
  <div className="w3-card-4" style={{width:"50%", textAlign:"center"}}>
  <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="70%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652972815/Landing_Ecommerce_Icon_10_e7d0f140f1.png"
      ></img>

    <div class="w3-container w3-center">
    <p className="primerParf">ANALÍTICA</p>
      <p className="primerParf2">Informes de DataStudio.</p>
    </div>
  </div>    
    </Col>
  </Row>
      </Container>
    </div>






















    <div className="cont-mov" style={{ fontFamily: "Brandon, Brandon", background: "#5D57DD", paddingTop:"60px", paddingBottom:"60px" }}>

    <div style={{}} >
    <h3 className="titulo-next">IMPLEMENTAMOS LAS MEJORES TÉCNICAS PARA QUE TU NEGOCIO MULTIPLIQUE SU FACTURACIÓN Y EXPOSICIÓN DE MARCA DE INTERNET.</h3>
    <h4 className="titulo-next2">Nuestra metodología cumple 5 etapas</h4>
    </div>

      <Container>

      <Row className="pc-for" >
    <Col style={{display:"flex", alignItems:"center"}}>
    <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="90%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652973838/Landing_Ecommerce_Collage_Tablet_7f32c063f0.png"
      ></img>
    </Col>
    <Col style={{display:"flex", alignItems:"center"}}>
    <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="70%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652973852/Landing_Ecommerce_Metodologia_7873ef5ec6.png"
      ></img>
    </Col>
  </Row>

  <Row className="movil-for" >
    <Col >
    <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="100%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652973852/Landing_Ecommerce_Metodologia_7873ef5ec6.png"
      ></img>
    <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="100%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652973838/Landing_Ecommerce_Collage_Tablet_7f32c063f0.png"
      ></img>

    </Col>

  </Row>
 


         

      </Container>
    
    </div>







    </div>
  );
}

export default Section_d3;
