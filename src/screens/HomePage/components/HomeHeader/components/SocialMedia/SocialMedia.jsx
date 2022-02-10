import React from 'react';
import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";

function SocialMedia(props) {
    return (
        <Stack direction={"row"} sx={{mt: {xs: -0.5, md: -4}}}>
            <CardMedia
                image={require("../../../../../../assets/images/social/twitter.png")}
                sx={{width: 32, height: 32}}
            />
            <CardMedia
                image={require("../../../../../../assets/images/social/linedin.png")}
                sx={{width: 32, height: 32, ml: 2.5}}
            />
        </Stack>
    );
}

export default SocialMedia;