import React from 'react';
import './style.scss';

interface InputsProps {
  clName: string;
  type: string;
  placeHolder: string;
  events1?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  events2?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setSearch?:(React.Dispatch<React.SetStateAction<string>>);
  search?:string;
}

const Inputs: React.FC<InputsProps> = ({
   clName,
   type,
   placeHolder,
   setSearch,
   search,
   events1,
   events2,
}) => {

   const handelSearch=(e: React.ChangeEvent<HTMLInputElement>)=>{
      setSearch && setSearch(e.target.value);
   };
   return (
      <input id={clName} type={type} placeholder={placeHolder} onChange={handelSearch} value={search} onFocus={events1} onBlur={events2}/>
      
   );
};

export default Inputs;
