import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        // minWidth: "auto",
        minHeight: 500,
    },
    media: {
        height: 300,
    },
});

export default function RightCard({haircutRight}) {
    const classes = useStyles();


    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={haircutRight["img"]}
                    title={haircutRight["name"]}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {haircutRight["name"]}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {haircutRight["misc"]}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Vote
                </Button>
            </CardActions>
        </Card>
    );
}