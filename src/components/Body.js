// import React from 'react';
// import SideBar from './SideBar';
// // import MainCOntainer from './MainCOntainer';
// import { Outlet } from 'react-router-dom';

// const Body = () => {
//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* Sidebar */}
//       <SideBar />

//       {/* Main Content Area */}
//       <div className="flex-1 bg-gray-100 overflow-y-auto p-4">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Body;


import React from 'react';
import Head from './Head';
import Sidebar from './SideBar';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className="flex flex-col h-screen">
      <Head /> {/* Safe now inside RouterProvider */}
      <div className="flex flex-1">
        <Sidebar /> {/* Sidebar stays on the left */}
        <div className="flex-1 overflow-y-auto p-4">
          <Outlet /> {/* Route content goes here */}
        </div>
      </div>
    </div>
  );
};

export default Body;
