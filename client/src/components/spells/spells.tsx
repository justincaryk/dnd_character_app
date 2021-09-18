import React, { useState } from 'react'
import './../../scss/Spells.scss'
import Spell from './spell'
import { useGetAllSpellsQuery } from './../../generated/graphql'
import classnames from 'classnames'
interface SpellLevel {
  lvl: string
  active: boolean
}

const spellCasters = [
  'Sorcerer',
  'Wizard',
  'Bard',
  'Ranger',
  'Cleric',
  'Paladin',
  'Fighter',
  'Druid',
  'Warlock',
]
const spellLevels: SpellLevel[] = [
  {
    lvl: '0',
    active: false,
  },
  {
    lvl: '1',
    active: false,
  },
  {
    lvl: '2',
    active: false,
  },
  {
    lvl: '3',
    active: false,
  },
  {
    lvl: '4',
    active: false,
  },
  {
    lvl: '5',
    active: false,
  },
  {
    lvl: '6',
    active: false,
  },
  {
    lvl: '7',
    active: false,
  },
  {
    lvl: '8',
    active: false,
  },
  {
    lvl: '9',
    active: false,
  },
]

const SpellsSelector: React.FC = () => {
  const [selectedCaster, setSelectedCaster] = useState<string | null>(null)
  const [filteredSpells, setFilteredSpells] = useState<any>(null)
  const { data, loading } = useGetAllSpellsQuery()

  const noSpellsFoundMessage =
    filteredSpells?.length == 0 ? (
      <div className='no-spells'>No spells found</div>
    ) : null

  if (!data || loading) {
    return <div>Loading...</div>
  }

  if (data && !filteredSpells) {
    setFilteredSpells(data?.allSpells?.spells || [])
  }

  const handleCasterListSelected = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const caster = event.target.value
    const spells = getCurrentFilteredSpells(caster, spellLevels)
    setFilteredSpells(spells)
    setSelectedCaster(caster)
  }

  const updateSpellLevelStates = (clickedSpellLevel: SpellLevel) => {
    const targetIndex = spellLevels.indexOf(clickedSpellLevel)
    spellLevels[targetIndex].active = !spellLevels[targetIndex].active
    const filteredSpells = getCurrentFilteredSpells(selectedCaster, spellLevels)
    setFilteredSpells(filteredSpells)
  }

  const getCurrentFilteredSpells = (
    caster: string | null,
    spellLevels: SpellLevel[]
  ) => {
    const allSpells = data?.allSpells?.spells
    if (!allSpells) {
      return []
    }

    let filteredSpells: any[] = []

    type HashTable = {
      filteringByLevel: boolean
      [key: string]: boolean
    }
    // process the spell levels
    let activeSpellLevelHash: HashTable = {
      filteringByLevel: false,
    }
    // make a simple hash for quicker reference when we loop hundreds of spells
    for (const lvl of spellLevels) {
      if (lvl.active) {
        activeSpellLevelHash.filteringByLevel = true
        activeSpellLevelHash[lvl.lvl] = true
      }
    }

    // this block will handle checking the spell matches both criteria
    if (activeSpellLevelHash.filteringByLevel && caster) {
      filteredSpells = allSpells.length
        ? allSpells.filter((spell) => {
            const eligCasters =
              spell && spell.dndClass ? spell.dndClass.split(', ') : []
            const levelIsIncluded = spell
              ? activeSpellLevelHash[spell.levelInt]
              : null
            return eligCasters.includes(caster) && levelIsIncluded
          })
        : []
    }

    // we're only filtering by spell level
    else if (activeSpellLevelHash.filteringByLevel) {
      filteredSpells = allSpells.filter((spell) =>
        spell ? activeSpellLevelHash[spell.levelInt] : false
      )
    }

    // we're only filtering by caster
    else if (caster) {
      filteredSpells = allSpells.filter((spell) =>
        spell?.dndClass?.split(', ').includes(caster)
      )
    }

    return filteredSpells.length || caster ? filteredSpells : allSpells
  }

  return (
    <div className='space-y-4'>
      <div className='filter-block space-y-4'>
        <div className='text-off-white font-bold'>Filter By:</div>
        <div>
          <select className='w-full border rounded-b text-xl p-2' onChange={handleCasterListSelected}>
            <option value=''>Select a Caster List</option>
            {spellCasters.map((caster) => {
              return (
                <option key={'s-c-' + caster} value={caster}>
                  {caster}
                </option>
              )
            })}
          </select>
        </div>
        <div className='flex justify-between w-full px-10'>
          {spellLevels.map((lvl) => {
            return (
              <div
                onClick={() => updateSpellLevelStates(lvl)}
                className={classnames({
                  'bg-indigo-500 text-off-white': lvl.active,
                  'bg-white text-indigo-500': lvl.active === false,
                  'relative whitespace-nowrap h-12 w-12 rounded border-2 border-indigo-500 cursor:pointer':
                    true,
                })}
                key={'s-l-' + lvl.lvl}
              >
                <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold'>
                  - {lvl.lvl} -
                </span>
              </div>
            )
          })}
        </div>
      </div>
      <div className='space-y-4'>
        {filteredSpells
          ? filteredSpells.map((spell: any) => {
              return (
                <div
                  className='rounded bg-white p-2 border-1 border-indigo-500'
                  key={spell.slug}
                >
                  <Spell rawSpell={spell}></Spell>
                </div>
              )
            })
          : null}
        {noSpellsFoundMessage}
      </div>
    </div>
  )
}

export default SpellsSelector
