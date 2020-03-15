import React from 'react'
import useStats from '../hooks/useStats'

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url)
  console.log(stats)
  if (!stats) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <h3>Stats:</h3>
      <div className="statBlock">
        <h4>Confirmed: </h4>
        <span>{stats.confirmed.value}</span>
      </div>
      <div className="statBlock">
        <h4>Recovered: </h4>
        <span>{stats.recovered.value}</span>
      </div>
      <div className="statBlock">
        <h4>Deaths:</h4>
        <span>{stats.deaths.value}</span>
      </div>
    </div>
  )
}
