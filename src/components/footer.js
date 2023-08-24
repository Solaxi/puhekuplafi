import React from 'react'
import {AiFillMail, AiFillEnvironment, AiFillPhone} from 'react-icons/ai'

const Footer = () => {
  const FooterItem = ({label, icon}) => 
    <li className='flex items-center gap-2 transition ease-in-out hover:scale-105 duration-300'>
      {icon} <p>{label}</p>
    </li>

  return (
    <section id="footer" className='mt-0 rounded bg-gradient-to-t from-teal-500 to-white py-8 px-8'>
    <div className='text-black md:text-center'>
      <h1 className='font-medium text-lg'>Yhteystiedot</h1>
      <p>Y-tunnus: 2451327-3 </p>

      <ul className='md:flex justify-center gap-4'>
        <FooterItem label='paulan.puhekupla@gmail.com' icon={<AiFillMail />} />
        <FooterItem label='Penttilänkatu 6, 37100 Nokia' icon={<AiFillEnvironment />} />
        <FooterItem label='045 166 0858' icon={<AiFillPhone />} />
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