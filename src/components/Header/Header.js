import React from 'react'
import './Header.scss'
import SearchBar from '../searchBar/SearchBar'
function Header({title = "My app", setSearchQuery }) {
  return (
    <div className='header'>
      <div className='title'>
            {title}
      </div>
     <SearchBar setSearchQuery={setSearchQuery} />
    </div>
  )
}

export default Header
