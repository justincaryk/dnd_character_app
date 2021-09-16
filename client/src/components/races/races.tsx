import React from "react";

interface Props {
  races: any
}
const Races: React.FC<Props> = ({races}) => {

  return (
    <>
      <label className='text-white font-bold font-roboto text-lg'>Choose a Race</label>
      <select className="w-full border rounded text-lg p-2">
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
