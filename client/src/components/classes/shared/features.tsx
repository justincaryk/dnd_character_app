import React from 'react'

interface IFeatureProps {
  features: any[]
}
const Features: React.FC<IFeatureProps> = ({ features }) => {
  return (
    <div className='space-y-2'>
      {features.map((x) => (
        <div className='border p-2 text-sm'>
          <div className='font-semibold'>{x.name}</div>
          <div>
            {x.entries.map((x: any) => {
              if (typeof x === 'string') {
                return <div>{x}</div>
              } else if (x.type === 'list') {
                return (
                  <ul className='list-disc list-inside mt-2 mb-2'>
                    {x.items.map((x: string) => (
                      <li>{x}</li>
                    ))}
                  </ul>
                )
              }
              return null
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Features
