import * as React from 'react';
import Box from '@mui/material/Box';
import NavbarTabs from "./components/NavbarTabs/NavbarTabs";
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";
import {CardMedia, Stack} from "@mui/material";
import {useNavigate} from "react-router-dom";
import navbarOnChange from "../../helpers/navbarOnChange";

export default function Navbar({tabIndex}) {
    const navigate = useNavigate();
    const logoOnclick = () => {
        navigate(navbarOnChange(4))
    }
    return (
        <Box>
            <Box sx={{borderBottom: 1, borderColor: 'white', py: {xs: 1, sm: 2, md: 3}}}>
                <Stack direction="row" justifyContent="space-between">
                    <NavbarTabs tabIndex={tabIndex}/>
                    <NavbarMenu tabIndex={tabIndex}/>
                    <Box sx={{
                        width: {
                            md: 200,
                            sm: 150,
                            xs: 200
                        },
                        height: 39,
                        "& .MuiCardMedia-root ": {
                            width: "100%",
                            height: "100%",
                            backgroundSize: "contain"
                        }
                    }}
                         onClick={logoOnclick}
                    >
                        <CardMedia
                            image={require('../../assets/images/ruberah@3x.png')} // require image
                        />
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}