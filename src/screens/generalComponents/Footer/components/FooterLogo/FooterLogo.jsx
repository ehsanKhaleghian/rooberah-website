import React from 'react';
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function FooterLogo(props) {
    return (
        <Grid container direction={"row-reverse"} sx={{mb: {xs: 0, md: 10}}}>
            <Grid
                item
                xs={12}
            >
                <Stack direction={"row-reverse"}>
                    <Box
                        sx={{
                            width: 77,
                            height: 98,
                            backgroundImage: `url(${require("../../../../../assets/images/images/footerLogo.png")})`,
                            backgroundSize: "contain",
                            backgroundPosition: "center"

                        }}
                    />
                    <Box
                        sx={{
                            width: 3,
                            backgroundColor: "white",
                            mx: 3
                        }}
                    />
                    <Box sx={{direction: "rtl"}}>
                        <Typography
                            sx={{
                                fontSize: 30,
                                fontWeight: "bold",
                                color: "white"
                            }}
                        >
                            مسیر موفقیت با
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 30,
                                fontWeight: "bold",
                                color: "white"
                            }}
                        >
                            همراهان خوب می‌چسبه!
                        </Typography>
                    </Box>
                </Stack>

            </Grid>
        </Grid>
    );
}

export default FooterLogo;