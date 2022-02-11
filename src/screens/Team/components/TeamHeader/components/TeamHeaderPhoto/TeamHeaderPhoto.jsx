import React from 'react';
import Box from "@mui/material/Box";
import bgLines from "../../../../../../assets/images/bg-lines/team.png";
import team6 from "../../../../../../assets/images/team/team-6.png";
import team7 from "../../../../../../assets/images/team/team-7.png";
import blueLaugh from "../../../../../../assets/images/laugh/blueLaugh.png";
import whiteLaugh from "../../../../../../assets/images/laugh/laugh.png";
import Grid from "@mui/material/Grid";

function TeamHeaderPhoto(props) {
    return (
        <Grid
            container
            justifyContent={"center"}
            xs={12}
            md={7}
        >
            <Box
                sx={{
                    width: "100%",
                    height: 0,
                    pt: "89.63%",
                    position: "relative",
                }}
            >
                <Box
                    sx={{
                        width: "61.22%",
                        height: "85.89%",
                        position: "absolute",
                        bottom: 0,
                        left: "16.19%",
                        zIndex: 10,
                        transform: "scaleX(-1)",
                        backgroundImage: `url(${bgLines})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                />
                <Box
                    sx={{
                        width: "62.93%",
                        height: "70.52%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 15,
                        backgroundImage: `url(${team6})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        borderRadius: 7
                    }}
                />
                <Box
                    sx={{
                        width: "45.17%",
                        height: "70.53%",
                        position: "absolute",
                        bottom: "8.08%",
                        right: 0,
                        zIndex: 20,
                        backgroundImage: `url(${team7})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        borderRadius: 7
                    }}
                />
                <Box
                    sx={{
                        width: "13.35%",
                        height: "8.24%",
                        position: "absolute",
                        bottom: "30.43%",
                        right: {md: "-6.67%", xs: 0},
                        zIndex: 25,
                        backgroundImage: `url(${blueLaugh})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />
                <Box
                    sx={{
                        width: "21.59%",
                        height: "13.31%",
                        position: "absolute",
                        bottom: "9.67%",
                        left: "5.4%",
                        zIndex: 25,
                        backgroundImage: `url(${blueLaugh})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />
                <Box
                    sx={{
                        width: "15.91%",
                        height: "9.83%",
                        position: "absolute",
                        top: "5.86%",
                        right: "14.63%",
                        zIndex: 25,
                        backgroundImage: `url(${whiteLaugh})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />

            </Box>
        </Grid>
    );
}

export default TeamHeaderPhoto;