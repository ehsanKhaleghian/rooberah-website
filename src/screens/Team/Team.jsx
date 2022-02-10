import React from 'react';
import Container from "../generalComponents/Container";
import Navbar from "../Navbar/Navbar";

function Team(props) {
    return (
        <Container>
            <Navbar tabIndex={3}/>
            <h1>TEAM</h1>
        </Container>
    );
}

export default Team;