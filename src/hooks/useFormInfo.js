import { useState } from 'react';
import useAuth from './useAuth';

const useFormInfo = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState({
    email: user?.email,
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };
  return { handleChange, userInfo };
};

export default useFormInfo;
