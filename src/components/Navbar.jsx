import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
       <Link to='/'>
       React Books App
       </Link>
      </div>
      <div>
        <Link to='/favourites'>
        Your Favourites ♡
        </Link>
      </div>
    </div>
  )
}

export default Navbar