import React from 'react';
import Grid from "@mui/material/Grid";

function Teammate({left = false}) {
    return (
        <Grid container direction={left ? "row-reverse" : "row"}>
            <Grid
                container
                xs={12}
                md={7}
                sx={{height: 40, backgroundColor: "yellow"}}
            >

            </Grid>
            <Grid
                container
                xs={12}
                md={5}
                sx={{height: 40, backgroundColor: "red"}}
            >

            </Grid>
        </Grid>
    );
}

export default Teammate;