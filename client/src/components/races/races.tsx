import React from "react";
// import "./Races.scss";
// import { appDictionary } from "../../lib/dictionary";

interface Props {
  races: any
}
const Races: React.FC<Props> = ({races}) => {

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
