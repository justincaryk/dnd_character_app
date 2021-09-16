import React from 'react'
import { LinkType } from './../lib/types'

interface Props {
  links: LinkType[]
  isPublic?: boolean
}

const NavBar: React.FC<Props> = ({ links, isPublic }) => (
  <div className='h-22 w-full px-5 py-8 fixed top-0 bg-stone'>
    <div className='relative'>
      <div className='flex w-full justify-between text-sm'>
        {links.map((x) => (
          <div key={x.text}>
            <a 
              className='text-off-white font-roboto uppercase hover:text-hover-white hover:no-underline' 
              href={x.link}
            >{x.text}</a>
          </div>
        ))}
      </div>
      {isPublic && (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <img className='w-24' src='DD-Logo-1024x487.png' alt='broken logo' />
        </div>
      )}
    </div>
  </div>
)

export default NavBar
