import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar from './Navbar';
export default function Quiz() {
    const [quiz,setQuiz] = useState([]);
 
    const [options,setOptions] = useState([]);
    const [ans,setAns] = useState(-1);
    const [questions,setQuestions] = useState([{question:"set question",options:['1','2','3','4'],ans}]);
    function Addquestion(){
       var questionSet =[];
       questionSet = questions.slice();
       questionSet.push({question:"set question",options:['1','2','3','4'],ans:-1});
      
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
    const Submit = ()=>{
      console.log("quiz uploaded!");
      console.log(questions);
      
    }
  return (
    <div>
        <Navbar/>
      { 
        questions.map((question,ind)=>{
           
            return (
                <>
                <div>
                    <textarea  name="que" value={questions[ind].question} onChange={(e)=>Updatequestion(ind,e)}/><br/>
                    <input type="radio" id="0" checked={(questions[ind].ans=='0')?true:false} name={"options"+ind} onClick={(e)=>SetAnswer(ind,e)}/>
                    <input type="text" value={question.options[0]} onChange={(e)=>{SetOptions(e,ind,0)}}/><br/>
                    <input type="radio" id="1" checked={(questions[ind].ans=='1')?true:false} name={"options"+ind} onClick={(e)=>SetAnswer(ind,e)}/>
                    <input type="text" value={question.options[1]} onChange={(e)=>{SetOptions(e,ind,1)}}/><br/>
                    <input type="radio" id="2" checked={(questions[ind].ans=='2')?true:false} name={"options"+ind} onClick={(e)=>SetAnswer(ind,e)}/>
                    <input type="text" value={question.options[2]} onChange={(e)=>{SetOptions(e,ind,2)}}/><br/>
                    <input type="radio" id="3" checked={(questions[ind].ans=='3')?true:false} name={"options"+ind} onClick={(e)=>SetAnswer(ind,e)}/>
                    <input type="text" value={question.options[3]} onChange={(e)=>{SetOptions(e,ind,3)}}/><br/>
                </div>  
                
                <button onClick={()=>Removequestion(ind)}>Remove</button>
                </>
            )
        }) }
        <br/>
        <button onClick={Addquestion}>Add quesion</button>
     <button onClick={Submit}>Submit</button>
     
    </div>
  )
}
