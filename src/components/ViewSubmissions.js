import axios from 'axios';
import React from 'react'
import { useLocation } from 'react-router'
import { useEffect } from 'react';
import { useState } from 'react'
import Navbar from './Navbar';
import { StyledViewSubmissions } from '../styled/ViewSubmissions';
function ViewSubmissions() {
    const search = useLocation().search;
    const id = new URLSearchParams(search).get("id");
    const No = new URLSearchParams(search).get("No");
    const [TotalMarks,setTotalMarks] = useState(0);
    const [submissions,setSubmissions] = useState([]);
    useEffect(()=>{
     axios.post('http://localhost:4000/SpaceById',{id})
     .then(space=>{
      
        setSubmissions(space.data.space.quiz[No].Submissions);
        setTotalMarks(space.data.space.quiz[No].Content.length);
     })
    },[])
  return (
    <div>
      <Navbar/>
      <StyledViewSubmissions>
      <div className='MarksList'>
        <div className='ListHead'><h3>Student Name</h3><h3>Marks      </h3><h3>Total Marks</h3></div>
        {submissions.map((submission)=>{
            return (
                <div className='ListRow'>
                    <p>{submission.Name}</p>
                    <p>{submission.Marks}</p>
                    <p>{TotalMarks}</p>
                </div>
            )
        })}
      </div>
      </StyledViewSubmissions>
    </div>
  )
}

export default ViewSubmissions
