import React from 'react'

interface Props {
    children?: any
}
const Layout: React.FC<Props> = ({children}) => (
    <div className='pt-40 pb-40 fixed h-full w-full bg-no-repeat bg-cover overflow-scroll' style={{backgroundImage: 'url(\'/spooky_bg.jpeg\')'}}>
        {children}
    </div>
)

export default Layout