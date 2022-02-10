import React from 'react';
import Season from "./components/Season/Season";
import Container from "../../../../../generalComponents/Container";
import seasonOneImg from "../../../../../../assets/images/images/seasonOne.png"
import seasonTwoImg from "../../../../../../assets/images/images/seasonTwo.png"

function PathBody(props) {
    return (
        <Container sx={{
            pt: {lg: 13, md: 10, sm: 8, xs: 6}
        }}>
            <Season
                image={seasonOneImg}
                bodies={[
                    "در یک فضای کار اشتراکی در پژوهشکده علوم و فناوری انرژی شریف مستقر شدیم و روی کاربرد هوش مصنوعی در فروش اینترنتی شروع به مطالعه کردیم.\n",
                    "سرویس A/B test رو با اسم تجاری Pink or Blue توسعه دادیم. محصول جدیدی بود در Wordpress ایران ولی موفق نبود.",
                    "شرکت در جشنواره کارآفرینی دانشگاه صنعتی شریف و کسب مقام دوم در بخش هوش مصنوعی و مقام چهارم در بخش کل طرح‌ها"
                ]}
                dates={[`۱۳ ۹۸`, `۹۸`, `۹۸`]}
                months={["تیر", "مهر", "بهمن"]}
            />
            <Season
                image={seasonTwoImg}
                bodies={[
                    "توسعه محصول Recommender در دو قالب Wordpress Plugin و API و امضای اولین قرارداد SaaS روی این خدمت",
                    "تصمیم به تغییر مسیر بزرگ از بازار داخلی به بازار خارجی با محصولی جدید"
                ]}
                dates={[`۱۳ ۹۹`, `۱۳ ۹۹`]}
                months={["شهریور", "آبان"]}
                left
                bgPt={"59.33%"}
                sx={{mt: {lg: 16, md: 14, sm: 12, xs: 9}}}
            />
            <Season
                bodies={[
                    "عبور از ۵۰۰ مشتری فعال"
                ]}
                dates={[`۱۴ ۰۰`]}
                months={["شهریور"]}
                sx={{mt: {lg: 16, md: 14, sm: 12, xs: 9}}}
                bgPt={"0"}
            />
        </Container>
    );
}

export default PathBody;