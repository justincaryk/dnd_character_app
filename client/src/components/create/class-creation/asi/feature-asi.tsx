import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { numberToSpeakable } from '../../../../lib/utils'
import { useAllFeatsQuery } from '../../../../generated/graphql'

interface Props {
  feature: {
    id: string
    entries: any
    classSource: string
    isClassFeatureVariant: string
    level: number
    name: string
    page: number
    source: string
    scores?: string[]
  }
  viewOnly?: boolean
}
const FeatureAsi: React.FC<Props> = ({ feature, viewOnly }) => {
  const [detailsActive, toggleDetailsActive] = useState(false)
  const [entries, setEntries] = useState<any>(null)
  const [choice, setChoice] = useState('')

  const [featSelection, setFeatSelection] = useState<any>(null)
  const [asiSelection1, setAsiSelection1] = useState('')
  const [asiSelection2, setAsiSelection2] = useState('')

  const { data: feats } = useAllFeatsQuery()

  useEffect(() => {
    const parsed = JSON.parse(feature.entries).e
    setEntries(parsed)
  }, [feature.entries])

  return (
    <div className='space-y-3'>
      <div className='border bg-white'>
        <div
          className={classnames({
            'p-2 hover:bg-cream cursor-pointer': true,
            'bg-cream': detailsActive,
            'border-1 border-sky-blue': true && !viewOnly ? true : false,
          })}
          onClick={() => toggleDetailsActive(!detailsActive)}
        >
          <div className='text-md font-roboto'>{feature.name}</div>
          <div className='text-xs text-gray-500'>
            {numberToSpeakable(feature.level)} level
          </div>
        </div>
        {detailsActive && (
          <div className='p-2 text-sm space-y-2'>
            {entries.map((entry: any) => (
              <div>{entry}</div>
            ))}
            {!viewOnly && (
              <div className='space-y-3'>
                <select
                  className='w-full border rounded text-sm p-2'
                  defaultValue={''}
                  onChange={(e) => setChoice(e.currentTarget.value)}
                >
                  <option value=''>- Choose an Option -</option>
                  <option value='asi'>Ability Score Improvement</option>
                  <option value='feat'>Feat</option>
                </select>
                {choice === 'asi' && (
                  <div className='ml-2 space-y-2'>
                    <select
                      className='w-full border rounded text-sm p-2'
                      defaultValue={''}
                      onChange={(e) => setChoice(e.currentTarget.value)}
                    >
                      <option value=''>- Choose an Option -</option>
                      <option>Charisma Score</option>
                    </select>
                    <select
                      className='w-full border rounded text-sm p-2'
                      defaultValue={''}
                      onChange={(e) => setChoice(e.currentTarget.value)}
                    >
                      <option value=''>- Choose an Option -</option>
                      <option>Charisma Score</option>
                    </select>
                  </div>
                )}
                {choice === 'feat' && (
                  <select
                    className='w-full ml-2 border rounded text-sm p-2'
                    defaultValue={''}
                    onChange={(e) => {
                      const feat = feats?.allFeats?.feats.filter(
                        (f) => e.currentTarget.value === f?.id
                      )
                      if (feat?.length) {
                        setFeatSelection(feat[0])
                      }
                    }}
                  >
                    <option value=''>- Choose an Option -</option>
                    {feats?.allFeats?.feats.map((x) => (
                      <option value={x?.id}>{x?.name}</option>
                    ))}
                  </select>
                )}
                {choice === 'feat' && featSelection && (
                  <div className='ml-2'>
                    <div>{featSelection.desc}</div>

                    {featSelection.prereq ? (
                      <div>Prerequisite: {featSelection.prereq}</div>
                    ) : null}

                    {featSelection.points && featSelection.points.length && (
                      <ul className='list-disc list-inside ml-2'>
                        {featSelection.points.map((p: string, i: number) => {
                          return <li key={i}>{p}</li>
                        })}
                      </ul>
                    )}

                    {featSelection.scores && (
                        <select 
                            className='w-full border rounded text-sm p-2'
                            defaultValue={''}
                        >
                            <option>- Choose an Ability Score-</option>
                            {
                                featSelection.scores.map((score: string) => (
                                    <option key={score} value={score}>{score}</option>
                                ))
                            }
                        </select>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
export default FeatureAsi
