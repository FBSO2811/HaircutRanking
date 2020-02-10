import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    root: {
        // maxWidth: 1000,
        // minWidth: "45%",
        minHeight: 500,
    },
    media: {
        height: 450
    },
});

export default function LeftCard({haircutLeft, setIsDisappear, haircuts}) {

    const classes = useStyles();

    // const [allHaircuts, setAllHaircuts] = React.useState(JSON.parse(window.localStorage.getItem('allHaircuts')));


    function castVote(){
        setIsDisappear(true)
        let allHaircuts = JSON.parse(window.localStorage.getItem('allHaircuts'))
        let listCopy = [...allHaircuts["data"]]
        // let result = allHaircuts["data"].filter(obj => {
        //     return obj["name"] === haircutLeft["name"]
        // })

        let resultsArray = listCopy.filter((item) => {
            if (item.name === haircutLeft["name"]) {
                item.votes = item.votes + 1;
            }
            return item;
        });

        window.localStorage.setItem('allHaircuts', JSON.stringify({
            data: resultsArray,
        }));


    }


    return (
        <div>
                <Card className={classes.root} onClick={castVote}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={haircutLeft["img"]}
                            title={haircutLeft["name"]}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {haircutLeft["name"]}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {haircutLeft["misc"]}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={castVote}>
                            Vote
                        </Button>
                    </CardActions>
                </Card>

    </div>
    );
}