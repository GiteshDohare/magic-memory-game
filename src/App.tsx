import React, {useEffect, useState} from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import {Card} from "./Interfaces";
import GameCard from "./components/GameCard";


const cardImages = [
    {"src": "/images/helmet-1.png", matched: false},
    {"src": "/images/potion-1.png", matched: false},
    {"src": "/images/ring-1.png", matched: false},
    {"src": "/images/scroll-1.png", matched: false},
    {"src": "/images/shield-1.png", matched: false},
    {"src": "/images/sword-1.png", matched: false},
];

function App() {

    const [cards, setCards] = useState<Card[]>([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState<Card | null>(null);
    const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({...card, id: uuidv4()}));

        setCards(shuffledCards);
        setTurns(0);
    }

    const handleChoice = (card: Card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }

    const resetTurns = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(prevTurns => prevTurns + 1);
    }

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            if (choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) {
                            return {...card, matched: true}
                        } else {
                            return card;
                        }
                    })
                });
                resetTurns();
            } else {
                setTimeout(() => resetTurns(), 850);
            }
        }
    }, [choiceOne, choiceTwo])

    return (
        <div className="App">
            <h1>Magic Match</h1>
            <button onClick={shuffleCards}>New Game</button>
            <div className="card-grid">
                {cards.map(card => (
                    <GameCard key={card.id}
                              card={card}
                              handleChoice={handleChoice}
                              flipped={card === choiceOne || card === choiceTwo || card.matched}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
