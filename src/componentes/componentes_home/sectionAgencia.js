import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
import '../global-styles/estilo.scss'
function sectionAgencia() {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion2[0];
  const titulo = data.titulo;
  const ImagenSection = data.imagen_titulo[0].url;
  const ImgenesAds = data.imagen_ads;
  const ImagenPartners = data.imagen_partners;

  return (
    <div id="agencia-marketing" className="agn-baner" >
      <div style={{ textAlign: "center" }}>

      <div class="esconder-titulos">

      <h1 className="txt-Tagencia" >Agencia Los Navegantes.</h1> 
        <p className="parrafos-movil" style={{ fontSize: "20px", fontWeight: "700" }}>Especialistas en Marketing Digital, Analítica Web & Performance.</p> 
        

      </div>

      <div style={{marginBottom:"20px"}} className=" imagenes-esconder sb-div" >
<div>
</div>
<img className="img-sabermas" loading="lazy" style={{  position:"absolute", left:"27%",  width: "7%"  }} alt="" src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Captura_de_pantalla_2022_04_29_122018_9ce96328e9.jpg?v=1659792549" ></img>

<div style={{ paddingBottom:"40px" }} >
<h1 className="subtituloSobrer" style={{ fontSize: "50px", fontWeight: "700" }}>Agencia Los Navegantes.</h1> 

<p style={{textAlign:"center"}} className="parrafoSaber">Especialistas en Marketing Digital, Analítica Web & Performance.</p>

</div>
<img className="img-sabermas" loading="lazy" style={{ position:"absolute", right: "27%",  width: "5%"  }} alt="" src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/circulos_eggns2.webp?v=1659792575" ></img>

<div>
</div>
</div>

       
        <Container  className="contenedor-bodyp">
          <Row style={{display:"none"}} className="row-agenci" >
            {ImgenesAds.map((item, i) => (
              <Col style={{ display:"flex", alignItems:"center" }} xs={6} md={2} sm={2} key={i}>
                <img
                alt=""
                loading="lazy"
                  key={i}
                  className="mkt-pardes lazyload img img-fluid"
                
                  src={item.url}
                ></img>
              </Col>
            ))}
            
          </Row>
          <Row  className="row-agenci" >
         
              <Col  style={{display:"flex", justifyContent:"center", alignItems:"center"}} xs={6} md={2} sm={2} >
                
                <img
                alt=""
                loading="lazy"
         
                  className="mkt-pardes lazyload img img-fluid"
                
                  src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_03_38310794ea.png?v=1659792708"
                ></img>
</Col>
<Col  style={{display:"flex", justifyContent:"center", alignItems:"center"}} xs={6} md={2} sm={2} >

                 <img
                alt=""
                loading="lazy"
             
                  className="mkt-pardes lazyload img img-fluid"
                
                  src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Logos_Seleccion1_04_c76c823413.png?v=1659792708"
                ></img>
</Col>
<Col  style={{display:"flex", justifyContent:"center", alignItems:"center"}} xs={6} md={2} sm={2} >
                 <img
                alt=""
                loading="lazy"
           
                  className="mkt-pardes lazyload img img-fluid"
                
                  src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Logos_Seleccion1_05_6b1e54e75c.png?v=1659792708"
                ></img>
</Col>
<Col  style={{display:"flex", justifyContent:"center", alignItems:"center"}} xs={6} md={2} sm={2} >

                 <img
                alt=""
                loading="lazy"
               
                  className="mkt-pardes lazyload img img-fluid"
                
                  src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Logos_Seleccion1_06_ebf23ae055.png?v=1659792708"
                ></img>

</Col>
<Col  style={{display:"flex", justifyContent:"center", alignItems:"center"}} xs={6} md={2} sm={2} >
                 <img
                alt=""
                loading="lazy"
              
                  className="mkt-pardes lazyload img img-fluid"
                
                  src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Logos_Seleccion1_07_602e045286.png?v=1659792708"
                ></img>
       
              </Col>
       
            
          </Row>

        </Container>

        <h1  className="txt-Tagencia agn2">{titulo}</h1>
        <Container className="contenedor-bodyp">
        <Row  style={{display:"none", justifyContent:"center", alignItems:"center"}} >
            {ImagenPartners.map((item, i) => (
              <Col xs={6} md={2} sm={2} key={i}>
                <img
                alt=""
                loading="lazy"
                width={150}
                height={84}
                  key={i}
                  className="ll-ll lazyload img img-fluid"
                  
                  src={item.url}
                ></img>
              </Col>
            ))}
            
          </Row>
          <Row  style={{display:"flex", justifyContent:"center", alignItems:"center"}} >

          <Col xs={6} md={2} sm={2} >
                <img
                alt=""
                loading="lazy"
                width={150}
                height={84}
               
                  className="ll-ll lazyload img img-fluid"
                  
                  src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Ecommerce_logo_Partner_31_80794ff347.png?v=1658868856"
                ></img>
    </Col>
<Col xs={6} md={2} sm={2} >
                 <img
                alt=""
                loading="lazy"
                width={150}
                height={84}
               
                  className="ll-ll lazyload img img-fluid"
                  
                  src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Ecommerce_logo_Partner_32_7265186da2.png?v=1658868856"
                ></img>
    </Col>

<Col xs={6} md={2} sm={2} >
                  <img
                alt=""
                loading="lazy"
                width={150}
                height={84}
               
                  className="ll-ll lazyload img img-fluid"
                  
                  src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Ecommerce_logo_Partner_33_5a568642a4.png?v=1658868856"
                ></img>
    </Col>
<Col xs={6} md={2} sm={2} >
                        <img
                alt=""
                loading="lazy"
                width={150}
                height={84}
               
                  className="ll-ll lazyload img img-fluid"
                  
                  src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Ecommerce_logo_Partner_34_95593538c5.png?v=1658868856"
                ></img>
              </Col>
 
            
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default sectionAgencia;
