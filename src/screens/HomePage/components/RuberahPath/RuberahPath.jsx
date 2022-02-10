import React from 'react';
import Box from "@mui/material/Box";
import PathHeader from "./components/PathHeader/PathHeader";
import PathBody from "./components/PathBody/PathBody";

function RuberahPath(props) {
    return (
        <Box
            sx={{
                backgroundImage: `url(${require("../../../../assets/images/bg-gray/bg-gray.png")})`,
                backgroundSize: "cover",
                pt: {lg: 6.5, md: 5.5, sm: 4.5, xs: 3.5},
                pb: {lg: 12.4, md: 10, sm: 8, xs: 6}
            }}
        >
            <PathHeader/>
            <PathBody/>
        </Box>
    );
}

export default RuberahPath;