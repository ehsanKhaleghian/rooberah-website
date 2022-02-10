import React from 'react';
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function SiteMap(props) {
    return (
        <Grid
            item
            xs={12}
            md={6}
            sx={{display: "flex", justifyContent: "flex-end", mt: {xs: 8, md: 0}}}
        >
            <Stack alignItems={"flex-end"} justifyContent={"flex-end"}>
                <Box sx={{direction: "rtl"}}>
                    <Typography
                        sx={{
                            fontSize: 18,
                            color: "gray.main"
                        }}
                    >
                        نقشه سایت
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 24,
                            color: "white",
                            mt: 1
                        }}
                    >
                        موقعیت‌های شغلی
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 24,
                            color: "white",
                            mt: 1
                        }}
                    >
                        تیم
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 24,
                            color: "white",
                            mt: 1
                        }}
                    >
                        تماس با ما
                    </Typography>
                </Box>
            </Stack>
        </Grid>
    );
}

export default SiteMap;
