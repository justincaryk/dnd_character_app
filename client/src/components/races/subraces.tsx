import React from 'react'
import { SubraceType } from '../../lib/types'
interface Props {
  subraces: SubraceType[]
}

const Subraces: React.FC<Props> = ({ subraces = [] }) => (
  <>
    {subraces.length ? (
      <div>
        <label>Choose a Subrace</label>
        <select className='w-full border rounded-b text-xl p-2' defaultValue='Make a selection'>
          {subraces.map((x) => (
            <option value={x.id} key={x.id}>
              {x.name}
            </option>
          ))}
        </select>
      </div>
    ) : null}
  </>
)

export default Subraces
