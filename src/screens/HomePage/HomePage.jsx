import React from 'react';
import Navbar from "../Navbar/Navbar";
import CardMedia from "@mui/material/CardMedia";
import HomeHeader from "./components/HomeHeader/HomeHeader";
import Start from "./components/Start/Start";
import {Box} from "@mui/system";
import ImportantRule from "./components/ImportantRule/ImportantRule";
import AboutRuberah from "./components/AboutRuberah/AboutRuberah";
import RuberahPath from "./components/RuberahPath/RuberahPath";
import Growth from "./components/Growth/Growth";
import Footer from "../generalComponents/Footer/Footer";

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
            <ImportantRule/>
            <AboutRuberah/>
            <RuberahPath/>
            <Growth/>
            <Footer/>
        </Box>

    );
}

export default HomePage;