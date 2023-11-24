import React from 'react';
import './style.scss';
interface IBtn{
    btn:string;
    onclick?:(event: React.MouseEvent)=>void;
    btnClass:string;
}

export const Button:React.FC<IBtn> =({btn, onclick, btnClass}) =>{
   return (
      <button onClick={onclick} className={btnClass}>{btn}</button>
   );
};
