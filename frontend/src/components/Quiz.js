// src/components/Quiz.js
import React, { useState } from 'react';
import './Quiz.css'; // Create a CSS file for Quiz styling

const Quiz = ({ onFinish }) => {
    const questions = [
        {
            question: "What is the sign for 'Hello'?",
            options: ['Wave', 'Clap', 'Point', 'Nod'],
            answer: 'Wave',
        },
        {
            question: "What is the sign for 'Happy'?",
            options: ['Frown', 'Smile', 'Sigh', 'Cry'],
            answer: 'Smile',
        },
        {
            question: "What is the sign for 'Sad'?",
            options: ['Frown', 'Smile', 'Jump', 'Run'],
            answer: 'Frown',
        },
        {
            question: "What is the sign for 'Please'?",
            options: ['Shake', 'Push', 'Pull', 'Palm on Chest'],
            answer: 'Palm on Chest',
        },
        {
            question: "What is the sign for 'Yes'?",
            options: ['Nod', 'Shake', 'Wave', 'Clap'],
            answer: 'Nod',
        },
        {
            question: "What is the sign for 'No'?",
            options: ['Shake Head', 'Point', 'Clap', 'Jump'],
            answer: 'Shake Head',
        },
        {
            question: "What is the sign for 'Again'?",
            options: ['Repeat Motion', 'Turn Around', 'Jump', 'Run'],
            answer: 'Repeat Motion',
        },
        {
            question: "What is the sign for 'Baby'?",
            options: ['Rocking Motion', 'Point', 'Clap', 'Nod'],
            answer: 'Rocking Motion',
        },
        {
            question: "What is the sign for 'Good'?",
            options: ['Thumbs Up', 'Frown', 'Jump', 'Clap'],
            answer: 'Thumbs Up',
        },
        {
            question: "What is the sign for 'Nice'?",
            options: ['Wave', 'Point', 'Pat on Back', 'Clap'],
            answer: 'Pat on Back',
        },
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [feedback, setFeedback] = useState('');
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleOptionClick = (option) => {
        if (option === questions[currentQuestionIndex].answer) {
            setFeedback('Correct!');
            setScore(score + 1); // Increment score for a correct answer
        } else {
            setFeedback('Incorrect, try again!');
        }
        setUserAnswer(option);
    };

    const handleNextQuestion = () => {
        setUserAnswer('');
        setFeedback('');
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizCompleted(true); // Mark quiz as completed
        }
    };

    const getRemarks = () => {
        if (score === questions.length) {
            return "Excellent job! You scored full points!";
        } else if (score >= questions.length / 2) {
            return "Good job! You have a good understanding of sign language!";
        } else {
            return "Keep practicing! You'll get better with more effort!";
        }
    };

    return (
        <div className="quiz-container">
            <h2>Sign Language Quiz</h2>
            {quizCompleted ? (
                <div className="results-container">
                    <h3>Your Score: {score} out of {questions.length}</h3>
                    <p>{getRemarks()}</p>
                    <button onClick={onFinish} className="finish-btn">Finish Quiz</button>
                </div>
            ) : (
                <div className="question-container">
                    <h3>{questions[currentQuestionIndex].question}</h3>
                    {feedback && <p>{feedback}</p>}
                    <ul className="options-list">
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <li key={index} className="option-item">
                                <button
                                    className="option-button"
                                    onClick={() => handleOptionClick(option)}
                                    disabled={userAnswer !== ''} // Disable buttons after answer is selected
                                >
                                    {option}
                                </button>
                            </li>
                        ))}
                    </ul>
                    {userAnswer && (
                        <button onClick={handleNextQuestion} className="next-btn">
                            Next Question
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Quiz;
