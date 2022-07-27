import React, {useEffect, useState, Fragment, useCallback } from 'react';

import Dropdown from './Dropdown';
import TableBody from './TableBody';

import './Table.css';

export default function Table() {
  const [standingsData, setStandingsData] = useState();
  const [leagueCode, setLeagueCode] = useState('BL1');

  const tableHeaders = [
    "pos", "crest", "team", "pts", "gp",
    "won", "draw", "lost", "gf", "ga", "gd"
  ];

  const sendLeagueCode = useCallback(code => {
     setLeagueCode(code)
  }, []);

  useEffect(() => {
    const fetchStandings = async () => {
      const response = await fetch('./api/soccer');
      const data = await response.json();

      setStandingsData(data);
    };

    // fetchStandings();
  }, []);
  
  return (
    <Fragment>
      <Dropdown parentCallback={sendLeagueCode} />
      <h1>{leagueCode}</h1>
      <table className='soccer-table'>
        <thead className='soccer-header'>
          <tr>
            {
              tableHeaders.map(item => (
                <th key={item}><span className='header-text'>{item.toUpperCase()}</span></th>
              ))
            }
          </tr>
        </thead>
          <TableBody standings={standingsData} />
      </table>
    </Fragment>
  );
};
