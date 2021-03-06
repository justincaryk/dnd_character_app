import React from 'react';
import './../../scss/Subraces.scss';
import { SubraceType } from './../../lib/types'
interface Props {
    subraces: SubraceType[]
}

export default class Subraces extends React.Component<Props> {
    constructor(props: Props) {
        
        super(props);

    }

    render() {

        const subraces = this.props.subraces ? this.props.subraces : [];

        const htmlBlockForNoSubraces = null
        const htmlBlockForSubraces = (
            <div>
                <label>Choose a Subrace</label>
                <select className="form-control">
                    <option value="" key="100000000" selected disabled>Make a selection</option>
                    {subraces.map(x => <option value={x.id} key={x.id}>{x.name}</option>)}
                </select>
            </div>
        )
        const htmlBlockToReturn = subraces.length ? htmlBlockForSubraces : htmlBlockForNoSubraces;
        
        return (
            <div>{htmlBlockToReturn}</div>
        );
    }
}
