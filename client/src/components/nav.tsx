import React from 'react'
import { LinkType } from './../lib/types'
import './../scss/Nav.scss'

interface Props {
  links: LinkType[]
  isPublic?: boolean
}

const NavBar: React.FC<Props> = ({ links, isPublic }) => (
  <div className='navbar'>
    <div className='container relative'>
      <div className='flex'>
        {links.map((x) => (
          <div key={x.text}>
            <a href={x.link}>{x.text}</a>
          </div>
        ))}
      </div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <img className='w-24' src='DD-Logo-1024x487.png' alt='broken logo' />
      </div>
    </div>
  </div>
)

export default NavBar
