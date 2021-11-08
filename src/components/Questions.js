import React,  {useState,useEffect} from 'react'
import "./Question.css";
import {answerData} from "../data/AnswerData";
import {questionData} from "../data/AnswerData";

const Questions = ({question,questionMode,setQuestionMode,currentMessages,setCurrentMessages,currentQuestions,setCurrentQuestions}) => {

    const insertNextAnswer = () =>{
        let nextAnswer = answerData.filter((answer) => (
            answer.state === question.state
        ));
        let renderedMessages = currentMessages;
        
        setTimeout(()=>{
            renderedMessages.push(nextAnswer[0]);
        },1000);
    }

    const questionHandler = () => {
        setQuestionMode(false);
        question.complete = true;
        if(question.state == "groom who"){
            questionData.filter(question => question.state === "bride who")[0].complete = true;
            answerData.filter(answer => answer.state === "bride who")[0].complete = true;
        }
        else if( question.state === "bride who"){
            questionData.filter(question => question.state === "groom who")[0].complete = true;
            answerData.filter(answer => answer.state === "groom who")[0].complete = true;
        }
        let renderedMessages = currentMessages;
        renderedMessages.push(question);
        insertNextAnswer();
    }

    return (
        <div className = "question" onClick = {questionHandler}>
           <p>{question.text}</p>
        </div>
    )
}

export default Questions;
