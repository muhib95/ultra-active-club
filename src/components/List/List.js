import React, { useState } from 'react';
import MyImage from '../../image/my.jpg';
import './List.css'
const List = () => {
  const [time,setTime]=useState(0);
  const breakTimeButton=(e)=>{
    setTime(e);
  }
  return (
    <div>
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
      <h2>Exercise Time:</h2>
      <h2>Break time:{time}</h2>
      </div>
     

    </div>
  );
};

export default List;