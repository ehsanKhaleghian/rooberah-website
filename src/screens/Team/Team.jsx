import React from 'react';
import TeamHeader from "./components/TeamHeader/TeamHeader";
import CurrentTeam from "./components/CurrentTeam/CurrentTeam";
import RuberahTeam from "./components/RuberahTeam/RuberahTeam";

function Team() {
    return (
        <React.Fragment>
            <TeamHeader/>
            <CurrentTeam/>
            <RuberahTeam/>
        </React.Fragment>
    );
}

export default Team;