import React, { useEffect, useState } from 'react';
import { getLocal, setLocal } from '../../data/fakedata';
import MyImage from '../../image/my.jpg';
import './List.css'
const List = (props) => {
  // console.log(props.timeList);
  const [time,setTime]=useState(0);
  useEffect(()=>{
    const localValue=getLocal();
    // console.log(localValue);
    setTime(localValue);
  },[]);
  const breakTimeButton=(e)=>{
    setTime(e);
    setLocal(e);
  }

 let total=0;
 for(const getTime of props.timeList){
total=total+getTime.time;
 }
 
  return (
    <div className='full-list'>
      <div className='list-profile'>
        <img src={MyImage} alt="" />
        <div className='info'>
          <h2>Muhibbul Hasan</h2>
          <p>Bangladesh</p>
        </div>
      </div>
      
      <div className='position'>
        <div className='position-item'>
        <h4>85</h4>
        <p>Mark</p>
        </div>
        <div className='position-item'>
        <h4>722</h4>
        <p>Position</p>
        </div>
        <div className='position-item'>
        <h4>8hr</h4>
        <p>Times</p>
        </div>
      </div>
      <h2>Add Break</h2>
      <div className='break-btn'>
        <button onClick={()=>breakTimeButton(20)}>20m</button>
        <button onClick={()=>breakTimeButton(30)}>30m</button>
        <button onClick={()=>breakTimeButton(40)}>40m</button>
        <button onClick={()=>breakTimeButton(50)}>50m</button>
        <button onClick={()=>breakTimeButton(60)}>60m</button>
      </div>
      <div className='exercise-details'>
      <h2>Exercise Details</h2>
      <h2 className='exercise-time'>Exercise Time: <span>{total} hr</span></h2>
      <h2 className='exercise-time'>Break time: <span>{time} min</span></h2>
      </div>
     <button className='activity-btn'>Activity Completed</button>

    </div>
  );
};

export default List;