import React,{useState, useEffect} from 'react';
import {answerData} from '../data/AnswerData';
 
import Answer from './Answer'

const Answers = ({message,scrollUpdate,setScrollUpdate,questionMode,setQuestionMode,inputMode,setInputMode}) => {

    const [answerState,setAnswerState] = useState(0);

    const checkMessageEnd = () =>{
        let tempAnswers = answerData.filter((answer) => (
            answer.complete === false
        ))
        if(tempAnswers.length === 1 && tempAnswers[0].state === "confirm presence")
        {
            setInputMode(true);
        }  
    };
    
    useEffect(() => {
        const length = message.text.length
        if(answerState === length+1 && message.type === 'answer'){
            message.complete = true;
            setQuestionMode(true);
            checkMessageEnd();
        }
        if(message.type === 'question')
        {
            setAnswerState(1);
        }
    },[answerState]);

    return (
        <>
        {answerState === 0 && message.type === 'answer' && <Answer text = "typing..." answerState = {answerState} setAnswerState = {setAnswerState} message = {message} index = "0" scrollUpdate = {scrollUpdate} setScrollUpdate = {setScrollUpdate}/>}
        {message.text.map((answer,index) => {         
            return(              
                answerState > index &&
                <Answer text = {answer} message = {message} key = {index} index = {index} answerState = {answerState} setAnswerState = {setAnswerState} scrollUpdate = {scrollUpdate} setScrollUpdate = {setScrollUpdate} /> 
            )          
        })}
        </>
    )
}

export default Answers
