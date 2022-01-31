import React from "react";

import "../componentes/global-styles/layout"
import Header from "../componentes/header"
import Footer from "../componentes/footer"
import SectionBannerHome from "../componentes/componentes_home/sectionBannerHome"
import SectionAgencia from "../componentes/componentes_home/sectionAgencia"
import Sectionolas from "../componentes/sectionolas"
import SectionMarketing from "../componentes/componentes_home/sectionMarketing"
import SectionAnaliticaPerformance from "../componentes/componentes_home/sectionAnaliticaPerformance"
import SectionDesarrollo from "../componentes/componentes_home/sectionDesarrollo"
import Seo from "../componentes/seo"
import SectionBlog from "../componentes/componentes_home/sectionBlog"
import Video from "../componentes/SectionVideo"

import SectionSomoPartners from "../componentes/componentes_home/sectionSomoPartners"
import SectionSobreNosotros from "../componentes/componentes_home/sectionSobreNosotros"
import SectionSumate from "../componentes/componentes_home/sectionSumate"
import SeparadorOlasSirena from "../componentes/separadorOlasSirena"
import SectionSaberMas from "../componentes/componentes_home/sectionSaberMas";
import SectionInstagram from "../componentes/SectionInstagram"
import Slider from "../componentes/componentes_home/slider"


const IndexPage = () => {
  const colorFondo= "#031fff"
  return (
    <React.Fragment>
      <Seo
              title="Agencia de Marketing Digital, eCommerce y Performance"
  
            ></Seo>
      <Header colorFondo={colorFondo} />
      <SectionBannerHome></SectionBannerHome>
      <Sectionolas></Sectionolas>
     
      <SectionAgencia ></SectionAgencia>
    
      <SectionMarketing></SectionMarketing>
      <SectionAnaliticaPerformance></SectionAnaliticaPerformance>
      <SectionDesarrollo></SectionDesarrollo>
      <Video></Video>
      <Slider id="slider-movil" ></Slider>
      
      
      <SectionSomoPartners></SectionSomoPartners>
      <SectionSobreNosotros></SectionSobreNosotros>
      <SectionSumate></SectionSumate>
      <SeparadorOlasSirena></SeparadorOlasSirena>
      <SectionSaberMas></SectionSaberMas>
      <SectionBlog></SectionBlog>
      <SectionInstagram></SectionInstagram>
      <Footer />
    </React.Fragment>
  );
};

export default IndexPage;
