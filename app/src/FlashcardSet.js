import React, { useState } from 'react';
import Flashcard from './Flashcard';

function FlashcardSet() {
  const [cards, setCards] = useState([
    { question: 'Capital of France', answer: 'Paris', imageUrl: '/images/paris.jpg', category: 'Geography' },
    { question: '2 + 2', answer: '4', category: 'Math' },
    { question: 'What is the color of the sky?', answer: 'Blue', category: 'Science' },
    { question: 'What is the capital of the United States?', answer: 'Washington, D.C.', category: 'Geography' },
    { question: 'What is 5 x 5?', answer: '25', category: 'Math' },
    { question: 'What is the freezing point of water?', answer: '0 degrees Celsius', category: 'Science' },
    // Add more card objects here
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

const showNextCard = () => {
    const nextIndex = (currentIndex + 1) % cards.length;
    setCurrentIndex(nextIndex);
};

  return (
    <div>
      <h2>{cards[currentIndex].category}</h2>
      <Flashcard
        question={cards[currentIndex].question}
        answer={cards[currentIndex].answer}
        imageUrl={cards[currentIndex].imageUrl}
      />
      <button onClick={showNextCard}>Next</button>
    </div>
  );
}

export default FlashcardSet;
