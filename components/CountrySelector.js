import React, { useState } from 'react'
import Stats from './Stats'
import useStats from '../hooks/useStats'

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  )
  const [selectedCountry, setSelectedCountry] = useState('IRL')
  const [selectedLongName, setSelectedLongName] = useState('Ireland')

  // useEffect(() => {
  //   if (!firstRender.current) {
  //     console.log(countries)
  //     let longName = Object.keys(countries.countries).find(
  //       country => countries.iso3[country] === 'selctedCountry'
  //     )
  //     console.log(longName)
  //   }
  //   firstRender.current = false
  // }, [selectedCountry])

  if (!countries) {
    return <p>Loading...</p>
  }
  return (
    <div>
      {selectedCountry}
      <h4>Currently Showing {selectedLongName}</h4>
      <select
        value={selectedCountry}
        onChange={e => {
          setSelectedCountry(e.target.value)
          setSelectedLongName(e.currentTarget.selectedOptions[0].text)
        }}
      >
        {Object.entries(countries.countries).map(([country, code]) => {
          return (
            <option key={code} value={countries.iso3[code]}>
              {country}
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
