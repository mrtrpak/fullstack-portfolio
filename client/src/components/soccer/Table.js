import React, {useEffect, useState } from 'react';

import useStickyHeader from './useStickyHeader';
import TableBody from './TableBody';

export default function Table() {
  const { tableRef, isSticky } = useStickyHeader();
  const [standingsData, setStandindsData] = useState();

  const tableHeaders = [
    "pos", "crest", "team", "pts", "gp",
    "won", "draw", "lost", "gf", "ga", "gd"
  ];

  useEffect(() => {
    const fetchStandings = async () => {
      const response = await fetch('./api/soccer');
      const data = await response.json();

      setStandindsData(data);
    };

    fetchStandings();
  }, []);

  const renderHeader = () => (
    <thead>
      <tr>
        {
          tableHeaders.map(item => (
            <th key={item}>{item}</th>
          ))
        }
      </tr>
    </thead>
  );
  
  return (
    <div>
      {isSticky && (
        <table
          className='sticky'
          style={{
            position: 'fixed', top: 0, left: 0, right: 0
          }}
        >
          {renderHeader()}
        </table>
      )}
      <table ref={tableRef}>
        {renderHeader()}
        <TableBody standings={standingsData} />
      </table>
    </div>
  )

};