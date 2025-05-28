// import React from 'react'

// const Hello = () => {
//   return (
    
//     <div class="imageee">
    
//     <div class="card2">
//       <h1 className='heading'><b>Skills that transform your career</b></h1>
//       <p className='rrrr'>Our biggest sale of the season is here. Stock up on courses for as low as ₹399 each. Sale ends May 22.</p>
//     </div>

//     </div>
//   )
// }

// export default Hello;


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hello = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="imageee" data-aos="fade-up">
      <div className="card2" data-aos="fade-in" data-aos-delay="200">
        <h1 className='heading'><b>Skills that transform your career</b></h1>
        <p className='rrrr'>
          Our biggest sale of the season is here. Stock up on courses for as low as ₹399 each. Sale ends May 22.
        </p>
      </div>
    </div>
  )
}

export default Hello;
