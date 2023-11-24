import React, { useContext, useEffect, useState } from 'react';
import './style.scss';
import { Context } from '../../';

interface IModalProps {
  obj: {
    child: number;
    adult: number;
  };
}

export const Modal: React.FC<IModalProps> = ({ obj }) => {
   const [countChild, setCountChild] = useState(obj.child);
   const [countAdult, setCountAdult] = useState(obj.adult);

   const context = useContext(Context);

   const handleCount = (type: 'C' | 'A', action: 'inc' | 'dec') => {
      const isChild = type === 'C';
      const currentCount = isChild ? countChild : countAdult;
      const increment = action === 'inc' ? 1 : -1;
      const newCount = Math.min(Math.max(currentCount + increment, isChild ? 0 : 1), isChild ? 3 : 3);
      isChild?setCountChild(newCount):setCountAdult(newCount);
   };
  

   useEffect(() => {
      context?.updateChild(countChild);
      context?.updateAdult(countAdult);
   }, [countChild, countAdult]);

   return (
      <div className='clients-detail'>
         <span>Room: 1</span>
         <span>
            <button className='inc' onClick={() => handleCount('C', 'inc')}>+</button>
            {countChild}
            <button className='dec' onClick={() => handleCount('C', 'dec')}>-</button>
         </span>
         <span>
            <button className='inc' onClick={() => handleCount('A', 'inc')}>+</button>
            {countAdult}
            <button className='dec' onClick={() => handleCount('A', 'dec')}>-</button>
         </span>
      </div>
   );
};


