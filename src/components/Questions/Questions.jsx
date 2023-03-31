import React, { useEffect, useState } from 'react';
import SingleQuestion from '../SingleQuestion/SingleQuestion';

const Questions = () => {

    const [questions, setQuestions] = useState([]);


    useEffect( ( ) => {
        fetch('answer.json')
        .then( res => res.json())
        .then( data => setQuestions(data))
    },[ ])

    return (
        <div>
            {
                questions.map( questionItem => <SingleQuestion questionData = {questionItem} key ={questionItem?.question}> </SingleQuestion>)
            }
        </div>
    );
};

export default Questions;