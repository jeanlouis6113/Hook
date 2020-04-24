import React, { useState } from 'react';

function Counter () {
  const [count, setCount] = useState(0);

  function handleInput (e) {
    setCount(e.target.value);
  }

  return (
    <div>
      <p>Le compteur commence à : </p>
      <input
        type='text'
        id='initvalue'
        name='initvalue'
        onChange={handleInput}
      />

      <p>Le compteur est  à : {count} </p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;
