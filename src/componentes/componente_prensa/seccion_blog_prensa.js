import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Row, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "../global-styles/layout"
import UsePrensa from "../../hooks/usePrensa"
// import required modules
import { Grid, Pagination, Navigation } from "swiper";
const sectionBlogprensa = () => {
    const response = UsePrensa();
    const data = response.allStrapiPrensa.nodes[0].blog_prensa;
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
  
   
    return (
      <div className="padprensa" style={{marginTop:"40px"}}>
        <Container>

        <Swiper
        grid={{
          rows: 2,
        }}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}

        spaceBetween={30}
        pagination={pagination}
        modules={[Grid, Pagination]}
        className="mySwiper padswiper"
      >

        {data.slice(1).map((item, i) => (
            <SwiperSlide>
        <a href={item.link_blog_prensa}>
               <Card>

                 <Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src={item.link_imagen_post} />

                 <Card.Body id="ccccc" className="card-body-post" >
                  <span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>{item.etiqueta_blog_prensa}</span>
                   <Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
                    
                    {item.titulos_blog_prensa}
                   </Card.Title>
               
                   <Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text2">
                     {item.descripcion_blog_prensa}
                   </Card.Text>
        
             
                 </Card.Body>
               </Card>
               </a>
</SwiperSlide>
            ))}

            </Swiper>


</Container>



      </div>
    );
  };
  
  export default sectionBlogprensa;