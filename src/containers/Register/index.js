import { Input, Button } from 'antd-mobile';
import Header from '../../components/Header';
import DatePickerInput from '../../components/DatePickerInput';

import style from './index.module.css';
/**
 * reigister page
 */
const Register = () => {
  console.log('>>>');
  return (
    <div>
      <Header />
      <div className={style.form}>
        <div className={style.formTitle}>创建你的账户</div>
        <Input placeholder="姓名" className={style.input} />
        <Input placeholder="电话" className={style.input} />
        <div className={style.changeTypeButton}>改用电子邮件地址</div>
        <div className={style.birthdayTitle}>出生日期</div>
        <div>这不会公开显示。确认你的年两，即使此账号用于业务、宠物或其他内容</div>
        <DatePickerInput />
      </div>
      <div className={style.footer}>
        <Button className={style.footerButton}>Next Step</Button>
      </div>
    </div>
  );
};

export default Register;
