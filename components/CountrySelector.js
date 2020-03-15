import React, { useState } from 'react'
import Stats from './Stats'
import useStats from '../hooks/useStats'

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  )
  const [selectedCountry, setSelectedCountry] = useState('IE')
  if (!countries) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <h4>Currently Showing {selectedCountry}</h4>
      <select onChange={e => setSelectedCountry(e.target.value)}>
        {Object.entries(countries.countries).map(([country, code]) => {
          return (
            <option
              key={code}
              // selected={selectedCountry}
              value={countries.iso3[code]}
            >
              {country}
            </option>
          )
        })}
      </select>
      {!error && (
        <Stats
          url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
        />
      )}
    </div>
  )
}
