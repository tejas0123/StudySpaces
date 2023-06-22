import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation,useNavigate} from 'react-router'
import Navbar from './Navbar';
import { StyledViewSpace } from '../styled/ViewSpace.styled';
import { Link } from 'react-router-dom';
const ViewSpace = () => {
    const search = useLocation().search;
    const id = new URLSearchParams(search).get("id");
    const [space, setspace] = useState([]);
    const navigate = useNavigate();
    const [Attempted,setAttempted] = useState([]);
    let attempted = [];
    const StartQuiz = (ind)=>{
        navigate('/TakeQuiz?id='+id+'&No='+ind);
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
                    let Submissions;
                    Submissions = Quiz[i].Submissions;
                    for(let j=0;j<Submissions.length;j++)
                    {
                        console.log(space.data.User);
                        if(Submissions[j].Name!=undefined && Submissions[j].Name==space.data.User)
                          {
                            console.log(Submissions[j].Name)
                            attempted[i]=1; 
                          }
                    }
                }
                setAttempted(attempted);
                console.log(attempted)

                setspace(space.data.space)
                
            }).catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <Navbar />
            <StyledViewSpace>
                <h1>{space.name}</h1>
                    <h3>Active Quizs</h3>
                <div className='activequiz'>

                    {(space.length != 0) ?
                        space.quiz.map((quiz, ind) => {
                            return (
                                <>
                                    <div className='quizcard'>
                                     <h4>{quiz.Name}</h4>
                                     <p>Due : {quiz.DueDate}</p>
                                     <button className='button' onClick={()=>{ if(Attempted[ind]==0){StartQuiz(ind)} }}>{(Attempted[ind]==0)?"START":"ATTEMPTED"}</button>
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
