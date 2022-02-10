import React from 'react';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function PathHeader(props) {
    return (
        <Box>
            <Stack direction={"row"} alignItems={"center"} sx={{direction: 'rtl'}}>
                <Box
                    sx={{
                        width: "10%",
                        height: 4,
                        backgroundColor: "white"
                    }}
                />
                <Typography
                    sx={{
                        fontSize: {lg: 45, md: 40, sm: 35, xs: 30},
                        px: {lg: 2.8, md: 2.2, sm: 1.5, xs: 1},
                        fontWeight: "bold"
                    }}
                >
                    مسیر
                </Typography>
                <Box
                    sx={{
                        flexGrow: 1,
                        height: 4,
                        backgroundColor: "white"
                    }}
                />
            </Stack>
            <Stack direction={"row"} alignItems={"center"} sx={{direction: 'rtl'}}>
                <Box
                    sx={{
                        width: "20%",
                        height: 4,
                        backgroundColor: "white"
                    }}
                />
                <Typography
                    sx={{
                        fontSize: {lg: 75, md: 65, sm: 55, xs: 45},
                        px: {lg: 2.8, md: 2.2, sm: 1.5, xs: 1},
                        color: "blue",
                        fontWeight: "bold"
                    }}
                >
                    روبه‌راه
                </Typography>
                <Box
                    sx={{
                        flexGrow: 1,
                        height: 4,
                        backgroundColor: "white"
                    }}
                />
            </Stack>
            <Stack direction={"row"} alignItems={"center"} sx={{direction: 'rtl'}}>
                <Box
                    sx={{
                        width: "15%",
                        height: 4,
                        backgroundColor: "white"
                    }}
                />
                <Typography
                    sx={{
                        fontSize: {lg: 45, md: 40, sm: 35, xs: 30},
                        px: {lg: 2.8, md: 2.2, sm: 1.5, xs: 1},
                        fontWeight: "bold"
                    }}
                >
                    آغاز تا الآن
                </Typography>
                <Box
                    sx={{
                        flexGrow: 1,
                        height: 4,
                        backgroundColor: "white"
                    }}
                />
            </Stack>
        </Box>
    );
}

export default PathHeader;