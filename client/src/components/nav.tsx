import React, { useContext, useState } from 'react'
import { LinkType } from './../lib/types'
import { useLocation, useHistory, Link } from 'react-router-dom'
import classnames from 'classnames'
import { AuthContext } from '../global-state'

interface Props {
  links: LinkType[]
  isPublic?: boolean
  signout?: LinkType
}

const NavBar: React.FC<Props> = ({ links, isPublic, signout }) => {
  const location = useLocation()
  const subpaths = location.pathname.split(new RegExp('/(?<name>[^>]+)/'))
  const subpathsSplit = subpaths.length > 1 ? subpaths[1].split('/') : []
  const [authState] = useContext(AuthContext)
  const history = useHistory()

  // public
  if (isPublic) {
    return (
      <div className='h-38 w-full bg-black p-4 z-10 relative'>
        <div className='flex items-center justify-between'>
          {links.map((x) => (
            <div key={x.text}>
              <button
                className='text-off-white font-roboto uppercase hover:text-hover-white hover:no-underline cursor-pointer outline-none'
                onClick={() => history.push(x.link)}
              >
                {x.text}
              </button>
            </div>
          ))}
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <img
              className='w-24'
              src='DD-Logo-1024x487.png'
              alt='broken logo'
            />
          </div>
        </div>
      </div>
    )
  }
  // home
  if (location.pathname === '/') {
    return (
      <div className='px-6 pt-3 bg-black w-full pb-3'>
        <div className='flex justify-between items-center'>
          <button
            className='hover:no-underline outline-none'
            onClick={() => history.push('/')}
          >
            <img
              className='w-20'
              src='/DD-Logo-1024x487.png'
              alt='broken logo'
            />
          </button>
          {signout && (
            <button
              className='text-off-white font-roboto uppercase hover:text-hover-white hover:no-underline cursor-pointer outline-none'
              onClick={() => history.push(signout.link)}
            >
              {signout.text}
            </button>
          )}
        </div>
      </div>
    )
  }

  if (location.pathname.indexOf('sheet') > -1) {
    return (
      <>
        <div className='px-6 pt-3 bg-black w-full pb-3'>
          <div className='flex justify-between items-center'>
            <button
              className='hover:no-underline outline-none'
              onClick={() => history.push('/')}
            >
              <img
                className='w-20'
                src='/DD-Logo-1024x487.png'
                alt='broken logo'
              />
            </button>
            {signout && (
              <button
                className='text-off-white font-roboto uppercase hover:text-hover-white hover:no-underline cursor-pointer outline-none'
                onClick={() => history.push(signout.link)}
              >
                {signout.text}
              </button>
            )}
          </div>
        </div>
        <div className='h-38 w-full bg-stone mb-7'>
          <div className='relative px-5 py-6'>
            <div className='flex w-full justify-between items-center text-sm'>
              {links
                .filter((x) => x.link.indexOf('create') > -1)
                .map((x) => (
                  <div key={x.text}>
                    <Link
                      to={x.link.replace(':id', authState.currentCharacterId)}
                    >
                      <div className='text-off-white font-roboto uppercase hover:text-hover-white hover:no-underline cursor-pointer outline-none'>
                        {' '}
                        {x.text}
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </>
    )
  }
  
  // create character
  if (location.pathname.indexOf('create') > -1) {
    return (
      <>
        <div className='px-6 pt-3 bg-black w-full pb-3'>
          <div className='flex justify-between items-center'>
            <button
              className='hover:no-underline outline-none'
              onClick={() => history.push('/')}
            >
              <img
                className='w-20'
                src='/DD-Logo-1024x487.png'
                alt='broken logo'
              />
            </button>
            {signout && (
              <button
                className='text-off-white font-roboto uppercase hover:text-hover-white hover:no-underline cursor-pointer outline-none'
                onClick={() => history.push(signout.link)}
              >
                {signout.text}
              </button>
            )}
          </div>
        </div>
        <div className='h-38 w-full bg-stone mb-12'>
          <div className='relative px-5 py-6'>
            <div className='flex w-full justify-between items-center text-sm'>
              {links
                .filter((x) => x.link.indexOf('create') > -1)
                .map((x) => (
                  <div key={x.text}>
                    <Link
                      to={x.link.replace(':id', authState.currentCharacterId)}
                    >
                      <div className='text-off-white font-roboto uppercase hover:text-hover-white hover:no-underline cursor-pointer outline-none'>
                        {' '}
                        {x.text}
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </>
    )
  }

  // view
  return (
    <>
      <div className='px-6 pt-3 bg-black w-full pb-3'>
        <div className='flex justify-between items-center'>
          <button
            className='hover:no-underline outline-none'
            onClick={() => history.push('/')}
          >
            <img
              className='w-20'
              src='/DD-Logo-1024x487.png'
              alt='broken logo'
            />
          </button>
          {signout && (
            <button
              className='text-off-white font-roboto uppercase hover:text-hover-white hover:no-underline cursor-pointer outline-none'
              onClick={() => history.push(signout.link)}
            >
              {signout.text}
            </button>
          )}
        </div>
      </div>
      <div className='h-38 w-full bg-stone mb-12'>
        <div className='relative px-5 py-6'>
          <div className='flex w-full justify-between items-center text-sm'>
            {links
              .filter((x) => x.link.indexOf('create') === -1)
              .map((x) => (
                <div key={x.text}>
                  <Link
                    to={x.link}
                  >
                    <div className='text-off-white font-roboto uppercase hover:text-hover-white hover:no-underline cursor-pointer outline-none'>
                      {' '}
                      {x.text}
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
