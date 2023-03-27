import { data } from '../../../data';
import { useState } from 'react';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const handleClick = () => {
    setPeople([]);
  };

  const handleChange = (id) => {
    const newArr = people.filter((person) => person.id !== id);
    setPeople(newArr);
  };

  return (
    <>
      <section>
        {people.map((person) => {
          const { id, name } = person;
          return (
            <div key={id}>
              <h3>{name}</h3>
              <button
                type='button'
                className='btn'
                onClick={() => handleChange(id)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </section>
      <br />
      <button type='button' className='btn' onClick={handleClick}>
        Remove All
      </button>
    </>
  );
};

export default UseStateArray;
