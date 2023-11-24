import React, { useContext, useEffect } from 'react';
import {observer} from '@legendapp/state/react';

import './style.scss';

import {Modal}  from './Modal';
import { Context } from '../..';


interface IToggling{
   toggle:boolean;
   setToggle:(x:boolean)=>void;
}


export const Rooms:React.FC<IToggling>=observer(({toggle,setToggle})=> {

   const context=useContext(Context);

   const propagation=(e:React.MouseEvent)=>{
      setToggle(!toggle);
      e.stopPropagation();
   };
   const propagations=(e:React.MouseEvent)=>{
      console.log('.');
      e.stopPropagation();
   };

   useEffect(()=>{
      const func =()=>{
         setToggle(false);
      };
      document.addEventListener('click', func);
      return()=>{
         document.removeEventListener('click', func);
      };
   });

   return (
      <>
         <div className='rooms-container' onClick={propagation}><strong>{1} Room, {context?.roomsDetails.get().child}   Child, {context?.roomsDetails.get().adult} Adult</strong></div>
         {toggle && <div className='modal-container' onClick={propagations}>
            <div className='child-adult'>
               <span>Rooms</span>
               <span>Child</span>
               <span>Adult</span>
            </div>
            
            <Modal  obj={context?.roomsDetails.get()} />
            
         </div>}
      </>
      
   );
});



