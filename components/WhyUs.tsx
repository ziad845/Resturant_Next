"use client"
import React, { useEffect } from 'react'

import Aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const WhyUs = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine'

    });
  }, [])
  return (
    <section id='about' className='w-full justify-between items-center flex lg:flex-row flex-col'>
      <div id='content-section' className='lg:w-[50%] w-full flex flex-col justify-center items-center gap-10 p-20'>
        <h1 data-aos="zoom-in" className='text-[50px] text-black text-center leading-[55px]'>Where Every Treat <br></br> Tells a Tale</h1>
        <p data-aos="zoom-in" data-aos-delay="200"
          className='text-center text-xl text-slate-600'
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quae et amet numquam nam deserunt, laudantium eum aliquam porro obcaecati!</p>
        <button data-aos="flip-up" data-aos-delay="400"
          className='border-2 border-black rounded-full px-14 py-4 font-bold'
        >READ MORE</button>

      </div>

      <div data-aos="zoom-in" data-aos-delay="600" id='image-section'
        className='lg:w-[50%] w-full' >
        <Image src="/banner6.jpg" alt='hero-banner' width={800} height={500}
        className='bg-cover bg-center' />
      </div>
    </section>
  )
}

export default WhyUs