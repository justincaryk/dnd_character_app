import React, { useEffect, useState } from 'react'
import { useCreateSpellSelectedMutation, useDeleteSpellSelectedMutation, useGetAllSpellsSelectedQuery, useGetSpellsByClassNameQuery, useUpdateSpellSelectedMutation } from '../../../../generated/graphql'
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

const ManageSpells: React.FC<Props> = ({
  characterId,
  currentLevel,
  dndClass,
}) => {
  const [learnSpellsVis, toggleLearnSpellsVis] = useState(false)
  const [knownSpellsVis, toggleKnownSpellsVis] = useState(false)

  const [legalSpells, setLegalSpells] = useState<any[]>([])
  const [knownSpells, setKnownSpells] = useState<any[]>([])

  const [maxCantrips, setMaxCantrips] = useState(0)
  const [maxSpells, setMaxSpells] = useState(0)
  const { data: spells, loading: spellsLoading } = useGetSpellsByClassNameQuery({
    variables: {
      className: dndClass.name,
    },
  })

  const [performCreate] = useCreateSpellSelectedMutation()
  const [performUpdate] = useUpdateSpellSelectedMutation()
  const [performDelete] = useDeleteSpellSelectedMutation()


  const { data: known, loading: knownLoading, refetch: refetchKnown } = useGetAllSpellsSelectedQuery({
    variables: {
      characterId: characterId
    }
  })

  useEffect(() => {
    if (dndClass.casterProgression === 'full') {
      setMaxCantrips(dndClass.cantripProgression[currentLevel - 1])
      setMaxSpells(dndClass.spellsKnownProgression[currentLevel - 1])
    }
  }, [dndClass, setMaxSpells, setMaxCantrips, currentLevel])

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
      })
      setLegalSpells(sorted)
    }
  }, [spells, setLegalSpells, currentLevel, dndClass.casterProgression])

  useEffect(() => {
    const found = legalSpells.filter(x => known.allSpellSelecteds.nodes.find(y => x.id === y.spellId))
    setKnownSpells(found)
  },[setKnownSpells, known, legalSpells])

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
        }
      })
    // add to spellbook: false prepared: true
    } else {
      await performCreate({
        variables: {
          characterId: characterId,
          spellId: spellId,
          prepared: true,
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

  if (!spells || spellsLoading || knownLoading) {
    return <div>...Loading</div>
  }

  return (
    <div className='space-y-6'>
      <div>
        <div 
          className='flex justify-between items-center border bg-cream px-2'
          onClick={() => toggleKnownSpellsVis(!knownSpellsVis)}
        >
          <div className='font-bold'>Known/Prepared Spells</div>
          <div className='font-bold text-3xl text-gray-600'>{knownSpellsVis ? '-' : '+'}</div>
        </div>
        {knownSpellsVis ? (
          <div className='space-y-2 mt-2'>
            {knownSpells.map((spell) => {
              return (
                <div key={spell.id}>
                  <SpellBlock
                    // @ts-ignore
                    rawSpell={spell}
                    isKnown={known.allSpellSelecteds.nodes.find(x => x.spellId === spell.id) ? true : false}
                    onLearnClick={handleLearnClick}
                    onRemoveClick={handleRemoveClick}
                    viewOnly
                  />
                </div>
              )
            })}
          </div>
        ): null}
      </div>
      {dndClass.name === 'Wizard' ? (
        <div>
          <div className='flex justify-between items-center border bg-cream px-2'>
            <div className='font-bold'>Spellbook</div>
            <div className='font-bold text-3xl text-gray-600'>+</div>
          </div>
        </div>
      ) : null}
      <div className='space-y-4'>
        <div
          className='flex justify-between items-center border bg-cream px-2'
          onClick={() => toggleLearnSpellsVis(!learnSpellsVis)}
        >
          <div className='font-bold'>Add Spells</div>
          <div className='font-bold text-3xl text-gray-600 cursor-pointer'>
            {learnSpellsVis ? '-' : '+'}
          </div>
        </div>
        {learnSpellsVis ? (
          <div className='space-y-2 mt-2'>
            <div>
              <div className='text-sm'>Cantrips: {maxCantrips}</div>
              <div className='text-sm'>Known Spells: {maxSpells}</div>
            </div>
            {legalSpells.map((spell) => {
              return (
                <div key={spell.id}>
                  <SpellBlock
                    // @ts-ignore
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
