import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
import DisappearingComponent from "./DisappearingComponent";

export default function VotingComponent({haircutsLeft, haircutsRight, haircuts}) {


    return haircutsLeft.map((haircutLeft, index) => {
        const haircutRight = haircutsRight[index];
        return (
            <div>
                <DisappearingComponent haircutLeft={haircutLeft} haircutRight={haircutRight} haircuts={haircuts}/>
            </div>
        );
    });


}