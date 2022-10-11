import React from 'react';

const Question = ({quest}) => {
    console.log(quest);
    const {question} = quest;
    return (
        <div>
            <h2>{question}</h2>
            
        </div>
    );
};

export default Question;