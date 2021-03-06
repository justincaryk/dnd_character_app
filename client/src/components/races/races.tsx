import React from "react";
// import "./Races.scss";
import { appDictionary } from '../../lib/dictionary';

class Races extends React.Component {
    
    render() {
        const races = appDictionary.RACE_DATA;

        return (
            <div>
                <label>Choose a Race</label>
                <select className="form-control">
                    <option value="" key="0000000" selected disabled>Make a selection</option>
                    {races.map((x: any) => <option value={x.id} key={+x.id}>{x.name}</option>)}
                </select>
            </div>
        );
    }

}

export default Races;