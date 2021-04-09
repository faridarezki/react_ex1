import React from "react";

import Menus from './components/Menus';
import geolier from "./geolier.jpg";
export default function App() {
  return (
<div>
    <div style={
      {backgroundImage:`url(${geolier})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
   
     width: `500px`,
      height:'550px' }
      
      }>
 
  </div>

 <Menus />
 </div>
  );
}



