import React, { useState } from 'react'

interface Props {
  maxHealth: number
}

const HealthBlock: React.FC<Props> = ({ maxHealth }) => {
  const [currentHp, setcurrentHp] = useState(maxHealth)
  const [tempHp, setTempHp] = useState('0')
  const [inputVal, setInputVal] = useState('')
  const [showTempHpInput, toggleShowTempHpInput] = useState(false)

  const incrementHealth = () => {
    if (isNaN(Number(inputVal))) {
      return false
    }
    const newHealth = currentHp + Number(inputVal)
    setcurrentHp(newHealth <= maxHealth ? newHealth : maxHealth)
    setInputVal('')
  }

  const decrementHealth = () => {
    if (isNaN(Number(inputVal))) {
      return false
    }
    const intTempHp = Number(tempHp)
    const intInputVal = Number(inputVal)
    // get total to restore minus temp
    const totalMinusTemp = intInputVal - intTempHp

    // deal with temp hp
    if (tempHp) {
      setTempHp(
        intInputVal - intTempHp < 0 ? (intInputVal - intTempHp).toString() : '0'
      )
    }
    // set true new health
    const newHealth = currentHp - totalMinusTemp
    setcurrentHp(newHealth > -1 ? newHealth : 0)
    setInputVal('')
  }

  return (
    <div className='p-2'>
      <div className='grid grid-cols-4 space-x-4'>
        <div className='space-y-1'>
          <button
            className='w-full p-1 text-xs border-2 border-green-500 rounded text-green-500 font-roboto text-center'
            onClick={incrementHealth}
          >
            HEAL
          </button>
          <input
            className='max-w-full border rounded'
            value={inputVal}
            onChange={e => setInputVal(e.currentTarget.value)}
          />
          <button
            className='w-full p-1 text-xs border-2 border-red-500 rounded text-red-500 font-roboto text-center'
            onClick={decrementHealth}
          >
            DAMAGE
          </button>
        </div>
        <div className='grid grid-cols-2 col-span-2'>
          <div>
            <div className='uppercase text-xs font-roboto bold text-gray-400'>
              Current
            </div>
            <div className='bold font-roboto text-xl'>{currentHp} &nbsp;</div>
          </div>
          <div>
            <div className='uppercase text-xs font-roboto bold text-gray-400'>
              Max
            </div>
            <div className='bold font-roboto text-xl'>/ {maxHealth}</div>
          </div>
          <div className='uppercase text-xs font-roboto bold text-gray-400'>
            Hit Points
          </div>
        </div>
        <div>
          <div className='uppercase text-xs font-roboto bold text-gray-400'>
            Temp
          </div>
          {showTempHpInput ? (
            <input
              className='max-w-full border rounded'
              value={tempHp}
              onChange={e => setTempHp(e.currentTarget.value)}
              onBlur={() => {
                if (isNaN(Number(tempHp))) {
                  setTempHp('0')
                }
                toggleShowTempHpInput(false)
              }}
            />
          ) : (
            <div
              className='uppercase text-xs font-roboto bold text-gray-400'
              onClick={() => toggleShowTempHpInput(true)}
            >
              {Number(tempHp) > 0 ? (
                <span className='bold text-black font-roboto text-xl'>
                  {tempHp}
                </span>
              ) : (
                '--'
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HealthBlock
