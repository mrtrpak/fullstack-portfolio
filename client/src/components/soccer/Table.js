import React, {useEffect, useState } from 'react';

import TableBody from './TableBody';

import './Table.css';

export default function Table() {
  const [standingsData, setStandingsData] = useState();

  const tableHeaders = [
    "pos", "crest", "team", "pts", "gp",
    "won", "draw", "lost", "gf", "ga", "gd"
  ];

  useEffect(() => {
    const fetchStandings = async () => {
      const response = await fetch('./api/soccer');
      const data = await response.json();

      setStandingsData(data);
    };

    fetchStandings();
  }, []);
  
  return (
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
  );
};
