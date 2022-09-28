import React, { useEffect, useState } from 'react';
import List from '../List/List';
import Work from '../Work/Work';
import './Works.css'
const Works = () => {
  const [routines,setRoutine]=useState([]);
  const [timeList,setTimeList]=useState([]);
  useEffect(()=>{
    fetch('fakedata.json')
    .then(res=>res.json())
    .then(data=>setRoutine(data))
  },[])
  const addToList=(time)=>{
    let totaltime=[];
    totaltime=[...timeList,time];
    setTimeList(totaltime);
  }
  // console.log(routines);
  return (
    <div className='full-works'>
       
      <div >
      <h2>Daily Works</h2>
      <div className='work-routine'>
      {
routines.map(routine=><Work routines={routine} key={routine.id} addToList={addToList}></Work>)
      }
      </div>
     
      </div>
      <div className='work-list'>
      
        {
          <List timeList={timeList}></List>
        }
      </div>
    </div>
  );
};

export default Works;