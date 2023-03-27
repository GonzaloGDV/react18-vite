import { useState } from 'react';

const UseStateGotcha = () => {
  const [gotcha, setGotcha] = useState(0);

  const handleClick = () => {
    setGotcha((currentState) => {
      return currentState + 1;
    });
  };

  return (
    <>
      <h3>{gotcha}</h3>
      <button className='btn' onClick={handleClick}>
        Gotcha
      </button>
    </>
  );
};

export default UseStateGotcha;
