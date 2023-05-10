
import {  faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import {  faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import '../components/css/custom.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from 'react-bootstrap'

function RedesSociales() {
    return (
        <div>
         <Container className="text-center mx-auto p-5">                        
                       <div >
                        <a href="https://web.facebook.com/profile.php?id=100063641346709" id="social-fb" className="fa-2xl p-2">
                            <FontAwesomeIcon icon={ faFacebookSquare }></FontAwesomeIcon>
                        </a>
                        <a href="https://www.instagram.com/colegioconcepcioncgpala/" id="social-int" className="fa-2xl p-2">
                            <FontAwesomeIcon icon={ faInstagramSquare }></FontAwesomeIcon>
                        </a>
                        <a href="https://chat.whatsapp.com/CsxUHK9d4v84CfkxKJFT52" id="social-em" className="fa-2xl p-2">
                            <FontAwesomeIcon icon={ faWhatsappSquare }></FontAwesomeIcon>
                        </a>
                       </div>
            </Container>
        </div>
      
       
    );
  }
  
  export default RedesSociales;



