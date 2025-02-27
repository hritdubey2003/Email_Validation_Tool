import React from 'react'

function Navbar() {
  return (
    <>
        <div className='flex flex-row justify-around mt-7 border border-black'>
            <div className=''>Logo</div>
            <a href='www.google.com'>Services</a>
            <div href="www.google.com">About US</div>
            <div>Contact Us</div>
            <div>Sign In</div>
        </div>
    </>
  )
}

export default Navbar