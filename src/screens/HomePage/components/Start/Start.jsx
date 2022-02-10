import React from 'react';
import Grid from "@mui/material/Grid";
import Paragraph from "../../../generalComponents/Paragraph";
import Container from "../../../generalComponents/Container";
import CardMedia from "@mui/material/CardMedia";

function Start(props) {
    return (
        <Container>
            <Grid container columnSpacing={2} direction="row-reverse" sx={{
                pt: {
                    md: 16.2,
                    sm: 7,
                    xs: 3
                },
                pb: {
                    md: 15.8,
                    sm: 9,
                    xs: 5
                }
            }}>
                <Grid item xs={12} sm={5} lg={4} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img
                        style={{width: "100%", maxWidth: 434}}
                        src={require("../../../../assets/images/images/presentation-recoveredd.png")}
                        alt={"presentation"}
                    />
                </Grid>
                <Grid item xs={12} sm={7} lg={8}>
                    <Paragraph
                        title={"از کجا شروع شد؟"}
                        pBody={"اسفند ۹۷ چهار نفر تصمیم گرفتن دغدغه مشترکشون رو تو قالب یه کسب و کار پیگیری کنن. تیم روبه‌راه حول دغدغه ساختن ایرانی بهتر شکل گرفت؛ جایی که هر کسی از بودن در اون خوشحال باشه و به فکر جایی دیگه نباشه. یکی از مهمترین مؤلفه‌های این رضایت اینه که فرد در محیطی کار کنه که همه در اون از کرامت انسانی بالایی برخوردار باشن."}
                        tFontSize={{lg: 45, md: 35, sm: 25, xs: 35}}
                        bFontSize={{lg: 25, md: 20, sm: 20, xs: 25}}
                        tMb={"17px"}
                        pMb={"70px"}
                    />
                    <Paragraph
                        title={"چه می‌کنیم؟"}
                        pBody={"ما برای فروشگاه‌های اینترنتی ابزارهایی توسعه می‌دیم که تجربه کاربری بهتری به مشتریان خودشون رقم بزنن و فروش خودشون رو به شکلی محسوس افزایش بدن."}
                        tFontSize={{lg: 45, md: 35, sm: 25, xs: 35}}
                        bFontSize={{lg: 25, md: 20, sm: 20, xs: 25}}
                        tMb={"17px"}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Start;