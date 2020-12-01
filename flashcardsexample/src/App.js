import React, { useState } from 'react';
import FlashcardList from './FlashcardList';



function App() {

  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)

  return (
      <FlashcardList flashcards={flashcards} />
  );
}

const SAMPLE_FLASHCARDS = [
  {
    ID: 1,
    question: 'what is 2 + 2?',
    answer: '4',
    options: [
      'Answer',
      'Other answer',
      'More answers',
      'Last answer'
    ]
  },
  {
    ID: 2,
    question: 'Quiz Question 2?',
    answer: 'Something clever',
    options: [
      'An Answer',
      'AnOther answer',
      'A Diff answers',
      'Finally Last answer'
    ]
  }  
]
export default App;
