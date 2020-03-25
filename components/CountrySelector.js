import React, { useState, useEffect, useRef } from 'react'
import Stats from './Stats'
import useStats from '../hooks/useStats'

export default function CountrySelector() {
  const firstRender = useRef(true)
  const [options, loading] = useStats(
    'https://covid19.mathdro.id/api/countries'
  )
  const [selectedCountry, setSelectedCountry] = useState('IRL')
  const [selectedLongName, setSelectedLongName] = useState('Ireland')

  useEffect(() => {
    if (!firstRender.current) {
      let { name } = options.countries.find(
        country => country.iso3 === selectedCountry
      )
      setSelectedLongName(name)
    }
    firstRender.current = false
  }, [selectedCountry])

  if (!options) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <h4>Currently Showing {selectedLongName}</h4>
      <select
        value={selectedCountry}
        onChange={e => {
          setSelectedCountry(e.target.value)
        }}
      >
        {options.countries.map(country => {
          return (
            <option key={country.iso3} value={country.iso3}>
              {country.name}
            </option>
          )
        })}
      </select>
      {!loading && (
        <Stats
          url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
        />
      )}
    </div>
  )
}
