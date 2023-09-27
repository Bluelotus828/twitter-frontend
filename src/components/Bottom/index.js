import { useState, useEffect } from 'react';

const Bottom = () => {
  const [data, setDate] = useState();
  useEffect(() => {
    console.log('data', data);
    setDate([]);
  }, []);
  return <div>{data}</div>;
};

export default Bottom;
