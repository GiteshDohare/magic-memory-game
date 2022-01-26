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
        },

        '& .front': {
            transform: 'rotateY(90deg)',
            position: 'absolute'
        }
    },

    flipped: {
        '& .front':{
            transform: 'rotateY(0deg)',
        }
    }
})

const GameCard = ({card, handleChoice, flipped}: { card: Card, handleChoice: any, flipped: boolean }) => {
    const classes = useStyles();

    return (
        <div className={classes.card}>
            <div className={flipped ? classes.flipped : ""}>
                <img src={card.src} className="front" alt="card front"/>
                <img src="/images/cover.png" className="back" alt="card back"
                     onClick={() => handleChoice(card)}/>
            </div>
        </div>
    );
};

export default GameCard;