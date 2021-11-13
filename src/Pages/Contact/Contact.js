import React from 'react';
import { useForm } from 'react-hook-form';
import swal from '@sweetalert/with-react';
import babyImg from '../../images/contact-img.png';
import './Contact.css';

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    swal('Thanks!', "We've received your submission!", 'success');
    reset();
  };
  return (
    <div className="contact grid grid-cols-1 md:grid-cols-7 bg-bgGray">
      <div className="hidden md:block md:col-span-3 bg-blue1 pl-12 pt-16 flex items-end">
        <div className="-mr-16 flex items-end">
          <img src={babyImg} alt="" />
        </div>
      </div>
      <div className="md:col-span-4 md:ml-16 px-12 py-32">
        <h3 className="uppercase text-sm font-qsand font-semibold text-blue1 tracking-widest">
          contact us
        </h3>
        <h2>Have Questions?</h2>
        <h2>Get in touch</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Your Name" {...register('name')} />
          <input
            type="email"
            required
            placeholder="Your Email"
            {...register('email')}
          />
          <textarea
            rows="5"
            placeholder="Your message"
            {...register('message')}
          />
          <input
            className="bg-blue1 text-white uppercase hover:bg-paste cursor-pointer transition-all"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
