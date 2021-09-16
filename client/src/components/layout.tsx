import React from 'react'

interface Props {
    children?: any
}
const Layout: React.FC<Props> = ({children}) => (
    <div className='pt-24 pb-40 fixed h-full w-full bg-no-repeat bg-contain overflow-scroll' style={{backgroundImage: 'url(\'spooky_bg.jpeg\')'}}>
        {children}
    </div>
)

export default Layout