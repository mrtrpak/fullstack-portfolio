import React from 'react';

import './TableBody.css';

// import { standingsDevelopment } from './testing';

export default function TableBody({ standings = [], league = '' }) {

  console.log(standings, 'body standings')
  return (
    <tbody className={`table-body table-body-${league}`}>
      {
        Object.entries(standings).map((team, idx) => {
          const { name, crestUrl } = team[1].team;
          const { 
            position, playedGames, won, draw, lost, points, 
            goalsFor, goalsAgainst, goalDifference 
          } = team[1];

          return (
            <tr key={idx} className={`place-${position}`}>
              <td>
                <span className='position-text'>{position}</span>
              </td>
              <td>
                <img src={crestUrl} alt='Team Badge' className={`badge badge-${position}`} />
              </td>
              <td>
                <span className='name-text'>{name}</span>
              </td>
              <td>
                <span className='points-text'>{points}</span>
              </td>
              <td>{playedGames}</td>
              <td>{won}</td>
              <td>{draw}</td>
              <td>{lost}</td>
              <td>{goalsFor}</td>
              <td>{goalsAgainst}</td>
              <td>{goalDifference}</td>
            </tr>
          )
        })
      }
    </tbody>
  );
};
