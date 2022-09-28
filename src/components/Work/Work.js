import React from 'react';

const Work = (props) => {
  // console.log(props.routines);
  const {picture,time,name,about}=props.routines;
  return (
    <div>
      <img src={picture} alt="pic" />
      <h2>{name}</h2>
      <p>{time}</p>
      <p>{about}</p>
      <button>add to work</button>
    </div>
  );
};

export default Work;