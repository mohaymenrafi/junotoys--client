import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useCartInfo from '../../../hooks/useCartInfo';
import Spinner from '../../../Utilities/Spinner';
/* eslint-disable react/prop-types */
const PaymentForm = ({ totalAmount }) => {
  const { userInfo } = useCartInfo();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    // fetch('http://localhost:5000/create-payment-intent', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify({ totalAmount }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    axios
      .post('http://localhost:5000/create-payment-intent', { totalAmount })
      .then((res) => setClientSecret(res.data.clientSecret));
  }, [totalAmount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    const card = elements.getElement(CardElement);

    /* eslint-disable */
    if (card == null) return;
    /* eslint-enable */
    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      setError(error.message);
      setSuccess('');
    } else {
      setError('');
      console.log(paymentMethod);
    }

    // payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: userInfo,
        },
      });
    if (intentError) {
      setError(intentError.message);
      setSuccess('');
    } else {
      setError('');
      setSuccess('Your payment processed succesfully');
      setProcessing(false);
      console.log(paymentIntent);
      // save to database
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {processing ? (
        <Spinner />
      ) : (
        <button
          type="submit"
          disabled={!stripe}
          className="px-4 py-2 text-white inline-block mt-6 rounded font-semibold bg-blue1"
        >
          Pay
        </button>
      )}
      {error && <p className="text-red-700 font-dm text-lg">{error}</p>}
      {success && <p className="text-green font-dm text-lg">{success}</p>}
    </form>
  );
};

export default PaymentForm;
