import React, {useEffect } from 'react'
import "./Answer.css";

const Answer = ({text,message,index,answerState,setAnswerState,scrollUpdate,setScrollUpdate}) => {

  const  renderAnswer = () =>{
      if(text.includes("https://www.google.com/maps")){
          return(
              <iframe src={text}></iframe>
          )
      }
      else{
          return(
            <p>{text}</p>
          )     
      }
  }

  useEffect(() => {
    setTimeout(() =>{
        setAnswerState(prev => prev+1);
    },1000);
  },[]);

  useEffect(() => {
    setScrollUpdate(scrollUpdate+1);
  },[answerState]);

    return (
        <div className ={`answer ${message.type === 'question' ? 'question-message' : ''}`}>
            { renderAnswer() }
        </div>
    )
}

export default Answer
