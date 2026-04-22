// src/components/SignLanguageLearning.js
import React, { useState } from 'react';
import Quiz from './Quiz';
import Learn from './Learn'; // Import the Learn component
import './SignLanguageLearning.css';

const SignLanguageLearning = () => {
    const [isQuizActive, setIsQuizActive] = useState(false);
    const [isLearningActive, setIsLearningActive] = useState(false);

    const handleStartQuiz = () => {
        setIsQuizActive(true);
        setIsLearningActive(false);
    };

    const handleStartLearning = () => {
        setIsLearningActive(true);
        setIsQuizActive(false);
    };

    return (
        <div className="learning-container">
            <h1>Learn Sign Language</h1>

            {!isLearningActive && !isQuizActive ? (
                <div className="intro-container">
                    <section className="introduction">
                        <h2>Welcome to Sign Language Learning!</h2>
                        <p>
                            Sign language is a visual means of communicating using hand signs, body language, and facial expressions. 
                            It is primarily used by the deaf and hard of hearing community.
                        </p>

                        <h3>Types of Sign Language</h3>
                        <ul>
                            <li><strong>American Sign Language (ASL)</strong></li>
                            <li><strong>British Sign Language (BSL)</strong></li>
                            <li><strong>International Sign Language</strong></li>
                            <li><strong>Others...</strong></li>
                        </ul>

                        
                        <img src="/images/intro.png" alt="Introduction to Sign Language" className="intro-image" />
                    </section>

                    <button className="start-quiz-btn" onClick={handleStartLearning}>Learn</button>
                    <button className="start-quiz-btn" onClick={handleStartQuiz}>Start Quiz</button>
                </div>
            ) : isLearningActive ? (
                <Learn onFinish={() => setIsLearningActive(false)} />
            ) : (
                <Quiz onFinish={() => setIsQuizActive(false)} />
            )}
        </div>
    );
};

export default SignLanguageLearning;
