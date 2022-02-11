import React from 'react';
import Container from "../../../generalComponents/Container";
import Box from "@mui/material/Box";
import Teammate from "./Teammate/Teammate";

function RuberahTeam(props) {
    return (
        <Container>
            <Box
                sx={{
                    px: {lg: 8.2, md: 7, sm: 6, xs: 4},
                    pb: {lg: 17.3, md: 14, sm: 10, xs: 8},
                }}
            >
                <Teammate/>
            </Box>

        </Container>
    );
}

export default RuberahTeam;