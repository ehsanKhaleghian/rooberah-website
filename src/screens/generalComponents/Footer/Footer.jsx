import React from 'react';
import Container from "../Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FooterLogo from "./components/FooterLogo/FooterLogo";
import SiteMap from "./components/SiteMap/SiteMap";
import ContactUs from "./components/ContactUs/ContactUs";

function Footer(props) {
    return (
        <Container
            sx={{
                backgroundColor: "black.1c",
            }}
        >
            <Box
                sx={{
                    p: {lg: 9.5, md: 8, sm: 7, xs: 5}
                }}
            >
                <Grid container>
                    <FooterLogo/>
                    <Grid container direction={"row-reverse"}>
                        <SiteMap/>
                        <ContactUs/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Footer;