import React from 'react';
import Box from "@mui/material/Box";
import AboutItem from "./components/AboutItem/AboutItem";
import teamOne from "../../../../../../assets/images/team/team-2.png";
import teamTwo from "../../../../../../assets/images/team/team-3.png";
import teamThree from "../../../../../../assets/images/team/team-4.png";
import teamFour from "../../../../../../assets/images/team/team-5.png";

function AboutBody(props) {
    return (
        <Box>
            <AboutItem
                paragraphProps={{
                    title: "با شفافیت",
                    pBody: "شفافیت، انسجام تیم رو بیمه می‌کنه. اعضای سازمان «حق» دارن بدونن که مدیریت ارشد شرکت چه تصمیماتی می‌گیره و چرا به این تصمیم‌ها رسیده. دلیلش هم اینه که تصمیمات سازمان می‌تونه مستقیماً روی زندگی افراد تأثیر بذاره. لذا حتی اگر در تصمیمی دخیل نیستن، حداقل حقشون اینه که بتونن از کم و کیف تصمیم و فرایند رسیدن بهش اطلاع داشته باشن."
                }}
                imgPath={teamOne}
            >
            </AboutItem>
            <AboutItem
                paragraphProps={{
                    title: "با لذت بردن از کار",
                    pBody: "معتقدیم که یک انسان شاغل باید از کار خودش لذت ببره. به همین خاطر ترجیحمون همیشه اینه که افراد در موقعیتی مشغول به کار باشن که بهش علاقه دارن. بارها دیدیم که اگر علاقه با پشتکار و استعداد همراه بشه، همکاری خوشحال‌تر خواهیم داشت و این رضایت به  کل مجموعه سرایت خواهد کرد. ولی اینا کافی نیست."
                }}
                imgPath={teamTwo}
                left
            >
            </AboutItem>
            <AboutItem
                paragraphProps={{
                    title: "با فرصت‌های برابر",
                    pBody: "در روبه‌راه همه در یک طبقه‌ایم و تنها چیزی که برای افراد مختلف فرق می‌کنه، دستمزده. استفاده از امکانات سازمانی ربطی به موقعیت فرد در سازمان نداره و اولویت با کسیه که نیاز بیشتری به استفاده از مزایای سازمان داره."
                }}
                imgPath={teamThree}
            >
            </AboutItem>
            <AboutItem
                paragraphProps={{
                    title: "با پول سالم",
                    pBody: "اعتقاد داریم سازمان نباید درآمدش رو از فعالیت‌های ناسالم تأمین کنه و همکاران شرکت حق دارن بدونن منشأ درآمدشون پاکه. به طور مثال به پروژه‌های رانتی که به صورت غیرشفاف و غیراستاندارد به مجموعه‌ها واگذار می‌شه، اصلاً نزدیک هم نمی‌شیم.\n" +
                        "از اونجایی که عمده فعالیت‌های ما به صورت ارائه سرویس به کسب و کارهای دیگه‌س و به نوعی در فروش و رشد کسب و کار اون‌ها شریک هستیم."
                }}
                imgPath={teamFour}
                left
            >
            </AboutItem>
        </Box>
    );
}

export default AboutBody;