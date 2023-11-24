import {observable} from '@legendapp/state';

interface IItems{
    child:number;
    adult:number;
}

class RoomData{
   roomsDetails;
   constructor(){
      this.roomsDetails=observable<IItems>({child:0, adult:1});
   }

   
   updateChild(num: number) {
      this.roomsDetails.set({...this.roomsDetails.peek(), child:num});
   }
   updateAdult(num: number) {
      this.roomsDetails.set({...this.roomsDetails.peek(),adult:num});
   }
   
}
export default RoomData;