import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './singleproject.css'
import {projectsData} from '../../Data/ProjetcsData'

export default function SingleProjectPage() {
    const {id} = useParams();
    const[data,setData] = useState([]);
    const[project,setProject] = useState([]);

    useEffect(()=>{
      setData(
        projectsData.filter((data)=> data.id == id)
      );
    },[])
    
  return (
    <div>
        asd
        data is {data[0].title}
    </div>
  )
}
