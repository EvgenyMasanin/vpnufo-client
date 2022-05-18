import { useCallback, useEffect, useMemo, useState } from 'react'

export const useQuery = <T>(url: string) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState<T>(null)

  const startFetch = useCallback(async () => {
    setLoading(true)
    try {
      const data: T = await (await fetch(url)).json()
      setData(data)
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }, [url])

  useEffect(() => {
    startFetch()
  }, [url, startFetch])

  return useMemo(
    () => ({
      loading,
      error,
      data,
      refetch: startFetch,
    }),
    [loading, error, data, startFetch]
  )
}
