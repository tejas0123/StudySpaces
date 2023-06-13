import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Navbar from './Navbar';
const SpaceInfo = () => {
    const search = useLocation().search;
    const id = new URLSearchParams(search).get("id");
    const [space,setspace] = useState({});
    useEffect(()=>{
       axios.get('http://localhost:4000/getSpaceById',{id}).
       then((space)=>{
        console.log(space);
       setspace(space.data)
       }).catch(err=>{
        console.log(err);
       })
    },[])
  return (
    <div>
    <Navbar />
      <h1>{space.name}</h1>
    </div>
  )
}

export default SpaceInfo
