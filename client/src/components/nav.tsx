import React from 'react'
import { LinkType } from './../lib/types'
import { useLocation, useHistory } from 'react-router-dom'

interface Props {
  links: LinkType[]
  isPublic?: boolean
  signout?: LinkType
}

const NavBar: React.FC<Props> = ({ links, isPublic, signout }) => {
  const location = useLocation()
  const subpath = location.pathname.split(new RegExp('/(?<name>[^>]+)/'))[1]
  const history = useHistory()

  return (
    <div className='h-38 w-full fixed top-0 bg-stone z-30'>
      {!isPublic && (
        <div className='bg-black w-full px-6 py-3'>
          <div className='flex justify-between items-center'>
            <button className='hover:no-underline outline-none' onClick={() => history.push(signout?.link || '/')}>
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
      )}
      {subpath && location.pathname !== '/create/sheet' && (
        <div className='relative px-5 py-6'>
          <div className='flex w-full justify-between items-center text-sm'>
            {links
              .filter((x) => x.link.indexOf(subpath) > -1)
              .map((x) => (
                <div key={x.text}>
                  <a
                    className='text-off-white font-roboto uppercase hover:text-hover-white hover:no-underline cursor-pointer'
                    onClick={() => history.push(x.link)}
                  >
                    {x.text}
                  </a>
                </div>
              ))}
          </div>
          {isPublic && (
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <img
                className='w-24'
                src='DD-Logo-1024x487.png'
                alt='broken logo'
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default NavBar
