import React, { useEffect, useState } from 'react';
import Work from '../Work/Work';

const Works = () => {
  const [routines,setRoutine]=useState([]);
  useEffect(()=>{
    fetch('fakedata.json')
    .then(res=>res.json())
    .then(data=>setRoutine(data))
  },[])
  // console.log(routines);
  return (
    <div>
      <h2>Daily Works</h2>
      {
routines.map(routine=><Work routines={routine} key={routine.id}></Work>)
      }
    </div>
  );
};

export default Works;