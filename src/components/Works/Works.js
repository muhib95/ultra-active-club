import React, { useEffect, useState } from 'react';
import List from '../List/List';
import Work from '../Work/Work';
import './Works.css'
const Works = () => {
  const [routines,setRoutine]=useState([]);
  useEffect(()=>{
    fetch('fakedata.json')
    .then(res=>res.json())
    .then(data=>setRoutine(data))
  },[])
  // console.log(routines);
  return (
    <div className='full-works'>
       
      <div >
      <h2>Daily Works</h2>
      <div className='work-routine'>
      {
routines.map(routine=><Work routines={routine} key={routine.id}></Work>)
      }
      </div>
     
      </div>
      <div className='work-list'>
       
        {
          <List></List>
        }
      </div>
    </div>
  );
};

export default Works;