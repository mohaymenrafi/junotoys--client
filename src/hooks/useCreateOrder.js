import swal from '@sweetalert/with-react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const useCreateOrder = () => {
  const { history } = useHistory();
  function postOrder(info) {
    axios.post('http://localhost:5000/orders', info).then((res) => {
      console.log(res.data);
      swal('Order is placed successfully!', '', 'success');
    });
    history.push('/products');
  }
  return { postOrder };
};

export default useCreateOrder;
