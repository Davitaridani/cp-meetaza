import React from 'react'

const Footer = () => {
   const currentYear = new Date().getFullYear();

   return (
      <footer className='bg-orange md:mt-10 mt-8'>
         <div className="container">
            <p className='text-center md:text-base text-sm py-[10px] font-normal text-black'>&copy;{currentYear} | PT Meetaza Prawira Media</p>  
         </div>
      </footer>
   )
}

export default Footer