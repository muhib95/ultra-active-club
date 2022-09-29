import React, { useEffect, useState } from 'react';
import Nav from '../../Nav/Nav';
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
        <div className='routine-nav'>
        <Nav></Nav>
        </div>
        
       <h2 className='goal'>Daily Goals</h2>
       <div className='work-routine'>
       {
 routines.map(routine=><Work routines={routine} key={routine.id} addToList={addToList}></Work>)
       }
       </div>
      
       </div>
       <div className='work-list'>
        <div className='list-nav'>
        <Nav></Nav>
        </div>
       
         {
           <List timeList={timeList}></List>
         }
       </div>
     </div>
    
   
  );
};

export default Works;