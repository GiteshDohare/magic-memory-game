import React, {useState} from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import {Card} from "./Interfaces";
import GameCard from "./components/GameCard";


const cardImages = [
    {"src": "/images/helmet-1.png"},
    {"src": "/images/potion-1.png"},
    {"src": "/images/ring-1.png"},
    {"src": "/images/scroll-1.png"},
    {"src": "/images/shield-1.png"},
    {"src": "/images/sword-1.png"},
];

function App() {

    const [cards, setCards] = useState<Card[]>([]);
    const [turns, setTurns] = useState(0);

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({...card, id: uuidv4()}));

        setCards(shuffledCards);
        setTurns(0);
    }

    return (
        <div className="App">
            <h1>Magic Match</h1>
            <button onClick={shuffleCards}>New Game</button>
            <div className="card-grid">
                {cards.map(card => (
                    <GameCard key={card.id} src={card.src} />
                ))}
            </div>
        </div>
    );
}

export default App;
