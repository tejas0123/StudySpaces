import React, { useState,useEffect } from 'react'
import { useLocation,useMatch,useNavigate} from 'react-router'
import { TakeQuizPage } from '../styled/TakeQuiz.styled';
import Navbar from './Navbar';
import axios from 'axios';
export default function TakeQuiz() {
    const search = useLocation().search;
    const id = new URLSearchParams(search).get("id");
    const No = new URLSearchParams(search).get("No");
    const navigate = useNavigate();
    const [quiz,setQuiz] = useState([])
    const [Answers,setAnswers] = useState([]);
    useEffect(() => {
        axios.post('http://localhost:4000/SpaceById', { id }).
            then((spc) => {
                console.log(spc.data.space.quiz);
                let ans = [];
                let qz = spc.data.space.quiz[No];
                for(let i=0;i<qz.Content.length;i++)
                ans.push(-1);
                console.log(No);
                setAnswers(ans);
                setQuiz(spc.data.space.quiz[No]);
            }).catch(err => {
                console.log(err);
            })
    }, [])

    const Submit = async()=>{
        console.log("quiz submited!");
        console.log(Answers);
        console.log(id);
        const response  =  await axios.post('http://localhost:4000/SubmitQuiz',{Answers:Answers,id:id,No:No});
        if(response.data.added==true)
        navigate('/myspaces');
      } 
    const SetOptions = (ind,opt)=>{
       let ans = Answers.slice();
       ans[ind] = opt;
       console.log(ans);
       setAnswers(ans);
    }
  return (
    <>
    <Navbar/>
    <TakeQuizPage>
    <div>
      { (quiz.length!=0)?
        quiz.Content.map((question,ind)=>{
            return (
                <>
                <div className='quiz'>
                    <textarea placeholder='set question' name="que" rows={2} cols={35} value={question.question} /><br/>
                    <div className='quiz-opn'>
                    <input type="radio" id="0" checked={(Answers[ind]=='0')?true:false} name={"options"+ind}  onClick={(e)=>{SetOptions(ind,0)}}/>
                    <input type="text" placeholder='option 1' value={question.options[0]} /><br/>
                    </div>
                    <div className='quiz-opn'>
                    <input type="radio" id="1" checked={(Answers[ind]=='1')?true:false} name={"options"+ind}  onClick={(e)=>{SetOptions(ind,1)}}/>
                    <input type="text" placeholder='option 2' value={question.options[1]} /><br/>
                    </div>
                    <div className='quiz-opn'> 
                    <input placeholder='option1' type="radio" id="2" checked={(Answers[ind]=='2')?true:false} name={"options"+ind}  onClick={(e)=>{SetOptions(ind,2)}}/>
                    <input type="text" placeholder='option 3' value={question.options[2]} /><br/>
                    </div>
                    <div className='quiz-opn'>
                    <input placeholder='option1' type="radio" id="3" checked={(Answers[ind]=='3')?true:false} name={"options"+ind}  onClick={(e)=>{SetOptions(ind,3)}}/>
                    <input type="text" placeholder='option 4' value={question.options[3]}/><br/>
                    </div>
                    <br/>
                    
                </div>  
                </>
            )
        }):"No data" }

    <button className='button' style={{"marginLeft":"47%"}} onClick={Submit}>Submit</button>
    </div>
    </TakeQuizPage>
    </>
  )
}
