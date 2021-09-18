import classnames from 'classnames'
import React from 'react'
import { useLocation } from 'react-router'

interface Props {
  children?: any
}
const Layout: React.FC<Props> = ({ children }) => {
  const location = useLocation()
  debugger
  return (
    <div
      className={classnames({
        'pb-40 fixed h-full w-full bg-no-repeat bg-cover overflow-scroll':true,
        'pt-24': location.pathname === '/create/sheet',
        'pt-40': location.pathname !== '/create/sheet'

      })}
      style={{ backgroundImage: "url('/spooky_bg.jpeg')" }}
    >
      {children}
    </div>
  )
}
export default Layout
