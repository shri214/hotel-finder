import React, { Dispatch, SetStateAction } from 'react';
import {cities} from '../cities';
import './style.scss';

interface ISearch{
    searchValue:string;
    setSearch:(x:string)=>void;
    setVisible:(y:boolean)=>void;
}

export const City:React.FC<ISearch>=({searchValue, setSearch, setVisible})=> {
   const handleClick=(val:string)=>{
      setSearch(val);
      setVisible(false);
   };
   return (
      <div className='city-list'>{cities.filter((value:string)=>value.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())).map((val:string, ind:number)=>{
      
         return  <p key={ind} onClick={()=>handleClick(val)}>{val}</p>;
      })}</div>
   );
};

