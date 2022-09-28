import React from 'react';
import MyImage from '../../image/my.jpg';
import './List.css'
const List = () => {
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
        <button>20m</button>
        <button>30m</button>
        <button>40m</button>
        <button>50m</button>
        <button>60m</button>
      </div>
      <div className='exercise-details'>
      <h2>Exercise Details</h2>
      <h2>Exercise Time:</h2>
      <h2>Break time:</h2>
      </div>
     

    </div>
  );
};

export default List;