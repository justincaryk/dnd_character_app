import React from 'react'
import { useAllClassNamesQuery } from '../../generated/graphql'

const ClassCreation: React.FC = () => {
  const { data, loading } = useAllClassNamesQuery()

  if (loading) {
      return <div>...Loading</div>
  }
  console.log(data)

  return <div>Create a class here</div>
}

export default ClassCreation
