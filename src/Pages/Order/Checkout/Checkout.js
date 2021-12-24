import { HiOutlineInformationCircle } from 'react-icons/hi';
import { AiFillLock } from 'react-icons/ai';
import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useAuth from '../../../hooks/useAuth';
import useFormInfo from '../../../hooks/useFormInfo';
import PaymentForm from './PaymentForm';
import useCartInfo from '../../../hooks/useCartInfo';

const stripePromise = loadStripe('pk_test_ZcXFgWxX9DA3B3TRrZ37fRfV00jFRXgjc9');

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 0.5rem;
  input {
    padding: 1rem;
    font-family: 'DM Sans', sans-serif;
    margin: 7px 0;
    border-radius: 5px;
    border: 2px solid #181d4e;
  }
`;

const Checkout = () => {
  const { user, isLoading } = useAuth();
  const { handleChange } = useFormInfo();
  const { totalAmount } = useCartInfo();

  if (isLoading) return <h2>Loading...</h2>;
  // console.count(userInfo);
  return (
    <div className="px-4 py-16 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-2xl uppercase font-bold mb-6">
          Personal Information
          <HiOutlineInformationCircle className="inline -mt-1 ml-2" />
        </h3>
        <FormStyled>
          <input
            type="text"
            placeholder="First Name"
            className="col-span-6"
            name="firstName"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="col-span-6"
            name="lastName"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Your Email"
            defaultValue={user?.email}
            className="col-span-6"
            name="email"
            onChange={handleChange}
          />
          <input
            type="tel"
            className="col-span-6"
            placeholder="Phone Number"
            name="phoneNumber"
            onChange={handleChange}
          />
          <input
            type="text"
            className="col-span-6"
            placeholder="City"
            name="city"
            onChange={handleChange}
          />
          <input
            type="text"
            className="col-span-6"
            placeholder="State"
            name="state"
            onChange={handleChange}
          />
          <input
            type="text"
            className="col-span-6"
            placeholder="Zip Code"
            name="zipCode"
            onChange={handleChange}
          />
          <input
            type="text"
            className="col-span-6"
            placeholder="Country"
            name="country"
            onChange={handleChange}
          />
        </FormStyled>
      </div>
      <div className="ml-16">
        <h3 className="text-2xl uppercase font-bold mb-6">
          Payment Information
          <AiFillLock className="inline -mt-1 ml-2" />
        </h3>
        <div>
          <Elements stripe={stripePromise}>
            <PaymentForm totalAmount={totalAmount} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
