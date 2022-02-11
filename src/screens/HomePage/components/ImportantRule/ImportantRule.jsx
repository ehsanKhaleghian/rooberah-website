import React from 'react';
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "../../../generalComponents/Container";
import {useNavigate} from "react-router-dom";

function ImportantRule() {
    const navigate = useNavigate();
    const contactUsHandler = () => {
        navigate("/contactus")
    }
    return (
        <CardMedia
            image={require("../../../../assets/images/bg-blue/rectangle-copy@3x.png")}
            sx={{py: {lg: 11, md: 9, sm: 7, xs: 5}, position: "relative"}}
        >
            <Container>
                <Grid container direction={"row-reverse"} sx={{position: "relative", zIndex: 10}}>
                    <Grid Item xs={12} lg={4} sm={5}>
                        <Typography sx={{
                            fontSize: {lg: 75, md: 65, sm: 55, xs: 60},
                            fontWeight: "bold",
                            color: "black.main",
                            direction: "rtl"
                        }}>
                            یک قانون مهــــــم
                        </Typography>
                    </Grid>
                    <Grid Item xs={12} lg={8} sm={7}>
                        <Typography sx={{fontSize: {lg: 45, md: 40, sm: 35, xs: 40}, color: "white", direction: "rtl"}}>
                            چیزی اگر بلد باشیم به دیگران یاد می‌دیم، چون در مسیر موفقیت افراد زیادی به ما بی‌منت کمک
                            کردن.
                        </Typography>
                        <Stack
                            onClick={contactUsHandler}
                            direction={"row"} alignItems={"flex-start"}
                            sx={{mt: 4, textDecoration: "underline", textDecorationColor: "white", cursor: "pointer"}}
                        >
                            <Typography
                                sx={{fontSize: 24, color: "white", direction: "rtl"}}>
                                تماس با ما
                            </Typography>
                            <Box sx={{
                                width: 16,
                                height: 16,
                                borderBottom: "2px solid white",
                                borderRight: "2px solid white",
                                transform: "rotate(-45deg)",
                                mt: 1,
                                ml: 1
                            }}>

                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{
                backgroundImage: `url(${require("../../../../assets/images/bg-lines/importantRule/importantRule.png")})`,
                width: {lg: "40%", md: "50%", sm: "60%", xs: "100%"},
                height: "100%",
                backgroundSize: "cover",
                position: "absolute",
                left: 0,
                bottom: 0
            }}/>
        </CardMedia>
    );
}

export default ImportantRule;