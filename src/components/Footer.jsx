import { Fragment } from "react/cjs/react.development"
import "../styles/Footer.css"
import logo from '../logoblanco.png';
import { FaFacebookF,FaInstagram,FaTwitter,FaWhatsapp,FaYoutube} from "react-icons/fa";

export function Footer(){
    return(
    <Fragment>
        <div>soy el footer</div>
        <div className="footers">
            <div className="pie-pagina">
                <div className="footer">
                    <a href="">
                        {/* <img src="img/logoblanco.png" alt="logoacamachon"> */}
                        <img src={logo} height='100'/>
                    </a>
                </div>
                <div className="">
                    <h3 className="siguenos"><strong> SOBRE NOSOSTROS</strong></h3>
                    <p className="parrafo"> ACamachoN es una galeria virtual, en 
                        nuestra galeria de arte online podrá encontrar una gran variedad
                        de pinturas al óleo de diferentes estilos y temáticas:bodegones,
                        marinas, paisajes, etc.
                    </p>                     
                </div>
                <div className="text-center">
                    <ul className="navfooter text-white">
                        <h3 className="siguenos"><strong> INTERES</strong></h3>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="obras.html">Obras</a></li>
                        <li><a href="exposiciones.html">Exposiciones</a></li>
                        <li><a href="reconocimientos.html">Reconocimientos</a></li>
                        <li><a href="contacto.html">Contactos</a> </li>
                    </ul>
                </div>
                <div>
                    <h3 className="siguenos"><strong>SIGUENOS</strong> </h3>
                    <div className="socials">
                        <FaFacebookF/>
                        <FaInstagram/>
                        <FaTwitter/>
                        <FaWhatsapp/>
                        <FaYoutube/>
                        <a href="https://www.facebook.com/alexcamacho.artistaplastico"><i className="fa-brands fa-facebook"></i></a>
                        <a href="http://wa.me/+51978374972"><i className="fa-brands fa-whatsapp"></i></a>
                        <a href="https://www.youtube.com/channel/UCaW5UsTSNva5ayCb6tfI4Yg"><i className="fa-brands fa-youtube"></i></a>
                        <a href="https://www.instagram.com/invites/contact/?i=1oij3b98bdu0s&utm_content=1mrcejp"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}