import { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

const useAuth = () => useContext(authContext);

export default useAuth;
