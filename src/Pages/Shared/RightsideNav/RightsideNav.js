import React from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { BsFacebook, BsGithub, BsGoogle, BsLinkedin, BsTwitch, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightsideNav = () => {
  return (
    <div>
        <h3>Right Nav</h3>
      <ButtonGroup vertical>
        <Button variant="outline-primary" className="mb-2 rounded w-100"><BsGoogle></BsGoogle> SingIn with Google </Button>
        <Button variant="outline-dark" className="rounded"><BsGithub ></BsGithub> SignIn with Github</Button>
      </ButtonGroup>
      {/* find on us */}
      <h5 className="mt-3">Find on Us</h5>
      <ListGroup className="mt-3">
      <ListGroup.Item><BsFacebook></BsFacebook> Facebook</ListGroup.Item>
      <ListGroup.Item><BsTwitter></BsTwitter> Twitter</ListGroup.Item>
      <ListGroup.Item><BsWhatsapp></BsWhatsapp> Whatsapp</ListGroup.Item>
      <ListGroup.Item><BsLinkedin></BsLinkedin> Linkedin</ListGroup.Item>
      <ListGroup.Item><BsTwitch></BsTwitch>Twitch</ListGroup.Item>
    </ListGroup>
   {/* corousel item */}
    <div className="mt-4">
        <BrandCarousel></BrandCarousel>
    </div>
    </div>
  );
};

export default RightsideNav;
