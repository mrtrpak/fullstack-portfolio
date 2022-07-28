import React, {useEffect, useState, Fragment, useCallback } from 'react';
import axios from 'axios';

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

  const getLeagueCode = useCallback(code => {
    setLeagueCode(code);
 }, []);

  useEffect(() => {
    const fetchStandings = async () => {
      const response = await axios.get('/api/soccer',
      {
        params: {
          code: leagueCode
        }
      });

      console.log(response.data);

      setStandingsData(response.data);
    };

    fetchStandings();

    // const fetchStandings = async () => {
    //   const response = await fetch(`/api/soccer?leagueCode=${leagueCode}`);
    //   const data = await response.json();

    //   setStandingsData(data);
    // };

    // fetchStandings();

  }, [leagueCode]);
  
  return (
    <Fragment>
      <Dropdown parentCallback={getLeagueCode} />
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
