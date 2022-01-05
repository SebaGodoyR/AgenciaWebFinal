import React from "react";
import { graphql } from "gatsby";

import BlogLayout from "../BlogLayout";
import PostList from "../PostList/PostList";
import Pagination from "../Pagination";
import Header from "../componentes/header"
import Seo from "../componentes/seo"
import bannerBitacora from "../images/bitacora.jpg"
import ShareButtons from "../componentes/sharebutton";
import imageBlog from "../images/seo-image.png"

const blog = (props) => {
  const { data, pageContext } = props;
  const posts = data.allStrapiPost.nodes;
  const colorFondo = "#031fff";
  //const colorFondo = "#031fff";
  console.log(posts);

  return (
    <React.Fragment>
      <div>
        
      <div
        className="image"
        style={{
          
          background: "rgba(76, 175, 80, 0.1)",

        
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage:`url(${bannerBitacora})`,
          transition: "background 0.3s  borderRadius 0.3s",
          height: "450px",
          width: "100%",
        }}
      >
        <div className="row"
         
        >
          <div className="opacitBanner" >
          <h1 className="titulo-post2">La Bitácora</h1> 
          <h3 style={{ color: "#fff", fontSize: "25px",fontWeight:"300"}}>Nuestro Blog de Contenidos Digitales para que siempre estes al día con nuestras Noticias</h3>
          </div>
        </div>
      </div>
      <Header colorFondo={colorFondo} />
      </div>
    <BlogLayout>
     <Seo 
      title="Blog Agencia Los Navegantes"
      description="Ecommerce, Marketing, Analitica, aumentar ventas online"
      image={imageBlog}
     >
          

     </Seo>
      <PostList posts={posts} />
      <Pagination  pageContext={pageContext} />
      
    </BlogLayout>

    
    </React.Fragment>
    
  );
};

export default blog;
export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allStrapiPost(
      skip: $skip
      limit: $limit
      sort: { fields: id_post, order: ASC }
    ) {
      nodes {
        id
       
        id_post
        titulo_post
        url
        contenido_1
        seo_title
        seo_descripcion
        miniatura {
          url
        }
        image_banner {
          url
        }
      }
    }
  }
`;
