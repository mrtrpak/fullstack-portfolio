import React, { useState } from 'react';

import dropdownIcon from '../../icons/icons8-drag-list-down-48.png';

import './Dropdown.css';

export default function Dropdown({ parentCallback }) {
  const [display, setDisplay] = useState('none');

  const handleHover = () => {
    display === 'none' ? setDisplay('block') : setDisplay('none');
  };

  const changeLeagueCode = code => {
    switch (code) {
      case 'PL': parentCallback('PL');
        break;
      case 'PD': parentCallback('PD');
        break;
      case 'SA': parentCallback('SA');
        break;
      case 'FL1': parentCallback('FL1');
        break;
      case 'PPL': parentCallback('PPL');
        break;
      case 'DED': parentCallback('DED');
        break;
      default: parentCallback('BL1');
    };
  };
  
  return (
    <div className='dropdown'>
      <div className='icon-container' onClick={() => handleHover()}>
        <img src={dropdownIcon} alt='dropdown icon' className='dropdown-icon' />
      </div>
      <div className='dropdown-menu' style={{ display: display }}>
        <button className='escape' onClick={() => setDisplay('none')}>X</button>
        <div className='table-key'>
          <button className='btn'>TABLE KEY</button>
        </div>
        <button onClick={() => changeLeagueCode('PL')} className='btn league-btn'>English Premier League</button>
        <button onClick={() => changeLeagueCode('PD')} className='btn league-btn'>Spanish La Liga</button>
        <button onClick={() => changeLeagueCode('SA')} className='btn league-btn'>Italian Serie A</button>
        <button onClick={() => changeLeagueCode('FL1')} className='btn league-btn'>French Ligue 1</button>
        <button onClick={() => changeLeagueCode('PPL')} className='btn league-btn'>Portuguese Primeira Liga</button>
        <button onClick={() => changeLeagueCode('DED')} className='btn league-btn'>Dutch Eredivisie</button>
      </div>

    </div>
  );
};
