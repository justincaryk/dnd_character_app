import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { start } from 'repl'

interface Props {
  startingProficiencies: {
    tools: any
    weapons: any
    armor: any
    skills: any
  }
  savingThrows: any
}

const FeatureStartProf: React.FC<Props> = ({
  startingProficiencies,
  savingThrows,
}) => {
  const [profDetailsActive, toggleProfDetailsActive] = useState(false)
  
  if (!startingProficiencies) {
    return null
  }

  const arrayToIterate: string[] = Array(
    startingProficiencies.skills.choose.count
  ).fill('x', 0)

  return (
    <div className='space-y-3'>
      <div className='border bg-white'>
        <div
          className={classnames({
            'p-2 hover:bg-cream cursor-pointer': true,
            'bg-cream border-b': profDetailsActive,
          })}
          onClick={() => toggleProfDetailsActive(!profDetailsActive)}
        >
          <div className='text-lg font-roboto'>Proficiencies</div>
          <div className='text-xs text-gray-500'>1st level</div>
        </div>
        {profDetailsActive && (
          <div className='p-2 text-sm'>
            <div className='capitalize'>
              <strong>Armor:</strong>{' '}
              {startingProficiencies.armor?.join(', ') || 'None'}
            </div>
            <div className='capitalize'>
              <strong>Weapons:</strong>{' '}
              {startingProficiencies.weapons?.join(', ') || 'None'}
            </div>
            <div className='capitalize'>
              <strong>Tools:</strong>{' '}
              {startingProficiencies.tools?.join(', ') || 'None'}
            </div>
            <div className='capitalize'>
              <strong>Saving Throws:</strong>{' '}
              {savingThrows?.join(', ') || 'None'}
            </div>
            <div>
              <div>
                <strong>Skills:</strong> Choose{' '}
                {startingProficiencies.skills.choose.count} from{' '}
                {startingProficiencies.skills.choose.from.join(', ')}
              </div>
              <div className='mt-1 space-y-2'>
                {arrayToIterate.map((x, i) => (
                  <select
                    className='w-full border rounded text-sm p-2'
                    defaultValue={''}
                    key={i}
                  >
                    <option value=''>- Choose a Skill -</option>
                    {startingProficiencies.skills.choose.from.map(
                      (skill: string) => {
                        return (
                          <option key={i} value='skill'>
                            {skill}
                          </option>
                        )
                      }
                    )}
                  </select>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FeatureStartProf
