import classnames from 'classnames'
import React, { useContext } from 'react'
import { AUTH_TOKEN } from '../constants'
import { AuthContext } from '../global-state'
import { parseJwt } from '../lib/utils'
interface Props {
  children?: any
}
const Layout: React.FC<Props> = ({ children }) => {
  const authToken = localStorage.getItem(AUTH_TOKEN)
  const [authState, setAuthState] = useContext(AuthContext)
  const parsed = authToken ? parseJwt(authToken) : null

  if (!authState.userId && parsed) {
    setAuthState({
      userId: parsed.user_id,
      username: parsed.username,
    })
  }

  return (
    <div
      className={classnames({
        'pb-40 fixed h-full w-full bg-no-repeat bg-cover overflow-scroll': true,
      })}
      style={{ backgroundImage: "url('/spooky_bg.jpeg')" }}
    >
      {children}
    </div>
  )
}
export default Layout
