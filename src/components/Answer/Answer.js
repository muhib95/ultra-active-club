import React from 'react';
import './Answer.css'
const Answer = () => {
  return (
    <div>
      <h2>Answer</h2>
    <div className='answer'>
    <div className='answer-item'>
        <h2>How does react work?</h2>
        <p>
        ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.
        </p>
      </div>
      <div className='answer-item'>
        <h2>Differance between props and state?</h2>
        <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
      </div>
      <div className='answer-item'>
        <h2>How does useeffect work without data loading?</h2>
        <p>it runs both after the first render and after every update.Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.

</p>
      </div>
    </div>
    </div>
  );
};

export default Answer;