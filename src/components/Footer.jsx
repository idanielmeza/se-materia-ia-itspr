import React from 'react'

const Footer = () => {
  return (
    <footer className='absolute bottom-0 bg-red-900 text-white w-full p-4 flex justify-end rounded-t-sm'>
        <p className='mx-2'>&copy;All rights reserved {new Date().getFullYear()} by Bernardo Antillano</p>
    </footer>
  )
}

export default Footer