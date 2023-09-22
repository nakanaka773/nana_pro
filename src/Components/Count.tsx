import React, { useEffect, useState } from 'react';

function Count() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(()=>{
    console.log("arigato");
  },[count])

  return (
    <div className='text-center'>
      <h1 className='font-bold'>Counter</h1>
      <h2>カウント: {count}</h2>
      <button onClick={handleClick}>+</button>
      
      
    </div>
  );
}

export default Count;