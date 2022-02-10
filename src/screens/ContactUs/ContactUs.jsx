import React from 'react';
import Navbar from "../Navbar/Navbar";
import Container from "../generalComponents/Container";

function ContactUs(props) {
    return (
        <Container>
            <Navbar tabIndex={0}/>
            <h1>Contact Us</h1>
        </Container>
    );
}

export default ContactUs;