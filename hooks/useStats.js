import { useState, useEffect } from 'react'

function useStats(url) {
  const [stats, setStats] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    async function fetchData() {
      console.log('Fetching Data')
      setLoading(true)
      const data = await fetch(url)
        .then(res => res.json())
        .catch(err => {
          setError(err)
        })
      setStats(data)
      setLoading(false)
    }
    fetchData()
  }, [url])
  return [stats, loading, error]
}
export default useStats
