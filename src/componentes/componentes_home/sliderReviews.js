import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../global-styles/layout"


import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";


// install Swiper modules
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);
const sliderReviews = () => {


  
  return (
    <div className="paddslidereviews"   >
<div className="revDiv"  >


<h1 style={{marginTop:"30px",marginBottom:"40px"}}    className="somospTitulo  encabezado">Testimonios que nos enorgullecen ❤️</h1>
 
 <Swiper   id="swiperReviews"   navigation={true}    
              spaceBetween={40} autoplay={{
                delay: 4000
            }}
            modules={[Pagination]}
   
        breakpoints={{
          "360": {
            "slidesPerView": 1,
            "spaceBetween": 10
          },
          "400": {
            "slidesPerView": 1,
            "spaceBetween": 10
          },
          "640": {
            "slidesPerView": 1,
            "spaceBetween": 10
          },
          "768": {
            "slidesPerView": 1,
            "spaceBetween": 10
          },
          "1024": {
            "slidesPerView": 3,
          }
        }}
      
        className="poupau mySwiper" >
        

        
        
        
        <SwiperSlide>  <img

alt=""
  className=" mmimm lazyload img-fluid "
  src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-10.png?v=1710265746"

></img>
</SwiperSlide>
<SwiperSlide>  <img


alt=""
  className="mmimm lazyload img-fluid"
  src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-13.png?v=1710265747"

></img>

</SwiperSlide>
<SwiperSlide>  <img


alt=""
  className="mmimm lazyload img-fluid"
  src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-01_ff645da2-f555-4c41-98af-3bafc441efe7.png?v=1710334768"

></img>

</SwiperSlide>
<SwiperSlide>  <img

alt=""
className=" mmimm lazyload img-fluid "
src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-19.webp?v=1719866957"

></img>
</SwiperSlide>
<SwiperSlide>  <img


alt=""
  className="mmimm lazyload img-fluid"
  src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-06.png?v=1710265746"

></img>
   
</SwiperSlide>
<SwiperSlide>  <img

alt=""
className=" mmimm lazyload img-fluid "
src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-20.webp?v=1719866957"

></img>
</SwiperSlide>
<SwiperSlide>  <img


alt=""
  className="mmimm lazyload img-fluid"
  src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-16.png?v=1710265746"

></img>

</SwiperSlide>


<SwiperSlide>  
<div >
<img
alt=""
  className="mmimm lazyload img-fluid"
  src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-03.png?v=1710265747"

></img>
             
</div>
</SwiperSlide>
<SwiperSlide>  <img


alt=""
  className="mmimm lazyload img-fluid"
  src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-14_1.png?v=1710341613"

></img>
  
</SwiperSlide>
<SwiperSlide> 


<img


alt=""
  className=" mmimm lazyload img-fluid"
  src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-02.png?v=1710265746"

></img>
      
</SwiperSlide>


<SwiperSlide>  <img


alt=""
  className="mmimm  lazyload img-fluid"
  src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-07.png?v=1710265746"

></img>

</SwiperSlide>
<SwiperSlide>  <img


alt=""
  className="mmimm lazyload img-fluid"
  src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-05_5fbbea40-3903-45d2-8398-04bbd97665bf.png?v=1710334769"

></img>

</SwiperSlide>
<SwiperSlide>  
<img                  

alt=""
className="mmimm lazyload img-fluid"
src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-11.png?v=1710265746"                               
></img>
  

</SwiperSlide>
<SwiperSlide>  
<img                  

alt=""
className="mmimm lazyload img-fluid"
src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-08.png?v=1710265747"                               
></img>
  

</SwiperSlide>

<SwiperSlide>  
<img                  

alt=""
className="mmimm lazyload img-fluid"
src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-15_cb8e760f-367e-4176-be54-09d5b91399ba.png?v=1710341613"                               
></img>
  

</SwiperSlide>
<SwiperSlide>  
<img                  

alt=""
className="mmimm lazyload img-fluid"
src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-12.png?v=1710265746"                               
></img>
  

</SwiperSlide>
<SwiperSlide>  <img

alt=""
className=" mmimm lazyload img-fluid "
src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-21.webp?v=1719866957"

></img>
</SwiperSlide>
<SwiperSlide>  <img

alt=""
className=" mmimm lazyload img-fluid "
src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-18.webp?v=1719866958"

></img>
</SwiperSlide>
<SwiperSlide>  
<img                  

alt=""
className="mmimm lazyload img-fluid"
src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-09.png?v=1710265746"                               
></img>
  

</SwiperSlide>

<SwiperSlide>  
<img                  

alt=""
className="mmimm lazyload img-fluid"
src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-04.png?v=1710265746"                               
></img>
  

</SwiperSlide>
<SwiperSlide>  
<img                  

alt=""
className="mmimm lazyload img-fluid"
src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-17.png?v=1710265746"                               
></img>
  

</SwiperSlide>
<SwiperSlide>  
  <img                  
                
                  alt=""
                  className="mmimm lazyload img-fluid"
                  src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-18.png?v=1722521892"                               
                  ></img>
                    

 </SwiperSlide>
 <SwiperSlide>  
  <img                  
                
                  alt=""
                  className="mmimm lazyload img-fluid"
                  src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/AGENCIA_-_Testimonios_AN-19_1.webp?v=1727101518"                               
                  ></img>
                    

 </SwiperSlide>
        
      </Swiper>

      </div>
    </div>
  );
};

export default sliderReviews;
