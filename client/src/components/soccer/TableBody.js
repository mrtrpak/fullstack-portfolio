import React from 'react';

export default function TableBody({ standings = [] }) {
  return (
    <tbody>
      {
        Object.entries(standings).map((team, idx) => {
          const { name, crestUrl } = team[1].team;
          const { position, playedGames, won, draw, lost, points, goalsFor, goalsAgainst, goalDifference } = team[1];

          return (
            <tr key={idx}>
              <td>{position}</td>
              <td>{crestUrl}</td>
              <td>{name}</td>
              <td>{points}</td>
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
  )
}