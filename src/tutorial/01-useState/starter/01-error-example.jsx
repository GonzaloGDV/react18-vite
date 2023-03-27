import { useState } from 'react';

const ErrorExample = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>
      <button type='button' className='btn' onClick={() => setCount(count + 1)}>
        Add
      </button>
    </>
  );
};

export default ErrorExample;
