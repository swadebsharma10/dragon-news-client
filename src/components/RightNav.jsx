import { Button, ButtonGroup, ListGroup } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import BrandCarusel from "./BrandCarusel";

const RightNav = () => {
    return (
        <section>
           
           <ButtonGroup vertical  className="mb-3">
           <Button className="mb-3" variant="outline-primary">
           <FaGoogle/>  Login With Google</Button>
           <Button variant="outline-danger">
           <FaGithub />  Login With Github</Button>
         </ButtonGroup>
          
           <h5 className="my-4">Find Us On</h5>
           <div>
           <ListGroup>
           <ListGroup.Item className="mb-2"><FaFacebook/> FaceBook</ListGroup.Item>
           <ListGroup.Item className="mb-2"><FaTwitter/> Twitter</ListGroup.Item>
           <ListGroup.Item className="mb-2"><FaYoutube/> Youtube</ListGroup.Item>
           <ListGroup.Item className="mb-2"><FaWhatsapp/> WhatsApp</ListGroup.Item>
           <ListGroup.Item className="mb-2"><FaLinkedin/> Linkedin</ListGroup.Item>
         </ListGroup>
           </div>

          <BrandCarusel></BrandCarusel>

        </section>
    );
};

export default RightNav;