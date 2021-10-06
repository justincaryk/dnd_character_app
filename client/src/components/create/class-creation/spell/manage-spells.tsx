import React, { useEffect, useState } from 'react'
import { Spell, SpellSelected, SpellSelFromType, useAllAsisQuery, useCreateSpellSelectedMutation, useDeleteSpellSelectedMutation, useGetAllAsiChoicesQuery, useGetAllAsiSelectionsQuery, useGetAllSpellsSelectedQuery, useGetSpellsByClassNameQuery, useUpdateSpellSelectedMutation } from '../../../../generated/graphql'
import { bonuses } from '../../../../lib/utils'
import SpellBlock from './spell'

interface Props {
  characterId: string
  dndClass: any
  currentLevel: number
}

type CharProgressionType = 'full' | '1/2' | '1/3' | '2/3' | 'pact'
type CharLevelType =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20

const getMaxSpellLevelKnown = (
  charLevel: CharLevelType,
  progression: CharProgressionType
) => {
  const rulesHash = {
    full: {
      1: 1,
      2: 1,
      3: 2,
      4: 2,
      5: 3,
      6: 3,
      7: 4,
      8: 4,
      9: 5,
      10: 5,
      11: 6,
      12: 6,
      13: 7,
      14: 7,
      15: 8,
      16: 8,
      17: 9,
      18: 9,
      19: 9,
      20: 9,
    },
    '1/2': {
      1: 0,
      2: 1,
      3: 1,
      4: 1,
      5: 2,
      6: 2,
      7: 2,
      8: 2,
      9: 3,
      10: 3,
      11: 3,
      12: 3,
      13: 4,
      14: 4,
      15: 4,
      16: 4,
      17: 5,
      18: 5,
      19: 5,
      20: 5,
    },
    '1/3': {
      1: 0,
      2: 0,
      3: 1,
      4: 1,
      5: 1,
      6: 1,
      7: 2,
      8: 2,
      9: 2,
      10: 2,
      11: 2,
      12: 2,
      13: 3,
      14: 3,
      15: 3,
      16: 3,
      17: 3,
      18: 3,
      19: 4,
      20: 4,
    },
    pact: {
      1: 1,
      2: 1,
      3: 2,
      4: 2,
      5: 3,
      6: 3,
      7: 4,
      8: 4,
      9: 5,
      10: 5,
      11: 5,
      12: 5,
      13: 5,
      14: 5,
      15: 5,
      16: 5,
      17: 5,
      18: 5,
      19: 5,
      20: 5,
    },
    '2/3': {
      1: 0,
      2: 0,
      3: 1,
      4: 1,
      5: 2,
      6: 2,
      7: 3,
      8: 3,
      9: 4,
      10: 4,
      11: 5,
      12: 5,
      13: 5,
      14: 5,
      15: 6,
      16: 6,
      17: 6,
      18: 6,
      19: 6,
      20: 6,
    },
  }

  return rulesHash[progression][charLevel]
}

type ActiveBlockType = 'learn'|'prep'|'book'

const ManageSpells: React.FC<Props> = ({
  characterId,
  currentLevel,
  dndClass,
}) => {
  // const [learnSpellsVis, toggleLearnSpellsVis] = useState(false)
  // const [preparedSpellsVis, togglePreparedSpellsVis] = useState(false)
  // const [spellBookVis, toggleSpellBookVis] = useState(false)
  const [ activeBlock, setActiveBlock ] = useState<ActiveBlockType|null>(null)

  const [asiBonus, setAsiBonus] = useState(0)

  const [legalSpells, setLegalSpells] = useState<Spell[]>([])
  const [knownSpells, setKnownSpells] = useState<Spell[]>([])
  const [preparedSpells, setPreparedSpells] = useState<Spell[]>([])

  const [maxCantrips, setMaxCantrips] = useState(0)
  const [maxSpells, setMaxSpells] = useState(0)
  const { data: spells, loading: spellsLoading } = useGetSpellsByClassNameQuery({
    variables: {
      className: dndClass.name,
    },
  })
  
  // asis
  const { data: asiChoices, loading: asiChoicesLoading } = useGetAllAsiChoicesQuery({
    variables: {
      characterId: characterId,
    },
  })
  const { data: asis, loading: asisLoading} = useAllAsisQuery()

  const [performCreate] = useCreateSpellSelectedMutation()
  const [performUpdate] = useUpdateSpellSelectedMutation()
  const [performDelete] = useDeleteSpellSelectedMutation()

  const { data: known, loading: knownLoading, refetch: refetchKnown } = useGetAllSpellsSelectedQuery({
    variables: {
      characterId: characterId
    }
  })

  useEffect(() => {
    if (asis && asiChoices) {
      let score = 0;
      let asi = asis.allAsis.nodes.find(x => x.short === dndClass.spellcastingAbility)

      for (const node of asiChoices.allAsiSelectedCores.nodes) {
        const key = asi.long.toLowerCase() as 'intelligence' | 'wisdom' | 'charisma'
        score += node[key]
      }

      for (const node of asiChoices.allAsiSelecteds.nodes) {
        if (node.asiByAsiId.asiId === asi.asiId) {
          score += node.count
        }
      }
      setAsiBonus(bonuses[score])
    }
  }, [asiChoices, dndClass, setAsiBonus, asis])

  useEffect(() => {
    // static progression
    if (dndClass.spellsKnownProgression) {
      setMaxSpells(dndClass.spellsKnownProgression[currentLevel - 1])
    } else if (dndClass.preparedSpells) {
      let divisor = 1;
      if (dndClass.casterProgression === '1/2') {
        divisor = 2
      }
      if (dndClass.casterProgression === '1/3') {
        divisor = 3
      }

      setMaxSpells(Math.floor(currentLevel/ divisor) + asiBonus)
    }
    // prepared casters
    if (dndClass.cantripProgression) {
      setMaxCantrips(dndClass.cantripProgression[currentLevel - 1])
    }

    
  }, [dndClass, setMaxSpells, setMaxCantrips, currentLevel, asiBonus])

  useEffect(() => {
    if (spells) {
      const maxLegalSpellLevel = getMaxSpellLevelKnown(
        currentLevel as CharLevelType,
        dndClass.casterProgression
      )
      const filtered = spells.getSpellsByClassName.nodes.filter(
        (x) => x.levelInt <= maxLegalSpellLevel
      )
      const sorted = filtered.sort((a, b) => {
        if (a.levelInt > b.levelInt) {
          return 1
        } else if (a.levelInt < b.levelInt) {
          return -1
        }

        // Else go to the 2nd item
        if (a.name < b.name) {
          return -1
        } else if (a.name > b.name) {
          return 1
        } else {
          // nothing to split them
          return 0
        }
      }) as Spell[]

      setLegalSpells(sorted)
    }
  }, [spells, setLegalSpells, currentLevel, dndClass.casterProgression])

  useEffect(() => {
    const found = legalSpells.filter(x => known.allSpellSelecteds.nodes.find(y => x.id === y.spellId))
    setKnownSpells(found)
  },[setKnownSpells, known, legalSpells])

  useEffect(() => {
    const prepared = knownSpells.filter(x => known.allSpellSelecteds.nodes.find(y => y.spellId == x.id && y.prepared === true))
    setPreparedSpells(prepared)
  }, [setPreparedSpells, knownSpells, known])

  const handlePrepareClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    spellId: string
  ) => {
    e.stopPropagation()

    await performUpdate({
      variables: {
        spellSelId: known.allSpellSelecteds.nodes.find(x => x.spellId === spellId).spellSelId,
        prepared: !known.allSpellSelecteds.nodes.find(x => x.spellId === spellId).prepared
      }
    })

    await refetchKnown()
  }

  const handleLearnClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    spellId: string
  ) => {
    // don't let the btn click expand/contract the details section
    e.stopPropagation()
    
    // add to spellbook: true, prepared: false
    if (dndClass.name === 'Wizard') {
      await performCreate({
        variables: {
          characterId: characterId,
          spellId: spellId,
          spellBook: true,
          prepared: false,
          spellFrom: SpellSelFromType.Class,
        }
      })
    // add to spellbook: false prepared: true
    } else {
      await performCreate({
        variables: {
          characterId: characterId,
          spellId: spellId,
          prepared: true,
          spellFrom: SpellSelFromType.Class,
        }
      })
    }
    await refetchKnown()
  }

  const handleRemoveClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    spellId: string
  ) => {
    // don't let the btn click expand/contract the details section
    e.stopPropagation()
    
    await performDelete({
      variables: {
        spellSelId: known.allSpellSelecteds.nodes.find(x => x.spellId === spellId).spellSelId
      }
    })

    await refetchKnown()
  }

  const handleBlockClick = (active: ActiveBlockType) => {
    const newBlock = activeBlock === active ? null : active
    setActiveBlock(newBlock)
  }
  if (!spells || spellsLoading || knownLoading) {
    return <div>...Loading</div>
  }

  return (
    <div className='space-y-6'>
      <div>
        <div 
          className='flex justify-between items-center border bg-cream px-2'
          onClick={() => {
            handleBlockClick('prep')
          }}
        >
          <div className='font-bold'>Known/Prepared Spells</div>
          <div className='font-bold text-3xl text-gray-600 cursor-pointer'>{activeBlock === 'prep' ? '-' : '+'}</div>
        </div>
        {activeBlock === 'prep' ? (
              <div className='space-y-2 mt-2'>
                {preparedSpells.map((spell) => {
                  return (
                    <div key={spell.id}>
                      <SpellBlock
                        rawSpell={spell}
                        isKnown={known.allSpellSelecteds.nodes.find(x => x.spellId === spell.id) ? true : false}
                        onLearnClick={handleLearnClick}
                        onRemoveClick={handleRemoveClick}
                        viewOnly
                      />
                    </div>
                  )
                })}
                {
                  !preparedSpells.length ? (
                    <div className='text-center text-sm'>You currently have no prepared spells.</div>
                  ) : null
                }
              </div>
        ): null}
      </div>
      {dndClass.name === 'Wizard' ? (
        <div>
          <div 
            className='flex justify-between items-center border bg-cream px-2'
            onClick={() => handleBlockClick('book')}
          >
            <div className='font-bold'>Spellbook</div>
            <div className='font-bold text-3xl text-gray-600 cursor-pointer'>{activeBlock === 'book' ? '-' : '+'}</div>
          </div>
          {activeBlock === 'book' ? (
          <div className='space-y-2 mt-2'>
            {knownSpells.map((spell) => {
              return (
                <div key={spell.id}>
                  <SpellBlock
                    rawSpell={spell}
                    isPrepared={known.allSpellSelecteds.nodes.find(x => x.spellId === spell.id).prepared}
                    onPrepareClick={handlePrepareClick}
                  />
                </div>
              )
            })}
            {
              !knownSpells.length ? (
                <div className='text-center text-sm'>You currently have no known spells. Learn spells from your list of available spells below.</div>
              ) : null
            }
          </div>
        ): null}
        </div>
      ) : null}
      <div className='space-y-4'>
        <div
          className='flex justify-between items-center border bg-cream px-2'
          onClick={() => handleBlockClick('learn')}
        >
          <div className='font-bold'>Add Spells</div>
          <div className='font-bold text-3xl text-gray-600 cursor-pointer'>
            {activeBlock === 'learn' ? '-' : '+'}
          </div>
        </div>
        {activeBlock === 'learn' ? (
          <div className='space-y-2 mt-2'>
            <div>
              <div className='text-sm'>Cantrips: {maxCantrips}</div>
              <div className='text-sm'>Known Spells: {maxSpells}</div>
            </div>
            <div className='flex gap-x-1 hidden'>
              <button className='w-10 h-9 text-center border-1 border-green-700 bg-white rounded text-green-700 hover:shadow-inner text-xs'>-0-</button>
              <button className='w-10 h-9 text-center border-1 border-green-700 bg-white rounded text-green-700 hover:shadow-inner text-xs'>1st</button>
              <button className='w-10 h-9 text-center border-1 border-green-700 bg-white rounded text-green-700 hover:shadow-inner text-xs'>2nd</button>
              <button className='w-10 h-9 text-center border-1 border-green-700 bg-white rounded text-green-700 hover:shadow-inner text-xs'>3rd</button>
              <button className='w-10 h-9 text-center border-1 border-green-700 bg-white rounded text-green-700 hover:shadow-inner text-xs'>4th</button>
              <button className='w-10 h-9 text-center border-1 border-green-700 bg-white rounded text-green-700 hover:shadow-inner text-xs'>5th</button>
              <button className='w-10 h-9 text-center border-1 border-green-700 bg-white rounded text-green-700 hover:shadow-inner text-xs'>8th</button>
              <button className='w-10 h-9 text-center border-1 border-green-700 bg-white rounded text-green-700 hover:shadow-inner text-xs'>9th</button>
            </div>
            {legalSpells.map((spell) => {
              return (
                <div key={spell.id}>
                  <SpellBlock
                    rawSpell={spell}
                    isKnown={known.allSpellSelecteds.nodes.find(x => x.spellId === spell.id) ? true : false}
                    onLearnClick={handleLearnClick}
                    onRemoveClick={handleRemoveClick}
                  />
                </div>
              )
            })}
          </div>
        ) : null}
      </div>
    </div>
  )
}
export default ManageSpells
