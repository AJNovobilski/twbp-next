import React, { useState, useEffect } from "react";
import SIDENAV from "./SIDENAV";

const globaldata = require("./json/globals.json");

export default function NAV(globaldata) {
  const [open, toggle] = React.useState(false);

  function test() {
    toggle(!open);
  }



  var classname = "w-0 h-0 invisible ";
  var mobilemenuicon = (
    <img
      class="w-6"
      src="https://img.icons8.com/office/40/000000/menu--v1.png"
    />
  );

  if (open === true) {
    classname =
      " transition ease-in-out duration-700 bg-bluegray-200 h-screen w-52 absolute z-40";
    mobilemenuicon = (
      <img
        class="w-6 "
        src="https://img.icons8.com/office/40/000000/menu--v5.png"
      />
    );
  }




  

var overlay =  "col-span-3 bg-black w-screen h-screen absolute invisible"

  if (open === true) {
    overlay =
      "visible col-span-3 bg-black opacity-50 w-screen h-screen absolute z-10";
   
  }



  return (

    
    <div  id="initial">
           
      <nav className="shadow-sm border-double border-2 ring-opacity-25 bg-bluegray-50 z-20">
        {/* mobile */}
        <div className="grid grid-rows-1 grid-cols-4 pt-5 pb-5 flex">
          <div onClick={test} className="pl-2">
            {mobilemenuicon}
          </div>
          <div className="col-span-2 mx-auto">
            <img
              classname="h-2 align-items-center mx-auto"
              src="https://familymarketing.us/media/logo-family-marketing.png"
            ></img>
          </div>
          <div className="mx-auto items-center flex col-span-2 text-white inline-block">
            <img
              classname="h-2"
              src=""
            ></img>
          </div>
        </div>
      </nav>
      <div className="grid grid-cols-3" >

      <div class="z-100"  tabIndex="50"
>      <SIDENAV visible={classname}></SIDENAV>
</div>
  <div class={overlay}  onClick={test}></div>
  </div>
  <div>
    </div>
    </div>
  );
}
