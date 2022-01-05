import React from "react";
import { Link } from "gatsby";
import { Modal, Button } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../componentes/global-styles/estilo.scss"









export const SectionVideo = (props) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{paddingTop:"50px",paddingBottom:"80px",background:props.colorFondo}}>
      <div
        className="modal-video"
        style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
           marginLeft:"10px", marginRight:"10px",
          textAlign: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat ",
          backgroundPosition: "center",
          height: "400px",
          backgroundImage: `url(https://agencia-navegantes.s3.amazonaws.com/imgvideo2_1_f7cace4ae8.jpg)`,
        }}
      >
        <Button
          variant="primary"
          style={{
           
            background: "transparent",
            border: "none",
          }}
          onClick={handleShow}
        >
          <i
            className="bi bi-play-circle"
            style={{ color: "#FFFD03", fontSize: "100px" }}
          ></i>
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
        <div class="video-container">
        <iframe  src="https://www.youtube.com/embed/dj34vdkvyjU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
          <Button
            style={{
              background: "transparent",
              border: "none",
              fontSize: "50px",
              marginTop: "-90%",
            }}
            onClick={handleClose}
          >
            <i className="bi bi-x"></i>
          </Button>
        </Modal.Body>
      </Modal>
      <div style={{justifyContent:"center", display:"flex", textAlign: "center", paddingTop: "25px" }}>
          <h2 className="titulo-video"  >¿Quieres saber más sobre nuestra Agencia?</h2>
          
          <div className="link-video"  style={{  justifyContent:"center",  marginTop:"40px" ,position:"absolute"}}>
          <Link to="https://www.youtube.com/channel/UCjpbMe-8c2GWVB8JcZ1D-cQ"
          className=" estiloLink2 "
          style={{
            lineHeight: 3,
            color: "#FA5983",
            fontSize: "25px",
            fontWeight: "700",
            textDecoration: "none",
          }}>
        Visita nuestro Canal
            <i
              className="bi bi-arrow-right"
              style={{ marginTop: "5px", paddingLeft: "10px" }}
            ></i>
          </Link>
          </div>
       
        </div>
    </div>
  );
};

export default SectionVideo;
