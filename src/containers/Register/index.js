import { Input, Button } from 'antd-mobile';
import { CloseOutline } from 'antd-mobile-icons';
import logo from '../../assets/twitter-logo.svg';

import style from './index.module.css';
/**
 * reigister page
 */
const Register = () => {
  console.log('>>>');
  return (
    <div>
      <div className={style.header}>
        <CloseOutline className={style.closeIcon} />
        <img src={logo} alt="twitter-logo" className={style.twitterLogo} />
      </div>
      <div className="form">
        <div>Create Your Account</div>
        <Input placeholder="Account Name" />
        <Input placeholder="Phone Number" />
        <div>Use Email Address</div>
        <div>Date of Birth</div>
        <div>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</div>
        <Input placeholder="" />
      </div>
      <div className="footer" />
      <Button>Next Step</Button>
    </div>
  );
};

export default Register;
