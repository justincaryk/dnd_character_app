import React from 'react'
import { LinkType } from './../lib/types'
import './../scss/Nav.scss'

interface Props {
  links: LinkType[]
}

const NavBar: React.FC<Props> = ({ links }) => (
  <div className='navbar'>
      <div className='container'>
        <div className='flex'>
            {links.map(x => (
                <div>
                    <a href={x.link}>{x.text}</a>
                </div>
            ))}
        </div>
    </div>
  </div>
)

export default NavBar
