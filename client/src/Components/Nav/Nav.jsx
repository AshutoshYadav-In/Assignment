import React from 'react'
import './Nav.css'
import { useEffect ,useCallback } from 'react';
import { Link } from 'react-router-dom';
import {search} from '../Redux/Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import debounce from 'lodash/debounce';
function Nav() {

  const dispatch  = useDispatch();
  //debouncing 
  const handleSearchDebounce = (text) => {
    deb(text);
  };
  const deb = useCallback(
    debounce((text) => {
dispatch(search(text))
    }, 500),
    []
  );
  return (
    <div className='Nav'>
      <p>Heliverse</p>
      <div className='NIC'>
        <input onChange={(e)=> handleSearchDebounce(e.target.value)} type="text" placeholder='Search User' />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </div>
  )
}

export default Nav