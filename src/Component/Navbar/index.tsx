import React, { useContext, useState } from 'react';
import './style.scss';
import Inputs from '../../CustomComponents/Input.tsx';
import Date from '../DatePicker';
import {Button} from '../../CustomComponents/Button';
import type { Dayjs } from 'dayjs';
import {Rooms} from '../Rooms';
import { Context } from '../..';
import {City} from './City';

type RangeValue = [Dayjs | null, Dayjs | null] | null;


export const Navbar:React.FC=()=> {
   
   const [search, setSearch]=useState('');
   const [focus, setFocus]=useState(true);
   const [visible, setVisible]=useState(true);
    
   const [toggle, setToggle] = useState(false);

   const [dates, setDates] = useState<RangeValue>(null);
   const [value, setValue] = useState<RangeValue>(null);

   const context=useContext(Context);

   const focusOnInput = () => {
      setFocus(false);
      setToggle(false);
   };
   const blurOnInput = () => {
      setFocus(true);
   };

   const searching=()=>{
      // TODO sending the request from here
      console.log(search, value, context?.roomsDetails.get());
      setToggle(false);
   };

   if(search==='' && !visible){
      setVisible(true);
   }
   

   return <nav className='navigation-bar'>
      <h1>HOTEL</h1>
      <div className='container-box'>
         <div className='search'>
            <Inputs clName={'groups'} type={'search'} placeHolder={'search'} setSearch={setSearch} search={search} events1={focusOnInput} events2={blurOnInput}/>
            {!search && focus && <div className='nearby'>
               <span className='material-icons'>my_location</span>
               <span>Near me</span>
            </div>}
            {search.length>=3 && visible && <City searchValue={search}  setSearch={setSearch} setVisible={setVisible}/>}
         </div>
         <div className='dates'>
            <Date dates={dates} setDates={setDates} value={value} setValue={setValue} />
         </div>
         <div className='rooms'>
            <Rooms toggle={toggle} setToggle={setToggle}/>
         </div>
         <div className='search-btn'>
            <Button btn={'Search'} onclick={searching} btnClass={'searchs'}/>
         </div>
      </div>
   </nav>;
};


