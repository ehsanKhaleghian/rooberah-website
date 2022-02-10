import React, {useEffect} from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Aos from "aos"
import "aos/dist/aos.css"

function Season({left = false, dates = [], months = [], bodies = [], image, bgPt = "85%", sx = {}}) {
    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])
    return (
        <Grid container direction={left ? "row" : "row-reverse"} sx={{...sx}}>
            <Grid Item xs={12} md={6}>
                {dates.map((date, i) => {
                    return (
                        <Stack direction={"row-reverse"} data-aos={"fade-up"} sx={{direction: left ? "rtl" : "ltr"}}>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: {lg: 65, md: 58, sm: 50, xs: 50},
                                    width: 70
                                }}
                            >
                                {date}
                            </Typography>
                            <Box
                                sx={{
                                    width: 49,
                                    minWidth: 49,
                                    height: 5,
                                    backgroundColor: "black.main",
                                    mt: 4,
                                    mx: 2
                                }}
                            />
                            <Box
                                sx={{
                                    mt: 1.9,
                                    direction: left ? "ltr" : "rtl"
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: 30
                                    }}
                                >
                                    {months[i]}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: 20,
                                        mt: 2,
                                        textAlign: "justify"
                                    }}
                                >
                                    {bodies[i]}
                                </Typography>
                            </Box>

                        </Stack>
                    )
                })}

            </Grid>
            <Grid Item data-aos={"flip-up"} xs={12} md={6}
                  sx={{p: 2, display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Box
                    sx={{
                        backgroundImage: `url(${image})`,
                        width: "100%",
                        height: 0,
                        pt: bgPt,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                />
            </Grid>
        </Grid>
    );
}

export default Season;