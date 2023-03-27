import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'build pc',
  });

  const handleChange = () => {
    setPerson({ ...person, name: 'susan' });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h4>{person.age}</h4>
      <h5>{person.hobby}</h5>
      <button className='btn' onClick={handleChange}>
        Change
      </button>
    </>
  );
};

export default UseStateObject;
