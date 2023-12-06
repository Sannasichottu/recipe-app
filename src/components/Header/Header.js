import React from 'react'
import './Header.scss'
import SearchBar from '../searchBar/SearchBar'
function Header({title = "My app" }) {
  return (
    <div className='header'>
      <div className='title'>
            {title}
      </div>
     <SearchBar />
    </div>
  )
}

export default Header
