import React from 'react'
import { useMutation } from '@apollo/client'

export function useMutation ({ mutation }) {
  const [mutateFunction, { data, loading, error }] = useMutation(mutation)
  return [mutateFunction, { data, loading, error }]
}
