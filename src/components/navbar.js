import React from 'react'

const scrollToTop = (event) => {
  event.preventDefault();
  window.scrollTo({ top:0, left:0, behavior:'smooth'})
}

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm px-8 md:px-20 lg:px-40 py-4 flex justify-between items-center z-50">
      <div className='flex gap-3'>
        <a href='/' className='flex gap-3' onClick={scrollToTop}><img src='favicon.png' alt='' /><h1 className="text-lg">Puhekupla</h1></a>
      </div>
      {/*<ul className="flex items-center">
          <li>icon</li>
          <a className="px-4 py-2 bg-gradient-to-r from-cyan-500 text- to-teal-500 bg-blue-300 rounded-md ml-8 text-white" href="/">Resume</a>
      </ul>*/}
    </nav>
  )
}

export default Navbar