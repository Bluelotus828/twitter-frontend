import style from './index.module.css';
import datapickerIcon from '../../assets/datapicker-icon.svg';

export default () => (
  <div className={style.birthdayInput}>
    <div className={style.birthdayTitleItem}>出生日期</div>
    <div>
      <span className={style.birthdayPlaceholder}>年/月/日</span>
      <img className={style.datepickerIcon} src={datapickerIcon} alt="datapickerIcon" />
    </div>
  </div>
);
