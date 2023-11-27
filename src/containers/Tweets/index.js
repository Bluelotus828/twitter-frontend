import { useState, useEffect } from 'react';

import style from './index.module.scss';

/**
*main tweet page
*/
const Tweets = () => {
  const [data, setDate] = useState();
  useEffect(() => {
    console.log('data', data);
    setDate([]);
  }, []);
  return (
    <div className={style.container}>
      {data}
    </div>
  );
};

export default Tweets;
