import type { Dayjs } from 'dayjs';
import React, { Dispatch, SetStateAction } from 'react';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

type RangeValue = [Dayjs | null, Dayjs | null] | null;

interface DatesProps {
   dates: RangeValue;
   setDates: Dispatch<SetStateAction<RangeValue>>;
   value: RangeValue;
   setValue: Dispatch<SetStateAction<RangeValue>>;
 }

const Date: React.FC<DatesProps> = ({ dates, setDates, value, setValue }) => {

   const disabledDate = (current: Dayjs) => {
      if (!dates) {
         return false;
      }
      const tooLate = dates[0] && current.diff(dates[0], 'days') >= 7;
      const tooEarly = dates[1] && dates[1].diff(current, 'days') >= 7;
      return !!tooEarly || !!tooLate;
   };

   const onOpenChange = (open: boolean) => {
      if (open) {
         setDates([null, null]);
      } else {
         setDates(null);
      }
   };

   return (
      <RangePicker
         value={dates || value}
         disabledDate={disabledDate}
         onCalendarChange={(val) => {
            setDates(val);
         }}
         onChange={(val) => {
            setValue(val);
         }}
         onOpenChange={onOpenChange}
         changeOnBlur
      />
   );
};

export default Date;