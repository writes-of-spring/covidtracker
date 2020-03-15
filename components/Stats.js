import React from 'react'
import useStats from '../hooks/useStats'

export default function Stats({ url }) {
  const { stats, loading } = useStats(url)
  if (!stats) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <h3>Stats:</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="statBlock">
            <h4>Confirmed: </h4>
            <span>{stats?.confirmed?.value || 'N/A'}</span>
          </div>
          <div className="statBlock">
            <h4>Recovered: </h4>
            <span>{stats?.recovered?.value || 'N/A'}</span>
          </div>
          <div className="statBlock">
            <h4>Deaths:</h4>
            <span>{stats?.deaths?.value || 'N/A'}</span>
          </div>
        </>
      )}
    </div>
  )
}
