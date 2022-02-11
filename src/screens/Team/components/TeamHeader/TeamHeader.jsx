import React from 'react';
import Grid from "@mui/material/Grid";
import TeamHeaderPhoto from "./components/TeamHeaderPhoto/TeamHeaderPhoto";
import TeamHeaderText from "./components/TeamHeaderText/TeamHeaderText";
import bgGray from "../../../../assets/images/bg-gray/bg-gray.png";
import Navbar from "../../../Navbar/Navbar";
import Container from "../../../generalComponents/Container";

function TeamHeader() {
    return (
        <Container
            sx={{
                backgroundImage: `url(${bgGray})`,
                backgroundSize: "contain",
            }}
        >
            <Navbar dividerColor={"black.1c"} tabIndex={3}/>
            <Grid
                container
                direction={"row-reverse"}
                sx={{
                    pt: {lg: 12.2, md: 10, sm: 8, xs: 6},
                    pb: {lg: 15.3, md: 12.3, sm: 10, xs: 8}
                }}
            >
                <TeamHeaderText/>
                <TeamHeaderPhoto/>
            </Grid>
        </Container>
    );
}

export default TeamHeader;