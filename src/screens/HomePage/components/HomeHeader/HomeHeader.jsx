import React from 'react';
import {Grid} from "@mui/material";
import HomeHeaderText from "./components/HomeHeaderText/HomeHeaderText";
import HomeHeaderImg from "./components/HomeHeaderImg/HomeHeaderImg";
import SocialMedia from "./components/SocialMedia/SocialMedia";

function HomeHeader(props) {
    return (
        <Grid container direction="row-reverse" sx={{
            pt: {
                md: 11.2,
                sm: 7,
                xs: 3
            },
            pb: {
                md: 13.4,
                sm: 9,
                xs: 5
            }
        }}>
            <HomeHeaderText/>
            <HomeHeaderImg/>
            <SocialMedia/>
        </Grid>
    );
}

export default HomeHeader;