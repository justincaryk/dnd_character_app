import React from 'react'
import { barbarianDictionary } from './barbarian-data'

const Table: React.FC = () => {

    return (
        <div className='flex'>
            <div>hello</div>
            <div>goodbye</div>
        </div>
    )
}

const Barbarian: React.FC = () => {

    return (
        <div>
            <Table />
        </div>
    )
}

export default Barbarian