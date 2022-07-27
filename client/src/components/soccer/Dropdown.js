import React, { useState } from 'react';

import dropdownIcon from '../../icons/icons8-drag-list-down-48.png';

import './Dropdown.css';

export default function Dropdown({ parentCallback }) {
  const [display, setDisplay] = useState('block');

  const handleHover = () => {
    display === 'none' ? setDisplay('block') : setDisplay('none');
  };

  const getLeagueCode = code => {
    switch (code) {
      case 'PL': parentCallback('PL');
        break;
      case 'PD': parentCallback('PD');
        break;
      default: parentCallback('BL1');
    }
  }
  
  return (
    <div className='dropdown'>
      <div className='icon-container' onClick={() => handleHover()}>
        <img src={dropdownIcon} alt='dropdown icon' className='dropdown-icon' />
      </div>
      <div className='dropdown-menu' style={{ display: display }}>
        <div className='table-key'>
          <button className='btn'>TABLE KEY</button>
        </div>
        <button onClick={() => getLeagueCode('PL')} className='btn league-btn'>Premier League</button>
        <button onClick={() => getLeagueCode('PD')} className='btn league-btn'>La Liga</button>
      </div>

    </div>
  )
}