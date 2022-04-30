import React, { useState } from 'react'
import classnames from 'classnames'

type IsActiveType = 'actions' | 'features' | 'inv' | 'notes'

const ActionFeatureBlock: React.FC = () => {
  const [isActive, setIsActive] = useState<IsActiveType>('actions')

  const checkIsActive = (caller: IsActiveType) => caller === isActive

  const baseHeaderClasses =
    'font-roboto text-xs text-gray-400 uppercase hover:text-black hover:bold cursor-pointer'
  const activeClasses = 'border-b-4'
  return (
    <div className='p-4 bg-white'>
      <div className='flex justify-between w-full'>
        <div
          className={classnames({
            [baseHeaderClasses]: true,
            [activeClasses]: checkIsActive('actions'),
          })}
          onClick={() => setIsActive('actions')}
        >
          Actions
        </div>
        <div
          className={classnames({
            [baseHeaderClasses]: true,
            [activeClasses]: checkIsActive('features'),
          })}
          onClick={() => setIsActive('features')}
        >
          Features & Traits
        </div>
        <div
          className={classnames({
            [baseHeaderClasses]: true,
            [activeClasses]: checkIsActive('inv'),
          })}
          onClick={() => setIsActive('inv')}
        >
          Inventory
        </div>
        <div
          className={classnames({
            [baseHeaderClasses]: true,
            [activeClasses]: checkIsActive('notes'),
          })}
          onClick={() => setIsActive('notes')}
        >
          Notes
        </div>
      </div>
      {/* action block */}
      {isActive === 'actions' && (
        <div className='mt-4 space-y-2'>
          <div className='text-xs font-roboto text-gray-400'>
            Attacks per Action: 2
          </div>
          <div className='grid grid-cols-4'>
            <div className='font-roboto text-xs uppercase'>Attack</div>
            <div className='font-roboto text-xs uppercase'>Range</div>
            <div className='font-roboto text-xs uppercase'>Hit</div>
            <div className='font-roboto text-xs uppercase'>Damage</div>
          </div>
          <div className='grid grid-cols-4'>
            <div className='text-xs font-bold flex items-center'>
              Greatsword +1
            </div>
            <div className='text-xs font-bold flex items-center'>5 ft</div>
            <div>
              <span className='font-roboto text-lg border rounded px-4 py-1 inline-block'>
                +9
              </span>
            </div>
            <div className='font-roboto text-lg border rounded p-1 text-center'>
              2d6 + 6
            </div>
          </div>
          <div className='grid grid-cols-4'>
            <div className='text-xs font-bold flex items-center'>GS (GWM)</div>
            <div className='text-xs font-bold flex items-center'>5 ft</div>
            <div>
              <span className='font-roboto text-lg border rounded px-4 py-1 inline-block'>
                +4
              </span>
            </div>
            <div className='font-roboto text-lg border rounded p-1 text-center'>
              2d6 + 16
            </div>
          </div>
          <div className='grid grid-cols-4'>
            <div className='text-xs font-bold flex items-center'>
              Crossbow, Heavy
            </div>
            <div className='text-xs font-bold flex items-center'>100/400</div>
            <div>
              <span className='font-roboto text-lg border rounded px-4 py-1 inline-block'>
                +5
              </span>
            </div>
            <div className='font-roboto text-lg border rounded p-1 text-center'>
              1d10 + 2
            </div>
          </div>
          <div className='grid grid-cols-4'>
            <div className='text-xs font-bold flex items-center'>Spell</div>
            <div className='text-xs font-bold flex items-center'>See spell</div>
            <div>
              <span className='font-roboto text-lg border rounded px-4 py-1 inline-block'>
                +8
              </span>
            </div>
            <div className='font-roboto text-lg border rounded p-1 text-center'>
              See spell
            </div>
          </div>
          <div className='grid grid-cols-4'>
            <div className='text-xs font-bold flex items-center'>Spell DC</div>
            <div className='text-xs font-bold flex items-center'>n/a</div>
            <div>
              <span className='font-roboto text-lg border rounded px-4 py-1 inline-block'>
                DC 16
              </span>
            </div>
            <div className='font-roboto text-lg border rounded p-1 text-center'>
              n/a
            </div>
          </div>
        </div>
      )}

      {/* features block */}
      {isActive === 'features' && (
        <div className='mt-4 space-y-2 text-xs'>
          {/* class features */}
          <div className='space-y-1'>
            <div className='font-roboto text-lg'>Illrigger</div>
            <div className='font-bold'>Forked Tongue</div>
            <div>
              You have a facility with speech and know how to manipulate an
              audience. Whenever you make an ability check to persuade, deceive,
              or intimidate, you can treat a d20 roll of 7 or lower as an 8.
              Additionally you learn the Infernal language.
            </div>
            <div className='font-bold'>Infernal Conduit</div>
            <div className='space-y-1'>
              <div>
                There is a pool of infernal power within you that replenishes
                after you take a <strong>long rest</strong>. This pool is
                represented by dice, starting with 1d10 at 1st level.
              </div>
              <div>
                As an action, choose a number of dice from your remaining pool
                and touch another creature. If they are unwilling, this is a
                melee spell attack with which you are proficient, using Charisma
                as your spell- casting ability. If you miss, nothing happens—you
                do not roll or lose dice from your pool. If you hit, or if
                you’re targeting a willing creature, roll the chosen dice.
              </div>
              <div>
                The result of your roll is the number of hit points you
                transfer. If you’re touching an ally, they gain that many hit
                points, ignoring any hit points in excess of their maximum. You
                lose hit points equal to the number of hit points they gained.
                If your sacrifice reduces you to 0 hit points, you fall
                unconscious.
              </div>
              <div>
                If you’re touching an enemy, they take necrotic damage equal to
                your roll, and you gain that many hit points. If you would gain
                hit points in excess of your maximum, you gain that number of
                temporary hit points instead.
              </div>
              <div>
                <div className='text-gray-400 font-bold'>1d10 (Long rest)</div>
                <div className='space-x-1'>
                  <input
                    className='round-full'
                    name='infernal-conduit'
                    type='checkbox'
                  />
                  <input
                    className='round-full'
                    name='infernal-conduit'
                    type='checkbox'
                  />
                  <input
                    className='round-full'
                    name='infernal-conduit'
                    type='checkbox'
                  />
                  <input
                    className='round-full'
                    name='infernal-conduit'
                    type='checkbox'
                  />
                </div>
              </div>
            </div>
            <div className='font-bold'>Baleful Interdict</div>
            <div className='space-y-1'>
              <div>
                When you reach 2nd level, you learn to use the power of Hell to
                censure other creatures. As a bonus action, you can place a seal
                on a target you can see within 30 feet. You can do this a number
                of times equal to your Charisma modifier. When you finish a
                short or long rest, you regain all your seals.
              </div>
              <div>
                When you or an ally hits a target you can see with any seals on
                it, you can consume the seals to make the attack deal an extra
                2d6 necrotic damage to the target per seal consumed.1 If you are
                within 30 feet of the target, you regain 2 hit points for each
                die of damage your seals deals.
              </div>
              <div>
                A creature with a seal on them is an interdicted creature.
              </div>
              <div>
                Seals evaporate if not used after 1 minute. Only the illrigger
                who placed the seal knows it’s there; it appears to the
                illrigger as a glowing glyph on the creature’s forehead. If a
                creature with any of your seals on it dies, you can move all of
                its seals to another creature within range.
              </div>
              <div className='font-bold text-gray-500'>I Am Death.</div>
              <div>
                {' '}
                At 6th level, after placing a seal on a creature, your attacks
                against that creature have advantage until the end of your turn.
              </div>
            </div>
            <div>
              <div className='text-gray-400 font-bold'>2d6 (Short rest)</div>
              <div className='space-x-1'>
                <input
                  className='round-full'
                  name='baleful-interdict'
                  type='checkbox'
                />
                <input
                  className='round-full'
                  name='baleful-interdict'
                  type='checkbox'
                />
                <input
                  className='round-full'
                  name='baleful-interdict'
                  type='checkbox'
                />
                <input
                  className='round-full'
                  name='baleful-interdict'
                  type='checkbox'
                />
                <input
                  className='round-full'
                  name='baleful-interdict'
                  type='checkbox'
                />
              </div>
            </div>
          </div>
          {/* subclass features */}
          <div className='space-y-1'>
            <div className='font-roboto text-lg'>Painkiller</div>
            <div className='font-bold'>Invoke Authority</div>
            <div className='space-y-1'>
              <div>
                When you use your Invoke Authority, you choose which option to
                use. Once you use this feature, you must finish a long rest to
                use it again.
              </div>
              <div>
                <span className='font-bold text-red-500'>
                  Invoke Authority: Devastator. &nbsp;
                </span>
                As an action, you invoke the authority of Dispater. A number of
                allies equal to your Charisma modifier, whom you can see within
                60 feet, and you, may use a reaction to make one weapon attack.
              </div>
              <div>
                <span className='font-bold text-red-500'>
                  Invoke Authority: Infernal Surge. &nbsp;
                </span>
                Upon invoking Dispater’s authority, you gain an extra action in
                addition to your normal action and any possible bonus action.
              </div>
              <input
                className='round-full mr-2'
                name='baleful-interdict'
                type='checkbox'
              />
              <span className='text-gray-400 font-bold'>(Long rest)</span>
            </div>
            <div className='font-bold'>By the Throat</div>
            <div>
              Starting at 7th level, you can, as an action, place a seal on an
              enemy within 30 feet. If they are Large or smaller, they must make
              a Wisdom saving throw (DC = 8 + your proficiency bonus + your
              Charisma modifier) or be grappled (escape DC 15), and the target
              is restrained until the grapple ends.
            </div>
          </div>
          {/* feats */}
        </div>
      )}
    </div>
  )
}

export default ActionFeatureBlock
