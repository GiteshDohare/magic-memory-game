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
            position: 'absolute',
            transition: 'all ease-in 0.2s',
        },

        '& .back': {
            transition: 'all ease-in 0.2s',
            transitionDelay: '0.2s'
        }
    },

    flipped: {
        '& .front': {
            transform: 'rotateY(0deg)',
            transitionDelay: '0.2s'
        },

        '& .back': {
            transform: 'rotateY(90deg)',
            transitionDelay: '0s'
        }
    }
})

const GameCard = ({card, handleChoice, flipped, disabled}: { card: Card, handleChoice: any, flipped: boolean, disabled: boolean }) => {
    const classes = useStyles();

    const handleClick = () => {
        if(!disabled) {
            handleChoice(card)
        }
    }
    return (
        <div className={classes.card}>
            <div className={flipped ? classes.flipped : ""}>
                <img src={card.src} className="front" alt="card front"/>
                <img src="/images/cover.png" className="back" alt="card back"
                     onClick={handleClick}/>
            </div>
        </div>
    );
};

export default GameCard;