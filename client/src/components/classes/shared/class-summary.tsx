import React from 'react'
import { ClassClassType } from './../../../lib/types'
import { getLongFormAbilityScore } from './../../../lib/utils'

const ClassSummary: React.FC<ClassClassType> = ({ gen }) => {
  
  const mcReq = gen.multiclassing.requirements
  const mcReqs: string[] = []
  if (mcReq.or) {
    Object.keys(mcReq.or).forEach((r) => {
      let str = getLongFormAbilityScore(r)
      str += ' ' + mcReq.or[r]
      mcReqs.push(str)
    })
  }

  const mcProf = gen.multiclassing.proficienciesGained
  const startProf = gen.startingProficiencies
  return (
    <div className='border text-sm shadow-sm space-y-3 max-w-sm mr-4 p-3'>
      <div>
        <div className='text-base mb-1'>Hit Points</div>
        <div>
          <span className='font-semibold mr-1 inline'>Hit Dice:</span>
          <span>
            {gen.hd.number}d{gen.hd.faces}
          </span>
        </div>
        <div>
          <span className='font-semibold mr-1 inline'>
            Hit Points at 1st Level:
          </span>
          <span>{gen.hd.faces} + your Constitution modifier</span>
        </div>
        <div>
          <span className='font-semibold mr-1 inline'>
            Hit Points at Higher Levels:
          </span>
          <span>
            {gen.hd.number}d{gen.hd.faces} (or{' '}
            {Math.floor(gen.hd.faces / 2) + 1}) + your Constitution modifier per{' '}
            {gen.name} level after 1st
          </span>
        </div>
      </div>
      <div>
        <div className='text-base mb-1'>Proficiencies</div>
        <div>
          <span className='font-semibold mr-1 inline'>Armor:</span>
          <span>
            {startProf.armor.length ? startProf.armor.join(', ') : 'none'}
          </span>
        </div>
        <div>
          <span className='font-semibold mr-1 inline'>Weapons:</span>
          <span>
            {startProf.weapons.length ? startProf.weapons.join(', ') : 'none'}
          </span>
        </div>
        <div>
          <span className='font-semibold mr-1 inline'>Tools:</span>
          <span>
            {startProf.tools.length ? startProf.tools.join(', ') : 'none'}
          </span>
        </div>
        <div>
          <span className='font-semibold mr-1 inline'>Saving Throws:</span>
          <span>
            {gen.proficiency
              .map((prof) => getLongFormAbilityScore(prof))
              .join(', ')}
          </span>
        </div>
        <div>
          <span className='font-semibold mr-1 inline'>Skills:</span>
          <span>
            Choose {startProf.skills.choose.count} from{' '}
            <span className='capitalize'>
              {startProf.skills.choose.from.join(', ')}
            </span>
          </span>
        </div>
      </div>
      <div>
        <div className='text-base mb-1'>Starting Equipment</div>
        <div>
          You start with the following items, plus anything provided by your
          background.
        </div>
        <ul className='list-disc list-inside mt-2 mb-2'>
          {gen.startingEquipment.default.map((eq, i) => (
            <li key={i}>{eq}</li>
          ))}
        </ul>
        <div>
          Alternatively, you may start with{' '}
          {gen.startingEquipment.goldAlternative.split('Starting Gold')[0]} gp
          to buy your own equipment.
        </div>
      </div>
      <div>
        <div className='text-base mb-1'>Multiclassing</div>
        <div>
          <span className='font-semibold mr-1 inline'>
            Ability Score Minimum:
          </span>
          {mcReq.or ? (
            <span>{mcReqs.join(' or ')}</span>
          ) : (
            <span>
              {getLongFormAbilityScore(Object.keys(mcReq)[0])}{' '}
              {mcReq[Object.keys(mcReq)[0]]}
            </span>
          )}
        </div>
        {mcProf.armor.length > 0 && <div>
          <span className='font-semibold mr-1 inline'>Armor:</span>
          <span>{mcProf.armor.join(', ')}</span>
        </div>}
        {mcProf.weapons.length > 0 && <div>
          <span className='font-semibold mr-1 inline'>Weapons:</span>
          <span>
            {mcProf.weapons.join(' weapons, ')}{' '}
            {mcProf.weapons.length && ' weapons'}
          </span>
        </div>}
      </div>
    </div>
  )
}

export default ClassSummary
