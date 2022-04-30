import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import classnames from 'classnames'
import { numberToSpeakable } from '../../../../lib/utils'
import {
  GetAllSkillsSelectedQuery,
  SkillLevelSel,
  useFightingStyleByNameQuery,
  useGetAllSkillsSelectedQuery,
  useSubclassNamesByClassIdQuery,
  useUpdateCharacterMutation,
  useCreateSkillSelectedMutation,
  useUpdateSkillSelectedMutation,
  useDeleteAllCharacterSkillsMutation,
  useDeleteSkillSelectedMutation,
} from '../../../../generated/graphql'
import { EntryListType, EntryTableType } from '../../../shared/entries'
import EntryExpertiseType from './shared/entry-expertise-type'
import BlueExclamation from '../../../shared/blue-exclamation'

interface OptionsTypeProps {
  options: {
    choose: {
      count: number
      from: any
    }
  }
  setAllOptionsSelected: Dispatch<SetStateAction<boolean>>
}

const SkillOptionType: React.FC<OptionsTypeProps> = ({ options }) => {
  const arrayToIterate = Array(options.choose.count).fill('x', 0)
  return (
    <>
      {arrayToIterate.map((x, i) => {
        return (
          <select
            className='w-full border rounded text-sm p-2'
            defaultValue={''}
            key={i}
          >
            <option value=''>- Choose a Skill -</option>
            <option>
              This will require a graphql request to stored skills known
            </option>
          </select>
        )
      })}
    </>
  )
}
const FightOptionType: React.FC<OptionsTypeProps> = ({
  options,
  setAllOptionsSelected,
}) => {
  const arrayToIterate = Array(options.choose.count).fill('x', 0)
  const [styleName, setStyleName] = useState('')
  const [styleObj, setStyleObj] = useState<any>(null)

  const { data } = useFightingStyleByNameQuery({
    variables: {
      name: styleName,
    },
  })

  useEffect(() => {
    if (data?.allFightingStyles?.nodes.length) {
      const tempObj = Object.assign({}, data.allFightingStyles.nodes[0])
      tempObj.entries = JSON.parse(tempObj.entries)
      setStyleObj(tempObj)
    }
  }, [data?.allFightingStyles?.nodes])

  useEffect(() => {
    if (data?.allFightingStyles?.nodes[0]) {
      setAllOptionsSelected(true)
    }
  }, [setAllOptionsSelected, data])
  return (
    <>
      {arrayToIterate.map((x, i) => {
        return (
          <select
            className='w-full border rounded text-sm p-2'
            defaultValue={''}
            key={i}
            onChange={e => setStyleName(e.currentTarget.value)}
          >
            <option value=''>- Choose a Fighting Style -</option>
            {options.choose.from.map((x: any) => (
              <option value={x}>{x}</option>
            ))}
          </select>
        )
      })}
      {styleObj && (
        <>
          {styleObj.entries.e.map((x: any) => {
            if (typeof x == 'string') {
              return <div>{x}</div>
            }
          })}
        </>
      )}
    </>
  )
}

interface SubclassProps {
  classId: string
  subclassIdent: string
  characterId: string
  subclassId: string
  refetchCharacter: any
}
const SubclassOptionType: React.FC<SubclassProps> = ({
  classId,
  subclassIdent,
  characterId,
  refetchCharacter,
  subclassId,
}) => {
  const { data, loading } = useSubclassNamesByClassIdQuery({
    variables: { classId: classId },
  })
  const [selectedSubclassId, setSelectedSubclassId] = useState('')
  const [performUpdate] = useUpdateCharacterMutation()

  useEffect(() => {
    setSelectedSubclassId(subclassId)
  }, [subclassId])

  if (loading) {
    return null
  }

  const handleSubclassChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    await performUpdate({
      variables: {
        characterId: characterId,
        subclassId: e.currentTarget.value,
      },
    })
    await refetchCharacter()
  }

  return (
    <select
      className='w-full border rounded text-sm p-2'
      defaultValue={selectedSubclassId}
      onChange={handleSubclassChange}
    >
      <option>- Choose a {subclassIdent}</option>
      {data?.query.allSubclasses?.nodes.map(sc => (
        <option key={sc?.id} value={sc?.id}>
          {sc?.name}
        </option>
      ))}
    </select>
  )
}
interface StringTypeProps {
  entry: string
}
const StringType: React.FC<StringTypeProps> = ({ entry }) => <div>{entry}</div>

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
    hasOptions?: boolean
    classId: string
    subclassId?: string
  }
  viewOnly?: boolean
  character: any
  refetchCharacter?: any
  skillsSel: any
}

const FeatureGeneral: React.FC<Props> = ({
  feature,
  viewOnly,
  character,
  refetchCharacter,
  skillsSel,
}) => {
  const [detailsActive, toggleDetailActive] = useState(false)
  const [entries, setEntries] = useState([])
  const [allOptionsSelected, setAllOptionsSelected] = useState(false)

  useEffect(() => {
    const parsed = JSON.parse(feature.entries).e
    setEntries(parsed)
  }, [feature])

  useEffect(() => {
    const subclassTest = entries?.filter((x: any) => x.type === 'subclass')

    if (feature.hasOptions && character.subclassId && subclassTest.length) {
      setAllOptionsSelected(true)
    }
  }, [entries, character.subclassId, feature.hasOptions])

  return (
    <div className='relative'>
      {!viewOnly && feature.hasOptions && !allOptionsSelected ? (
        <BlueExclamation />
      ) : null}
      <div className='space-y-3'>
        <div className='bg-white'>
          <div
            className={classnames({
              'p-2 hover:bg-cream cursor-pointer': true,
              'bg-cream': detailsActive,
              'border-1 border-sky-blue shadow-md-sky-blue':
                feature.hasOptions && !allOptionsSelected && !viewOnly
                  ? true
                  : false,
              border: allOptionsSelected || viewOnly,
            })}
            onClick={() => toggleDetailActive(!detailsActive)}
          >
            <div className='font-roboto'>{feature.name}</div>
            <div className='text-xs text-gray-500'>
              {numberToSpeakable(feature.level)} level
            </div>
          </div>
          {/* feature inner */}
          <div
            className={classnames({
              'p-2 text-sm space-y-2 border-r border-b border-l': true,
              hidden: !detailsActive,
            })}
          >
            {entries.map((entry: any, i: number) => {
              if (typeof entry === 'string') {
                return <StringType key={i} entry={entry} />
              }
              if (entry.type === 'skillOptions' && !viewOnly) {
                return (
                  <SkillOptionType
                    key={i}
                    options={entry.options}
                    setAllOptionsSelected={setAllOptionsSelected}
                  />
                )
              }
              if (entry.type === 'fightStyleOptions' && !viewOnly) {
                return (
                  <FightOptionType
                    key={i}
                    options={entry.options}
                    setAllOptionsSelected={setAllOptionsSelected}
                  />
                )
              }

              if (entry.type === 'subclass' && !viewOnly) {
                return (
                  <SubclassOptionType
                    key={i}
                    classId={feature.classId}
                    subclassIdent={feature.name}
                    characterId={character.characterId}
                    subclassId={character.subclassId}
                    refetchCharacter={refetchCharacter}
                  />
                )
              }

              if (entry.type === 'list') {
                return <EntryListType key={i} entry={entry} />
              }

              if (entry.type === 'table') {
                return <EntryTableType key={i} entry={entry} />
              }

              if (entry.type === 'expertiseSkillOptions' && !viewOnly) {
                return (
                  <EntryExpertiseType
                    entry={entry}
                    characterId={character.characterId}
                    skillsSel={skillsSel}
                    featId={feature.id}
                    classOrSubclass={'class'}
                    setAllOptionsSelected={setAllOptionsSelected}
                  />
                )
              }

              console.log('TODO: ', entry.type)
              console.log(entry)

              return null
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureGeneral
