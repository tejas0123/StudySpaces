import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation,useNavigate } from 'react-router'
import Navbar from './Navbar';
import { StyledSpaceInfo } from '../styled/SpaceInfo.styled';
import { Link } from 'react-router-dom';
const SpaceInfo = () => {
    const search = useLocation().search;
    const id = new URLSearchParams(search).get("id");
    const [space,setspace] = useState({});
    const [quiz,setQuiz] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
       axios.post('http://localhost:4000/SpaceById',{id}).
       then((space)=>{
        console.log(space);
       setspace(space.data.space);
       setQuiz(space.data.space.quiz);
       }).catch(err=>{
        console.log(err);
       })
    },[])
    const ViewSubmissions = (ind)=>{
         navigate('/viewsubmissions?id='+id+"&No="+ind);
    }
  return (
    <>
    <Navbar />
    <StyledSpaceInfo>
      <div >
        <Link className='button' to={"/quiz?id="+id}>Create Quiz</Link>
        <h1>{space.name}</h1>
                    <h3>Quiz</h3>
                <div className='activequiz'>
                        {quiz.map((quiz, ind) => {
                            return (
                                <>
                                    <div className='quizcard'>
                                     <h4>{quiz.Name}</h4>
                                     <p>Due : {quiz.DueDate}</p>
                                     <button className='button' onClick={()=>{ViewSubmissions(ind)}}>View</button>
                                     <button className='button' onClick={()=>{ }}>Update</button>
                                    </div>
                                    
                                </>
                            )
                        }) }
                    
                    </div>
      </div>
    </StyledSpaceInfo>
    </>
  )
}

export default SpaceInfo
