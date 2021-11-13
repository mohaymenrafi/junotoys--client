import React from 'react';
import img1 from '../../../images/about1.jpg';
import img2 from '../../../images/about2.jpg';
import smile from '../../../images/smile.svg';

const AboutHome = () => (
  <div className="container mx-auto py-32 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div>
      <img src={img1} alt="" className="rounded-xl mx-auto" />
      <object
        data={smile}
        width="100"
        height="100"
        className="block ml-auto -mt-12"
      >
        {' '}
      </object>
    </div>
    <div>
      <h3 className="text-center uppercase font-semibold mb-4">
        creative approache
      </h3>
      <h2 className=" mb-4"> We help you take care of the kids</h2>
      <p className="text-gray2 text-lg my-5">
        Not only do we sell toys, but also we try to make sure that your brats
        are safe playing, educating, and having fun!
      </p>
      <div className="mt-24">
        <img src={img2} alt="" className="rounded-xl mx-auto" />
      </div>
    </div>
  </div>
);

export default AboutHome;
