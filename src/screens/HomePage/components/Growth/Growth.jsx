import React from 'react';
import CardMedia from "@mui/material/CardMedia";
import Container from "../../../generalComponents/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";

function Growth(props) {
    const navigate = useNavigate();
    const jobOpportunities = () => {
        navigate("/jobs")
    }
    return (
        <CardMedia
            image={require("../../../../assets/images/bg-blue/rectangle-copy@3x.png")}
            sx={{py: {lg: 11, md: 9, sm: 7, xs: 5}, position: "relative"}}
        >
            <Container>
                <Stack
                    sx={{
                        flexDirection: {xs: "column", md: "row-reverse"},
                        alignItems: {xs: "baseline", md: "flex-end"},
                        justifyContent: "space-between"
                    }}
                >
                    <Typography sx={{
                        fontSize: {lg: 75, md: 65, sm: 58, xs: 50},
                        color: "white",
                        direction: "rtl",
                        fontWeight: "bold",
                        position: "relative",
                        zIndex: 11
                    }}>
                        ما برای رشد، به حضــور شما کنار خودمان نیاز داریم.
                    </Typography>
                    <Stack
                        direction={"row"}
                        alignItems={"flex-start"}
                        sx={{mt: 4, textDecoration: "underline", textDecorationColor: "white", minWidth: "fit-content"}}
                    >
                        <Typography
                            onClick={jobOpportunities}
                            sx={{
                                fontSize: 24,
                                color: "white",
                                direction: "rtl",
                                position: "relative",
                                zIndex: 11,
                                cursor: "pointer"
                            }}>
                            موقعیت‌های شغلی
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
                </Stack>
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

export default Growth;