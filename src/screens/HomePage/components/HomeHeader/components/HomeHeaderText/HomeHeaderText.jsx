import React from 'react';
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

function HomeHeaderText(props) {
    return (
        <Grid item sm={5} xs={12}>
            <Stack direction="row" alignItems="center" justifyContent="center">
                <Box sx={{
                    width: {
                        lg: 400,
                        md: 300,
                        sm: "100%",
                    },
                    mt: {
                        md: 4,
                        sm: 2,
                        xs: 1
                    },
                    px: {
                        md: 2,
                        sm: 1
                    },
                    position: "relative"

                }}>
                    <Typography sx={{
                        direction: "rtl",
                        fontSize: "18px",
                        fontWeight: "bold",
                        position: "relative",
                        zIndex: 10,
                        textAlign: "justify"
                    }}>
                        تیم روبه‌راه حول دغدغه ساختن ایرانی بهتر شکل گرفت؛ جایی که هر کسی از بودن در آن خوشحال باشد و به
                        فکر
                        جایی دیگر نباشد.
                    </Typography>
                    <Box
                        sx={{
                            width: 29,
                            height: 53,
                            backgroundColor: "white",
                            borderRadius: 20,
                            position: "absolute",
                            top: {
                                md: -10,
                                sm: -10,
                                xs: -9
                            },
                            right: {
                                md: 7,
                                sm: -2,
                                xs: -13
                            }
                        }}/>
                </Box>
            </Stack>
        </Grid>
    );
}

export default HomeHeaderText;