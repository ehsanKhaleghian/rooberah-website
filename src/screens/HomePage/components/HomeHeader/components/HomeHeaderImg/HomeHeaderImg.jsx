import React from 'react';
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import SuccessPath from "./SuccessPath/SuccessPath";

function HomeHeaderImg(props) {
    return (
        <Grid item sm={7} xs={12} sx={{
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
            pb: {
                lg: 11.8,
                md: 9,
                sm: 5,
                xs: 3
            },
            pt: {xs: 16, sm: 0}
        }}>
            <CardMedia image={require("../../../../../../assets/images/team/team-1.jpg")}
                       sx={{
                           width: {lg: 550, md: 350, sm: 300, xs: "80%"},
                           height: {lg: 550, md: 350, sm: 300, xs: 250},
                           borderRadius: 5,
                           backgroundSize: "cover",
                           backgroundPosition: "center",
                           alignSelf: "flex-start",
                           position: "relative",
                           zIndex: 10,
                       }}>
                <CardMedia image={require("../../../../../../assets/images/laugh/laugh.png")} sx={{
                    width: {lg: 121, md: 121, sm: 80, xs: 50},
                    height: {lg: 67, md: 67, sm: 44, xs: 28},
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    alignSelf: "flex-start",
                    position: "absolute",
                    bottom: 17,
                    left: {lg: -60, md: -60, sm: -40, xs: -25},
                    zIndex: 10,
                }}/>
                <CardMedia image={require("../../../../../../assets/images/laugh/laugh.png")} sx={{
                    width: {lg: 71, md: 71, sm: 51, xs: 31},
                    height: {lg: 39, md: 39, sm: 28, xs: 17},
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    alignSelf: "flex-start",
                    position: "absolute",
                    top: {lg: "40%", md: "30%", sm: "10%", xs: 54},
                    left: {lg: -155, md: -120, sm: -90, xs: -70},
                    zIndex: 10,
                }}/>
                <SuccessPath/>
            </CardMedia>
            <CardMedia image={require("../../../../../../assets/images/bg-lines/header-bg-lines.png")}
                       sx={{
                           backgroundSize: "cover",
                           backgroundPosition: "center",
                           position: "absolute",
                           bottom: 0,
                           right: {lg: 302, md: 161, sm: 140, xs: 247},
                           width: {lg: 431, md: 331, sm: 280, xs: 200},
                           height: {lg: 543, md: 417, sm: 352, xs: 251}
                       }}>
            </CardMedia>
        </Grid>
    );
}

export default HomeHeaderImg;