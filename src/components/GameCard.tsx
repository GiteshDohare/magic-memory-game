import React from 'react';
import {Card} from "../Interfaces";
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles({
    card: {
        position: "relative",

        '& img': {
            width: '100%',
            display: 'block',
            border: '2px solid #fff',
            borderRadius: 6
        }

    }
})

const GameCard = ({src}: Partial<Card>) => {
    const classes = useStyles();

    return (
        <div className={classes.card}>
            <div>
                <img src={src} className="front" alt="card front"/>
                <img src="/images/cover.png" className="back" alt="card back"/>
            </div>
        </div>
    );
};

export default GameCard;