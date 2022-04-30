import React from 'react'
import { ClassClassType } from '../../../../lib/types'
import { getLongFormAbilityScore } from '../../../../lib/utils'

interface Props {
  gen: ClassClassType
}
const ClassSummary: React.FC<Props> = ({ gen }) => {
  const gen2: ClassClassType = Object.assign({}, gen)

  //@ts-ignore
  gen2.multiclassing = JSON.parse(gen2.multiclassing)
  //@ts-ignore
  gen2.startingEquipment = JSON.parse(gen2.startingEquipment)
  //@ts-ignore
  gen2.startingProficiencies = JSON.parse(gen2.startingProficiencies)

  const mcProf = gen2.multiclassing?.proficienciesGained
  const mcReq = gen2.multiclassing.requirements
  const mcReqs: string[] = []

  if (mcReq.or) {
    Object.keys(mcReq.or).forEach(r => {
      let str = getLongFormAbilityScore(r)
      str += ' ' + mcReq.or[r]
      mcReqs.push(str)
    })
  }

  return (
    <div className='border rounded bg-white text-sm shadow-sm space-y-3 max-w-sm mr-4 p-3'>
      <div>
        <div className='text-base mb-1'>Hit Points</div>
        <div>
          <span className='font-semibold mr-1 inline'>Hit Dice:</span>
          <span>
            {gen2.hdNumber}d{gen2.hdFaces}
          </span>
        </div>
        <div>
          <span className='font-semibold mr-1 inline'>
            Hit Points at 1st Level:
          </span>
          <span>{gen2.hdFaces} + your Constitution modifier</span>
        </div>
        <div>
          <span className='font-semibold mr-1 inline'>
            Hit Points at Higher Levels:
          </span>
          <span>
            {gen2.hdNumber}d{gen2.hdFaces} (or{' '}
            {Math.floor(gen2.hdFaces / 2) + 1}) + your Constitution modifier per{' '}
            {gen2.name} level after 1st
          </span>
        </div>
      </div>
      <div>
        <div className='text-base mb-1'>Proficiencies</div>
        <div>
          <span className='font-semibold mr-1 inline'>Armor:</span>
          <span>
            {gen2.startingProficiencies.armor.length
              ? gen2.startingProficiencies.armor.join(', ')
              : 'none'}
          </span>
        </div>
        <div>
          <span className='font-semibold mr-1 inline'>Weapons:</span>
          <span>
            {gen2.startingProficiencies.weapons.length
              ? gen2.startingProficiencies.weapons.join(', ')
              : 'none'}
          </span>
        </div>
        <div>
          <span className='font-semibold mr-1 inline'>Tools:</span>
          <span>
            {gen2.startingProficiencies.tools.length
              ? gen2.startingProficiencies.tools.join(', ')
              : 'none'}
          </span>
        </div>
        <div>
          <span className='font-semibold mr-1 inline'>Saving Throws:</span>
          <span>
            {gen2.proficiency
              .map((prof: any) => getLongFormAbilityScore(prof))
              .join(', ')}
          </span>
        </div>
        <div>
          <span className='font-semibold mr-1 inline'>Skills:</span>
          <span>
            Choose {gen2.startingProficiencies.skills.choose.count} from{' '}
            <span className='capitalize'>
              {gen2.startingProficiencies.skills.choose.from.join(', ')}
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
          {gen2.startingEquipment.default.map((eq: string, i: number) => (
            <li key={i}>{eq}</li>
          ))}
        </ul>
        <div>
          Alternatively, you may start with{' '}
          {gen2.startingEquipment?.goldAlternative?.split('Starting Gold')[0]}{' '}
          gp to buy your own equipment.
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
        {mcProf.armor.length > 0 && (
          <div>
            <span className='font-semibold mr-1 inline'>Armor:</span>
            <span>{mcProf.armor.join(', ')}</span>
          </div>
        )}
        {mcProf.weapons.length > 0 && (
          <div>
            <span className='font-semibold mr-1 inline'>Weapons:</span>
            <span>
              {mcProf.weapons.join(' weapons, ')}{' '}
              {mcProf.weapons.length && ' weapons'}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ClassSummary
