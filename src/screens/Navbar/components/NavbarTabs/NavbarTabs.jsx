import React from 'react';
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import {useNavigate} from "react-router-dom";
import navbarOnChange from "../../../../helpers/navbarOnChange";

function NavbarTabs(props) {
    const [value, setValue] = React.useState(props.tabIndex);
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate(navbarOnChange(newValue))
    }
    return (
        <Tabs value={value} onChange={handleChange}
              aria-label="basic tabs example" sx={{
            "& .MuiTabs-indicator": {
                bottom: 12,
                backgroundColor: "blue"
            },
            ...(props.tabIndex === 4 && {"& .MuiButtonBase-root": {color: "white"}}),
            "& .MuiButtonBase-root.Mui-selected": {
                color: "blue"
            },
            display: {
                xs: "none",
                sm: "block"
            }
        }}

        >
            <Tab label="تماس با ما"/>
            <Tab label="یادداشت‌ها"/>
            <Tab label="موقعیت‌های شغلی"/>
            <Tab sx={{minWidth: "fit-content"}} label="تیم"/>
        </Tabs>
    );
}

export default NavbarTabs;