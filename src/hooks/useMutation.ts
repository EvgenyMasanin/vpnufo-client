import { useCallback, useMemo, useState } from 'react'

interface Options<T> {
  method: 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  body?: T
  param?: string
}

export const useMutation = <T>(url: string) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<{ message: string }>(null)
  const [data, setData] = useState<T>(null)

  const startFetch = useCallback(
    async ({ method, body, param }: Options<T>) => {
      setLoading(true)

      const newUrl = `${url}/${param ?? ''}`

      try {
        const res = await fetch(newUrl, {
          method,
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (res.status === 400) {
          const error = await res.json()
          setError(error)
          setLoading(false)
          return
        }

        const data: T = await res.json()

        setData(data)
        setLoading(false)
      } catch (error) {
        setError(error as { message: string })
      }
    },
    [url]
  )

  const clearError = useCallback(() => setError(null), [])

  return useMemo(
    () =>
      [
        startFetch,
        {
          loading,
          error,
          data,
          clearError,
        },
      ] as const,
    [loading, error, data, startFetch, clearError]
  )
}
