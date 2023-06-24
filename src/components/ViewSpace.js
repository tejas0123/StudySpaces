import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation,useNavigate} from 'react-router'
import Navbar from './Navbar';
import { StyledViewSpace } from '../styled/ViewSpace.styled';
import { Link } from 'react-router-dom';
const {getDate} = require('../utility.js');
const ViewSpace = () => {
   
    const search = useLocation().search;
    const id = new URLSearchParams(search).get("id");
    const [space, setspace] = useState([]);
    const navigate = useNavigate();
    const [Attempted,setAttempted] = useState([]);
    const [Marks,setMarks] = useState([]);
    const [status,setStatus] = useState("");
    let attempted = [];
    let marks = [];
    const StartQuiz = (ind,DueDate)=>{
        
        let D1 = DueDate.split("-");
        let D2 = getDate();
        console.log(D1,D2);
      
        if(D1[0]>=D2[0] && D1[1]>=D2[1] && D1[2]>=D2[2])
        navigate('/TakeQuiz?id='+id+'&No='+ind);
        else
        setStatus("Quiz has expired");
    }

    useEffect(() => {
        axios.post('http://localhost:4000/SpaceById', { id }).
            then((space) => {
                console.log(space);
                console.log(space.data.space.quiz);
                let Quiz = space.data.space.quiz;
                console.log(typeof(Quiz));
                for(let i=0;i<Quiz.length;i++)
                {
                    attempted.push(0);
                    marks.push(0);
                    let Submissions;
                    Submissions = Quiz[i].Submissions;
                    for(let j=0;j<Submissions.length;j++)
                    {
                        console.log(space.data.User);
                        if(Submissions[j].Name!=undefined && Submissions[j].Name==space.data.User)
                          {
                            attempted[i]=1;
                            marks[i] = Submissions[j].Marks;
                          }
                    }
                }
                setAttempted(attempted);
                setMarks(marks);
                setspace(space.data.space)
                
            }).catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <Navbar />
            <StyledViewSpace>
            {(status.length!=0)?<p style={{"marginLeft":"45%","color":"red"}}>{status}</p>:<></>}
                <h1>{space.name}</h1>
                    <h3>Active Quizzes</h3>
                <div className='activequiz'>
                    
                    {(space.length != 0) ?
                        space.quiz.map((quiz, ind) => {
                            return (
                                <>
                                    <div className='quizcard'>
                                     <h4>{quiz.Name}</h4>
                                     <p>Due : {quiz.DueDate}</p>
                                     {(Attempted[ind]==1)?<><p>Total marks :{quiz.Content.length}</p><p>Marks scored :{Marks[ind]}</p></>:<><p>Total marks :{quiz.Content.length}</p><p>Marks scored:NA</p></>}
                                     <button className='button' onClick={()=>{ if(Attempted[ind]==0){StartQuiz(ind,quiz.DueDate)} }}>{(Attempted[ind]==0)?"START":"ATTEMPTED"}</button>
                                    </div>
                                    
                                </>
                            )
                        }) : "No active quiz"
                    }
                    </div>
                    
            </StyledViewSpace>
        </>
    )
}

export default ViewSpace;
