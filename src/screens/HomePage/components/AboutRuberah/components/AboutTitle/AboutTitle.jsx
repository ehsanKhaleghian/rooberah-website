import React from 'react';
import Box from "@mui/material/Box";
import Paragraph from "../../../../../generalComponents/Paragraph";

function AboutTitle(props) {
    return (
        <Box sx={{position: "relative"}}>
            <Paragraph
                title={"درباره روبه‌راه"}
                tFontSize={{lg: 45, md: 40, sm: 35, xs: 30}}
                pBody={"اسفند ۹۷ چهار نفر تصمیم گرفتن دغدغه مشترکشون رو در قالب یک کسب و کار پیگیری کنن. تیم روبه‌راه حول دغدغه ساختن ایرانی بهتر شکل گرفت؛ جایی که هر کسی از بودن در اون خوشحال باشه و به فکر جایی دیگه نباشه. یکی از مهمترین مؤلفه‌های این رضایت اینه که فرد در محیطی کار کنه که نه تنها خودش، بلکه همه افراد در اون محیط از کرامت انسانی بالایی برخوردار باشن. چطور؟"}
                bFontSize={{lg: 25, md: 22, xs: 20}}
                titleSx={{position: "relative", zIndex: 10, mr: 2}}
                boxSx={{mb: 4.5}}
            />
            <Box
                sx={{
                    width: {lg: 42, md: 38, sm: 35, xs: 30},
                    height: {lg: 78, md: 70, sm: 60, xs: 50},
                    backgroundColor: "blue",
                    borderRadius: 20,
                    position: "absolute",
                    top: 0,
                    right: 0
                }}
            />
        </Box>
    );
}

export default AboutTitle;