import React from 'react'
import loader from '../assets/loading.svg'

const Spinner = () => {
  return (
    <div className='bg-black-opacity-50 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-20'>
      <div>
        <img src={loader} alt="loa..." className="h-24" />
      </div>
    </div>
  );
}

export default Spinner