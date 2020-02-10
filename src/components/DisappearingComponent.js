import React from 'react';
import Grid from "@material-ui/core/Grid";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

export default function DisappearingComponent({haircutLeft,  haircutRight, haircuts}) {

    const [isDisappear, setIsDisappear] = React.useState(false)

    return(
            <div>
                {!isDisappear ?
                <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid item xs={6}>
                        <LeftCard haircutLeft={haircutLeft} setIsDisappear={setIsDisappear} haircuts={haircuts}/>
                    </Grid>
                    <Grid item xs={6}>
                        <RightCard haircutRight={haircutRight} setIsDisappear={setIsDisappear}/>
                    </Grid>
                </Grid>
                :
                    null
                }
            </div>
    )

}