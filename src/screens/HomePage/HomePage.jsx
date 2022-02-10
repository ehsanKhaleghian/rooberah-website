import React from 'react';
import Navbar from "../Navbar/Navbar";
import CardMedia from "@mui/material/CardMedia";
import HomeHeader from "./components/HomeHeader/HomeHeader";
import Start from "./components/Start/Start";
import {Box} from "@mui/system";

function HomePage(props) {
    return (
        <Box>
            <CardMedia image={require("../../assets/images/bg-blue/rectangle-copy@3x.png")} sx={{
                px: {
                    md: 10,
                    sm: 4,
                    xs: 3
                },
                height: "auto"
            }}
            >
                <Navbar tabIndex={4}/>
                <HomeHeader/>
            </CardMedia>
            <Start/>
        </Box>

    );
}

export default HomePage;