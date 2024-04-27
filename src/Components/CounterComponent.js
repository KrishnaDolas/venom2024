import React, { useEffect, useState } from 'react';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.countapi.xyz/update/laptop/mouse/?amount=1');
        const data = await response.json();
        setCount(data.value);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>This page was viewed</p>
      <h1 style={{ fontSize: '70px', margin: 0 }}>{count}</h1>
      <p>times</p>
    </div>
  );
};

export default CounterComponent;
