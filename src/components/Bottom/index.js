import { TabBar } from 'antd-mobile';
import { useState } from 'react';
import homeSvg from '@assets/home.svg';
import messageSvg from '@assets/message.svg';
import tipSvg from '@assets/tip.svg';
import searchSvg from '@assets/search.svg';

import style from './index.module.scss';

const menus = [
  {
    key: 'home',
    title: '主页',
    link: 'tweets',
    icon: <img className={style.icon} src={homeSvg} alt="Home" />,
  },
  {
    key: 'search',
    link: '/',
    icon: <img className={style.icon} src={searchSvg} alt="Search" />,
  },
  {
    key: 'tip',
    title: '通知',
    link: '/',
    icon: <img className={style.icon} src={tipSvg} alt="Notification" />,
  },
  {
    key: 'message',
    title: '私信',
    link: '/',
    icon: <img className={style.icon} src={messageSvg} alt="PM" />,
  },
];

const Bottom = () => {
  const [activeKey, setActiveKey] = useState();

  const onChangeTabItem = (key) => {
    setActiveKey(key);
  };

  return (
    <div className={style.container}>
      <TabBar activeKey={activeKey} onChange={onChangeTabItem}>
        {menus.map((item) => (
          item.isMenu && <TabBar.Item key={item.key} icon={item.icon} />
        ))}
      </TabBar>
    </div>
  );
};

export default Bottom;
