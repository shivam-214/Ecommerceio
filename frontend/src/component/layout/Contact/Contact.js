import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:myecommerce214@gmail.com">
        <Button>Contact: myecommerce214@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
