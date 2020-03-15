import React from 'react'
import Stats from '../components/Stats'
import CountrySelector from '../components/CountrySelector'

const index = () => {
  return (
    <div>
      <Stats url="https://covid19.mathdro.id/api" />
      <CountrySelector />
      {/* <Stats url="https://covid19.mathdro.id/api/countries/IE" /> */}
    </div>
  )
}

export default index
