import { useState } from 'react';
// import Dr_B_R_Ambedkar_University_Logo from '../../images/Dr_B_R_Ambedkar_University_Logo.png'
import Registration from './Registration';
import UserLogin from './UserLogin';

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div className={`tab-panel ${value !== index ? 'hidden' : ''}`}>
      {
        value === index && (
          <div>{children}</div>
        )
      }
    </div>
  )
}

const LoginReg = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <div className="flex justify-center pt-8">
      <div className="lg:w-5/12 sm:w-7/12">
        <div className="mx-3 h-530 border border-gray-200 rounded-lg shadow-lg">
          <div className="border-b-2 border-gray-200">
            <div className="flex justify-center">
              <button className={`tab ${value === 0 ? 'active' : ''} py-2 px-4 font-semibold rounded-t-lg focus:outline-none`} onClick={() => handleChange(null, 0)}>Login</button>
              {/* <button className={`tab ${value === 1 ? 'active' : ''} py-2 px-4 font-semibold rounded-t-lg focus:outline-none`} onClick={() => handleChange(null, 1)}>Registration</button> */}
            </div>
          </div>
          <TabPanel value={value} index={0}>
            <UserLogin />
          </TabPanel>
          {/* <TabPanel value={value} index={1}>
            <Registration />
          </TabPanel> */}
        </div>
        
      </div>
    </div>
  );
};

export default LoginReg;