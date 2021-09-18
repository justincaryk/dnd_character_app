import classnames from 'classnames'
import React from 'react'
interface Props {
  children?: any
}
const Layout: React.FC<Props> = ({ children }) => {

  return (
    <div
      className={classnames({
        'pb-40 fixed h-full w-full bg-no-repeat bg-cover overflow-scroll':true
      })}
      style={{ backgroundImage: "url('/spooky_bg.jpeg')" }}
    >
      {children}
    </div>
  )
}
export default Layout
