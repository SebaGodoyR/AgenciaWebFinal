import React from "react";
import "../componentes/global-styles/layout"
import Seccion1 from "../componentes/componente_prensa/seccion_prensa";
import Seccion2 from "../componentes/componente_prensa/seccion_blog_prensa"
import Seccion3 from "../componentes/componente_prensa/section_3"
import Header from "../componentes/header"
import Footer from "../componentes/footer"
import Seccion4 from "../componentes/componente_prensa/seccion_importantes"
const prensas = () => {
  const colorFondo= "#031fff"
  
    return (
      <React.Fragment>
        <Header  style={{backgroundColor:"red"}}/>
        <Seccion1></Seccion1>
        <Seccion4></Seccion4>
        <Seccion2></Seccion2>
        <Seccion3></Seccion3>
        <Footer />
      </React.Fragment>
    );
  };
  
  export default prensas;