import React from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "../../../generalComponents/Container";

function CurrentTeam() {
    return (
        <Container>
            <Grid container direction={"row-reverse"} sx={{py: {lg: 14.2, md: 12.2, sm: 10, xs: 8}}}>
                <Grid container justifyContent={{md: "center", xs: "flex-end"}} alignItems={"center"} xs={12} md={3}>
                    <Box
                        sx={{
                            position: "relative",
                            pb: {xs: 2, md: 0}
                        }}
                    >
                        <Box
                            sx={{
                                width: "25%",
                                height: 0,
                                pt: "45%",
                                backgroundColor: "blue",
                                position: "absolute",
                                top: "3%",
                                right: "-14%",
                                borderRadius: 10,
                                zIndex: 1
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: {lg: 45, md: 40, xs: 35},
                                fontWeight: "bold",
                                color: "black.06",
                                position: "relative",
                                zIndex: 10
                            }}
                        >
                            تیم فعلی
                        </Typography>
                    </Box>
                </Grid>
                <Grid container justifyContent={"center"} alignItems={"center"} xs={12} md={9}>
                    <Typography
                        sx={{
                            direction: "rtl",
                            fontSize: {lg: 25, md: 20, xs: 20},
                            color: "black.06",
                            position: "relative",
                            textAlign: "justify",
                            zIndex: 10
                        }}
                    >
                        اسفند ۹۷ چهار نفر تصمیم گرفتن دغدغه مشترکشون رو در قالب یک کسب و کار پیگیری کنن. تیم روبه‌راه
                        حول
                        دغدغه ساختن ایرانی بهتر شکل گرفت؛ جایی که هر کسی از بودن در اون خوشحال باشه و به فکر جایی دیگه
                        نباشه.
                    </Typography>
                </Grid>

            </Grid>
        </Container>
    );
}

export default CurrentTeam;