import React from 'react'
import {AiFillMail, AiFillEnvironment, AiFillPhone} from 'react-icons/ai'

const Footer = () => {
  return (
    <section id="footer" className='mt-5 rounded bg-gradient-to-t from-teal-500 to-white py-8 px-8'>
    <div className='text-black md:text-center'>
      <h1 className='font-medium text-lg'>Yhteystiedot</h1>
      <p>Y-tunnus: 2451327-3 </p>

      <ul className='md:flex justify-center gap-4'>
        <li className='flex items-center gap-2'>
          <AiFillMail />
          <p>paulan.puhekupla@gmail.com</p>
        </li>
        <li className='flex items-center gap-2'>
          <AiFillEnvironment />
          <p>Penttilänkatu 6, 37100 Nokia</p>
        </li>
        <li className='flex items-center gap-2'>
          <AiFillPhone/>
          <p>045 166 0858</p>
        </li>
      </ul>

      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>

      <p className="text-center text-sm text-black-300 sm:text-center">
        &copy; {new Date().getFullYear()} Puhekupla.fi
      </p>

    </div>
    </section>
  )
}

export default Footer