import React, { useState } from 'react';

import dropdownIcon from '../../icons/icons8-drag-list-down-48.png';

import './Dropdown.css';

export default function Dropdown() {
  const [display, setDisplay] = useState('block');

  const handleHover = () => {
    display === 'none' ? setDisplay('block') : setDisplay('none');
    console.log(display)
  }
  
  return (
    <div className='dropdown'>
      <div className='icon-container' onClick={() => handleHover()}>
        <img src={dropdownIcon} alt='dropdown icon' className='dropdown-icon' />
      </div>
      <div className='dropdown-menu' style={{ display: display }}>
        <button className='btn table-key'>TABLE KEY</button>
      </div>

    </div>
  )
}