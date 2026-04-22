// src/components/Lesson.js

import React from 'react';

const Lesson = ({ lesson, onFinish }) => {
    return (
        <div className="lesson-container">
            <h2>{lesson.title}</h2>
            <p>{lesson.content}</p>
            <button onClick={onFinish}>Finish Lesson and Take Quiz</button>
        </div>
    );
};

export default Lesson;
