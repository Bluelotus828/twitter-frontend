


const TweetCard = () => {


}
  return (
    <div className={style.container}>
      <div className={style.avatarContainer}>
        <img src="" alt="头像" className={style.avatar} />
      </div>
      <div className={style.contentContainer}>
        <div className={style.header}>
          <span className={style.nickname}>
            {}
          </span>
          @
          <span className={style.userName}>{}</span>
          &NBSP;·&NBSP;
          {}
        </div>
      </div>
      <div className={style.content}>
        {}
      </div>
      <div className={style.photo}>
        {}
      </div>
      <div className={style.bar}>
        {}
      </div>
    </div>
  );
};

export default TweetCard;
