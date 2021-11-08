import './App.css';
import React, {useState,useEffect,useRef} from 'react';
import Answers from "./components/Answers";

import rightChevron from "./assets/images/right-chevron.png";
import Input from "./components/Input";
import Question from "./components/Questions";
import {answerData} from "./data/AnswerData";
import {questionData} from "./data/AnswerData";

const answerStates = ['default','bride who','groom who','when','location','end1', 'end2'];
const questions = ['bride who','groom who','when','location','will attend','busy'];

function App() {

  const [scrollUpdate,setScrollUpdate] = useState(0);

  const [inputMode,setInputMode] = useState(false)

  const [currentMessages,setCurrentMessages] = useState([answerData[0]]);

  const [questionMode,setQuestionMode] = useState(false);  

  const [currentQuestions, setCurrentQuestions] = useState([questionData[0],questionData[1],questionData[2],questionData[3]]);

  const messagesEndRef = useRef(null);

  const [displayForm,setDisplayForm] = useState(false);


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block:"end"});
  }

  useEffect(() => {
    scrollToBottom()
  }, [scrollUpdate]);

  useEffect(() =>{
    if(questionMode === true)
    {
      setCurrentQuestions(questionData.filter(question => question.complete === false));
    }
    setTimeout(() => {
      const inputHeight = document.querySelector('.input-section').offsetHeight;
      const screenHeight = window.innerHeight;
      let answerSectionHeight = screenHeight - inputHeight - 50;
      document.querySelector('.answers-wrapper').style.height = answerSectionHeight+"px";
      scrollToBottom();
    },100);
   
  },[questionMode]);


  // const [typing,setTyping] = useState(true);

  return (
    <div className="App">
      <div className="screen">
        <div className="answers-wrapper">
          {currentMessages.map((message,index) => (
            <Answers message = {message} key = {index} scrollUpdate = {scrollUpdate} setScrollUpdate = {setScrollUpdate} questionMode = {questionMode} setQuestionMode = {setQuestionMode} inputMode = {inputMode} setInputMode = {setInputMode} /> 
          ))}
          <div ref = {messagesEndRef} id = "dummy-div"/>
        </div>
        <div className="input-section">
          {!inputMode && <Input img = {rightChevron} questionMode = {questionMode} inputMode = {inputMode} setInputMode = {setInputMode}/>}
          <div className="questions-section">
            {currentQuestions.map((item,index) =>(
              questionMode && <Question key = {index} question = {item} questionMode = {questionMode} setQuestionMode = {setQuestionMode} currentMessages = {currentMessages} setCurrentMessages = {setCurrentMessages} currentQuestions = {currentQuestions} setCurrentQuestions = {setCurrentQuestions}/>
            )
            )}
          </div> 
        </div> 
      </div> 
    </div>
  );
}

export default App;
