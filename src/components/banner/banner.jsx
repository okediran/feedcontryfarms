import React from 'react'
import Typed from 'typed.js';
// import { motion } from "framer-motion";
// import img from '../../assets/images/hero-1-800x1200.jpg'
export default function Banner() {
  const el = React.useRef(null);
  const el2 = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<h1>Welcome to THE FEED COUNTRY FARM, your trusted partner in the world of agricultural commodities</h1>'],
      typeSpeed: 100,
      loop: true
    });

    const typed2 = new Typed(el2.current, {
      strings: ['<h1>Welcome to The Feed Country Farm, your trusted partner in the world of agricultural commodities</h1>'],
      typeSpeed: 60,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
      typed2.destroy();
    };
  }, []);
  return (
    <div className='md:flex banner'>
      <div className='flex justify-center items-center text-[orange] text-[2rem] text-center font-[700] bg-cover bg-center xs:h-[500px] md:h-[800px] bg-no-repeat md:w-[50%] bg'>
        <div className='md:hidden xs:block'>
          <h1 ref={el2} >
          </h1>
        </div>
        <div className='firstdiv md:w-[50%] xs:w-[100%]'>
        </div>
      </div>
      <div className='w-[50%] md:flex justify-center items-center text-[orange] text-[3rem] text-center font-[700] px-9 relative hidden' style={{ background: "rgba(255, 165, 0, .1)" }}>
        <h1 ref={el}>
        </h1>
        <div className='seconddivFooter'>
        </div>
      </div>
    </div>
  )
}
