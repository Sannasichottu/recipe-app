import React from 'react'
import './Loader.scss'
// import LoadingAnimation from './animation.svg'


function Loader( {name} ) {
  return (
    <div className='loader' >
      <div className='animation'>
       </div>

      <div className='title'>{name}</div>
    </div>
  )
}

export default Loader;
