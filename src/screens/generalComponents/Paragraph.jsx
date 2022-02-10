import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Paragraph({title, tFontSize = "30px", pBody, bFontSize = "20px", tMb = "12px", pMb = 0, titleSx, boxSx}) {
    return (
        <Box sx={{direction: "rtl", mb: pMb, ...boxSx}}>
            <Typography sx={{fontSize: tFontSize, fontWeight: "bold", mb: tMb, ...titleSx}}>
                {title}
            </Typography>
            <Typography sx={{fontSize: bFontSize}}>
                {pBody}
            </Typography>
        </Box>
    );
}

export default Paragraph;