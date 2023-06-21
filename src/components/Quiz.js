import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router'
import Navbar from './Navbar';
<<<<<<< HEAD
import axios from 'axios';
=======
import { StyledQuizPage } from '../styled/Quiz.styled';

>>>>>>> 0079cba5e7ed922ac3110d286590271ad739a9dc
export default function Quiz() {
    const search = useLocation().search;
    const id = new URLSearchParams(search).get("id");
    const [quiz,setQuiz] = useState([]);
    const [options,setOptions] = useState([]);
    const [ans,setAns] = useState(-1);
    const [questions,setQuestions] = useState([{question:"",options:['','','',''],ans}]);
    function Addquestion(){
       var questionSet =[];
       questionSet = questions.slice();
       questionSet.push({question:"",options:['','','',''],ans:-1});
       setQuestions(questionSet); 
    }
    const Removequestion = (ind)=>{
      if(questions.length!=1)
      {
        var questionSet=[];
        for(let i=0;i<questions.length;i++)
        {
          if(i!=ind)
          questionSet.push(questions[i]);
        }
        setQuestions(questionSet);
      }
    }
    const Updatequestion = (ind,e)=>{
     
      var UpdatedQuestion = "";
      UpdatedQuestion = e.target.value;
      
      var questionSet = questions.slice();
      questionSet[ind].question = UpdatedQuestion;
      setQuestions(questionSet);
    }
    const SetAnswer = (ind,e)=>{
      var UpdatedAnswer = "";
      UpdatedAnswer = e.target.id;
      var questionSet = questions.slice();
      questionSet[ind].ans = UpdatedAnswer;
      console.log(questionSet);
      setQuestions(questionSet);
    }
    const SetOptions = (e,ind,opind)=>{
      var UpdatedOption = "";
      UpdatedOption = e.target.value;
      
      var questionSet = questions.slice();
      questionSet[ind].options[opind] = UpdatedOption;
      setQuestions(questionSet);
    }
    const Submit = async()=>{
      console.log("quiz uploaded!");
<<<<<<< HEAD
      console.log(questions);
      const response  =  await axios.post('http://localhost:4000/UploadQuiz',{quiz:questions,id:id});
      console.log(response)
=======
      console.log(questions); 
>>>>>>> 0079cba5e7ed922ac3110d286590271ad739a9dc
    }
  return (
    <div>
        <Navbar/>
        <StyledQuizPage>
      { 
        questions.map((question,ind)=>{
            return (
                <>
                <div className='quiz'>
                    <textarea placeholder='set question' name="que" rows={2} cols={35} value={questions[ind].question} onChange={(e)=>Updatequestion(ind,e)}/><br/>
                    <div className='quiz-opn'>
                    <input type="radio" id="0" checked={(questions[ind].ans=='0')?true:false} name={"options"+ind} onClick={(e)=>SetAnswer(ind,e)}/>
                    <input type="text" placeholder='option 1' value={question.options[0]} onChange={(e)=>{SetOptions(e,ind,0)}}/><br/>
                    </div>
                    <div className='quiz-opn'>
                    <input type="radio" id="1" checked={(questions[ind].ans=='1')?true:false} name={"options"+ind} onClick={(e)=>SetAnswer(ind,e)}/>
                    <input type="text" placeholder='option 2' value={question.options[1]} onChange={(e)=>{SetOptions(e,ind,1)}}/><br/>
                    </div>
                    <div className='quiz-opn'>
                    <input placeholder='option1' type="radio" id="2" checked={(questions[ind].ans=='2')?true:false} name={"options"+ind} onClick={(e)=>SetAnswer(ind,e)}/>
                    <input type="text" placeholder='option 3' value={question.options[2]} onChange={(e)=>{SetOptions(e,ind,2)}}/><br/>
                    </div>
                    <div className='quiz-opn'>
                    <input placeholder='option1' type="radio" id="3" checked={(questions[ind].ans=='3')?true:false} name={"options"+ind} onClick={(e)=>SetAnswer(ind,e)}/>
                    <input type="text" placeholder='option 4' value={question.options[3]} onChange={(e)=>{SetOptions(e,ind,3)}}/><br/>
                    </div>
                    <br/>
                    <button className='button' onClick={()=>Removequestion(ind)}>Remove</button>
                </div>  
                </>
            )
        }) }
        <br/>
        <div className='quiz-btn'>
        <button className='button' style={{"background-color": "green" }} onClick={Addquestion}>Add question</button>
     <button className='button' onClick={Submit}>Submit</button>
     </div>
     </StyledQuizPage>
    </div>
  )
}
