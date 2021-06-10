import React from "react";
import Link from "next/link";
import DROPDOWN from "./dropdown";

const navdata = require("./json/nav.json");

const navlist = navdata.map(function y(links) {

  if (links.subs === undefined) {
    var toggle = (
      <Link key={links.link} href={links.link}>
        <a>
          <div className="h-12 flex items-center hover:bg-cyan-50 ">
            <img className="w-7 ml-2" src={links.icon}></img>
            <div className="text-center pl-3">{links.name}</div>
          </div>
        </a>
      </Link>
    );
  } else {


    var toggle = 
   
    <DROPDOWN
    topdata = {links.name}
    icon = {links.icon}
    subs = {links.subs}
    
    
    ></DROPDOWN>;

  }


  return <div>{toggle}</div>;
});

export default function LINKREG() {


  return <div>{navlist}</div>;
}
