import React from "react";
import Header from "../componentes/header"
import Footer from "../componentes/componentes_desarrollo/footerd"

import Slider from "../componentes/componentes_home/slider"
import SectionContacto from "../componentes/SectionContacto"
import SectionInstagram from "../componentes/SectionInstagram";
import "../componentes/global-styles/layout"
import Seo from "../componentes/seo"
import Seccionbannerd2 from "../componentes/componentes_desarrollo/seccion_d2"
import Seccionmkt5 from "../componentes/componentes_mkt/seccion_mkt5"
import Seccionmkt6 from "../componentes/componentes_mkt/seccion_mkt6"
import Seccionmkt7 from "../componentes/componentes_mkt/seccion_mkt7"
import Seccionbannerd1 from "../componentes/componentes_desarrollo/seccion_bannerd1"
import Seccionbannerd3 from "../componentes/componentes_desarrollo/seccion_d3"
import Seccionbannerd4 from "../componentes/componentes_desarrollo/seccion_d4"
import Seccionbannerd5 from "../componentes/componentes_desarrollo/seccion_d5"
import Seccionbannerd6 from "../componentes/componentes_desarrollo/seccion_d6"
function desarrolloWeb() {
  
  return (
    <div>
      <Seo
              title="Marketing Digital, Google Adwords y Facebook Ads"
  
            ></Seo>
      <Header id="mktmkt" ></Header>

      <Seccionbannerd1></Seccionbannerd1>
      <Seccionbannerd2></Seccionbannerd2>

      <Seccionbannerd3></Seccionbannerd3>

      <Seccionbannerd4></Seccionbannerd4>
      <Seccionbannerd5></Seccionbannerd5>
      <Seccionbannerd6></Seccionbannerd6>
    
      <Footer />

      





    </div>
  );
}

export default desarrolloWeb;
