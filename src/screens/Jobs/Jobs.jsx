import React from 'react';
import Container from "../generalComponents/Container";
import Navbar from "../Navbar/Navbar";

function Jobs(props) {
    return (
        <Container>
            <Navbar tabIndex={2}/>
            <h1>JOBS</h1>
        </Container>
    );
}

export default Jobs;