import React from 'react';
import Container from "../generalComponents/Container";
import Navbar from "../Navbar/Navbar";

function Notes(props) {
    return (
        <Container>
            <Navbar tabIndex={1}/>
            <h1>NOTES</h1>
        </Container>
    );
}

export default Notes;