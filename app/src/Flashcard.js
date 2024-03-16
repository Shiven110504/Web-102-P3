import React, { useState } from 'react';
import './Flashcard.css';

function Flashcard({ question, answer, onBack, onNext, index, total }) {
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = () => {
    if (userInput.trim().toLowerCase() === answer.trim().toLowerCase()) {
      setFeedback('Correct!');
      setIsFlipped(true); 
    } else {
      setFeedback('Incorrect, try again!');
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flashcard">
      <div onClick={handleFlip} className={`card ${isFlipped ? 'flipped' : ''}`}>
        {!isFlipped ? <div className="question">{question}</div> : <div className="answer">{answer}</div>}
      </div>
      {!isFlipped && (
        <>
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Your answer"
            className="answer-input"
          />
          <button onClick={handleSubmit} className="submit-button">Submit</button>
          {feedback && <div className="feedback">{feedback}</div>}
        </>
      )}
      <div className="navigation">
        {index > 0 && <button onClick={onBack} className="back-button">Back</button>}
        {index < total - 1 && <button onClick={onNext} className="next-button">Next</button>}
      </div>
    </div>
  );
}

export default Flashcard;
