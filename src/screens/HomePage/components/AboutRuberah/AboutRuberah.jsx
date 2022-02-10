import React from 'react';
import Container from "../../../generalComponents/Container";
import Box from "@mui/material/Box";
import AboutTitle from "./components/AboutTitle/AboutTitle";
import AboutBody from "./components/AbouteBody/AboutBody";

function AboutRuberah() {
    return (
        <Container>
            <Box
                sx={{
                    pt: {lg: 20, md: 17, sm: 12, xs: 10},
                    pb: {lg: 23, md: 20, sm: 17, xs: 13},
                    px: {lg: 7.8, md: 6.8, sm: 5, xs: 4}
                }}
            >
                <AboutTitle/>
                <AboutBody/>
            </Box>
        </Container>
    );
}

export default AboutRuberah;