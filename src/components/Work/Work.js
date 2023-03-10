import React from 'react';
import './Work.css'
const Work = (props) => {
  // console.log(props);
  const {picture,time,name,about}=props.routines;
  return (
    <div className='work-item'>
      <div className='work-info'>
      <img src={picture} alt="pic" />
      <h2>{name}</h2>
      <p>{about.slice(0,100)}</p>
      <h4>Time required : <span>{time}hr</span></h4>
      
      </div>
     <div className='btn-div'>
     <button className='work-btn' onClick={()=>props.addToList(props.routines)}>add to work</button>
     </div>
      
    </div>
  );
};

export default Work;