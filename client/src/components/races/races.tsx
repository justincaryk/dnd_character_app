import React from "react";
// import "./Races.scss";
import { appDictionary } from "../../lib/dictionary";

const Races: React.FC = () => {
  const races = appDictionary.RACE_DATA;

  return (
    <>
      <label>Choose a Race</label>
      <select className="form-control">
        <option value="" key="0000000" selected disabled>
          Make a selection
        </option>
        {races.map((x: any) => (
          <option value={x.id} key={+x.id}>
            {x.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Races;
