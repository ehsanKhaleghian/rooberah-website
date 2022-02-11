import React from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";

function TeamHeaderText() {
    return (
        <Grid
            container
            justifyContent={"center"}
            xs={12}
            md={5}
        >
            <Box
                sx={{
                    width: "100%",
                    height: 0,
                    pt: {md: "117.5%", xs: "70%"},
                    position: "relative",
                    direction: "rtl"
                }}
            >
                <Typography
                    sx={{
                        fontSize: {lg: 70, md: 55, sm: 55, xs: 50},
                        fontWeight: "bold",
                        color: "blue",
                        position: "absolute",
                        top: {md: "20.92%", xs: "5%"},
                        right: "24.2%"
                    }}
                >
                    ســـلام :
                    <Typography
                        sx={{
                            fontSize: {lg: 70, md: 55, sm: 70, xs: 50},
                            fontWeight: "bold",
                            color: "blue",
                            position: "absolute",
                            left: {lg: -25, sm: -25, xs: -19},
                            top: {md: 8, sm: -2, xs: 6}
                        }}
                    >
                        )
                    </Typography>
                </Typography>
                <Box
                    sx={{
                        position: "absolute",
                        top: {md: "56.42%", xs: "30%"},
                        right: "3.91%"
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: {lg: 45, md: 40, sm: 45, xs: 35},
                            fontWeight: "bold",
                            color: "black.1c",
                            position: "relative",
                            zIndex: 10
                        }}
                    >
                        انسان‌هایی که
                    </Typography>
                    <Box
                        sx={{
                            position: "absolute",
                            right: "-9%",
                            top: "-11%",
                            width: "20%",
                            height: "125%",
                            borderRadius: 7,
                            backgroundColor: "white"
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        color: "black.1c",
                        position: "absolute",
                        top: {md: "66.42%", xs: "45%"},
                        left: "13.4%",
                        display: "flex",
                        alignItems: "center",
                        minWidth: "fit-content"

                    }}
                >
                    <Typography
                        sx={{
                            fontSize: {lg: 70, md: 55, sm: 70, xs: 45},
                            fontWeight: "bold",
                            ml: 1
                        }}
                    >
                        روبه‌راه
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: {lg: 45, md: 40, sm: 45, xs: 35},
                            fontWeight: "bold",
                            minWidth: "fit-content"
                        }}
                    >
                        را ساختند
                    </Typography>
                </Box>
                <Typography
                    sx={{
                        fontSize: {lg: 45, md: 40, sm: 35, xs: 35},
                        fontWeight: "bold",
                        color: "black.1c",
                        position: "absolute",
                        top: {md: "84.94%", sm: "70%", xs: "65%"},
                        right: "34.43%",
                        minWidth: "fit-content"
                    }}
                >
                    و پیش می‌برند
                </Typography>
            </Box>
        </Grid>
    );
}

export default TeamHeaderText;