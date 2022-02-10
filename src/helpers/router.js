import React from "react"
import {Route, Routes} from "react-router-dom";
import HomePage from "../screens/HomePage/HomePage";
import ContactUs from "../screens/ContactUs/ContactUs";
import Notes from "../screens/Notes/Notes";
import Jobs from "../screens/Jobs/Jobs";
import Team from "../screens/Team/Team";

const router = () => {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/contactus"} element={<ContactUs/>}/>
            <Route path={"/notes"} element={<Notes/>}/>
            <Route path={"/jobs"} element={<Jobs/>}/>
            <Route path={"/team"} element={<Team/>}/>
        </Routes>
    )
}

export default router;
