import React from 'react';
import {Box, Typography} from "@mui/material";

function SuccessPath(props) {
    return (
        <div>
            <Typography
                sx={{
                    color: "white",
                    fontSize: {lg: 45, md: 40, sm: 35, xs: 30},
                    fontWeight: "bold",
                    position: "absolute",
                    top: {lg: 252, md: 160, sm: 146, xs: -152},
                    right: {lg: -500, md: -350, sm: -254, xs: 0}
                }}
            >
                مسیر موفقیت
            </Typography>
            <Box sx={{
                position: "absolute",
                top: {lg: 310, md: 195, sm: 180, xs: -100},
                right: {lg: -355, md: -260, sm: -223, xs: 32},
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: {xs: "fit-content", sm: "unset"}
            }}>

                <Typography sx={{
                    color: "black.main",
                    fontSize: {lg: 70, md: 65, sm: 55, xs: 32},
                    fontWeight: "bold",
                    textShadow: "3px 3px 0 #fff",
                    whiteSpace: "nowrap"
                }}>
                    همراهان خوب
                </Typography>
                <Typography sx={{
                    color: "white",
                    fontSize: {lg: 45, md: 40, sm: 35, xs: 30},
                    fontWeight: "bold",
                    ml: 1.5
                }}>
                    با
                </Typography>
            </Box>
            <Box sx={{
                position: "absolute",
                top: {lg: 420, md: 281, sm: 254, xs: -50},
                right: {lg: -190, md: -155, sm: -141, xs: 20},
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Typography sx={{
                    color: "white",
                    fontSize: {lg: 45, md: 40, sm: 35, xs: 30},
                    fontWeight: "bold",
                    ml: 1.5,
                    direction: "rtl"
                }}>
                    میچسبه!
                </Typography>
            </Box>
        </div>
    );
}

export default SuccessPath;