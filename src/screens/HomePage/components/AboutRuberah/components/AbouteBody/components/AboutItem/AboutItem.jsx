import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Aos from "aos"
import "aos/dist/aos.css"
import Paragraph from "../../../../../../../generalComponents/Paragraph";

function AboutItem({paragraphProps, children, imgPath = "", left = false}) {
    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])
    return (
        <Grid container direction={left ? "row" : "row-reverse"} sx={{mt: 10.9}}>
            <Grid
                Item
                md={6}
                xs={12}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center", ...(left ? {pr: {lg: 6, md: 4, sm: 2, xs: 0}} : {
                        pl: {
                            lg: 6,
                            md: 4,
                            sm: 2,
                            xs: 0
                        }
                    })
                }}
                data-aos={left ? "fade-right" : "fade-left"}
            >
                <Paragraph {...paragraphProps} boxSx={{textAlign: "justify"}}/>
            </Grid>
            <Grid Item md={6} xs={12} sx={{position: "relative"}} data-aos={left ? "fade-left" : "fade-right"}>
                <Box sx={{
                    width: "100%",
                    height: 0,
                    pt: "80%",
                    backgroundImage: `url(${imgPath})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    position: "relative",
                    backgroundPosition: "center",
                    zIndex: 10,
                }}/>
            </Grid>
        </Grid>
    );
}

export default AboutItem;