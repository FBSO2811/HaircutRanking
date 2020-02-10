import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Ranking from "./Ranking";
import VotingContainer from "./VotingContainer";
import MyNavbar from "./MyNavbar";

export default function MainContainer() {
    return (
        <div>
            <Router>
                <MyNavbar />
                <Switch>
                    <Route path="/" exact>
                        <VotingContainer />
                    </Route>
                    <Route path="/ranking">
                        <Ranking />
                    </Route>
                </Switch>
            </Router>
        </div>
    )

}
