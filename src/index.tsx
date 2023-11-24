// import ReactDOM from 'react-dom/client';
// import {App} from './App';
// import './index.scss';
// import React, { useRef } from 'react';
// import {createContext} from 'react';
// import RoomData from './Component/legendStates/RoomData';

// export const Context=createContext<RoomData|null>(null);

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//    <Context.Provider value={ useRef(new RoomData()).current}>
//       <App/>
//    </Context.Provider>
   
// );

import ReactDOM from 'react-dom/client';
import React, { useRef } from 'react';
import './index.scss';
import { App } from './App';
import RoomData from './Component/legendStates/RoomData';

export const Context = React.createContext<RoomData | null>(null);

function Index() {
   const roomDataRef = useRef(new RoomData());

   return (
      <Context.Provider value={roomDataRef.current}>
         <App />
      </Context.Provider>
   );
}

const root=ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
   <Index />
);
