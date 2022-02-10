import React from 'react';
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function ContactUs(props) {
    return (
        <Grid
            container
            xs={12}
            md={6}
        >
            <Grid
                item
                xs={12}
            >
                <Stack
                    sx={{
                        flexDirection: {xs: "column", md: "row-reverse"}
                    }}
                >
                    <Box sx={{direction: "rtl", mt: {xs: 8, md: 0}}}>
                        <Typography
                            sx={{
                                fontSize: 18,
                                color: "gray.main"
                            }}
                        >
                            شبکه‌های اجتماعی
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 24,
                                color: "white",
                                mt: 2
                            }}
                        >
                            توییتر
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 24,
                                color: "white",
                                mt: 2
                            }}
                        >
                            لینکدین
                        </Typography>
                    </Box>
                    <Box sx={{direction: "rtl", mr: {xs: 0, md: 10}, mt: {xs: 8, md: 0}}}>
                        <Typography
                            sx={{
                                fontSize: 18,
                                color: "gray.main"
                            }}
                        >
                            ارتباط با ما
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 24,
                                color: "white",
                                mt: 2
                            }}
                        >
                            salam@ruberah.co
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 24,
                                color: "white",
                                mt: 2
                            }}
                        >
                            02177777777
                        </Typography>
                    </Box>
                </Stack>
            </Grid>
            <Grid
                item
                xs={12}
            >
                <Box sx={{direction: "rtl", mt: 7}}>
                    <Typography
                        sx={{
                            fontSize: 18,
                            color: "gray.main"
                        }}
                    >
                        آدرس
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 24,
                            color: "white",
                            mt: 2
                        }}
                    >
                        تهران، خیابان آزادی، خیابان دکتر حبیب‌الله، خیابان شهید قاسمی، کوچه گلستان، پلاک 1، طبقه اول
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

export default ContactUs;