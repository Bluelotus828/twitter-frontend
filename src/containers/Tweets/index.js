import Bottom from '@components/Bottom';
import { useState, useEffect } from 'react';

import style from './index.module.scss';

/**
*
*/
const Tweets = () => {
  const [data, setDate] = useState();
  useEffect(() => {
    console.log('data', data);
    setDate([]);
  }, []);
  return (
    <div className={style.container}>
      <Bottom />
    </div>
  );
};

export default Tweets;
