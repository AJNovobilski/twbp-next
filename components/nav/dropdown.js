import React, { useState } from "react";
import Link from "next/link";

export default function DROPDOWN(props) {
  const [open, setstate] = useState(false);

  function handleopen() {
    setstate(!open);
  }

  if (open === false){
      var styles =  "bg-black transition-height duration-300 ease-in-out h-0 invisible"
      var svgstyle = "ml-3"
  }
  else{
      var styles = " transition-height duration-300 ease-in-out h-24       "
      var svgstyle = "transform rotate-180 ml-5 transition duration-300"

      
  }

  const submap = props.subs.map((element) => {
    return (
      <Link key={element.link} href={element.link}>
        <a>
          <div className="bg-white h-12 flex items-center hover:bg-cyan-50 ">
            <img className="w-7 ml-2" src={element.icon}></img>
            <div className="text-center pl-3">{element.subname}</div>
          </div>
        </a>
      </Link>
    );
  });

  var test = (
    <div>
      <div
        onClick={handleopen}
        className="h-12 flex items-center hover:bg-cyan-50 "
      >
        <img className="w-7 ml-2" src={props.icon}></img>
        <div className="text-center pl-3">{props.topdata}</div>

        <svg
          viewBox="0 0 24 24"
          color="text"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          class={svgstyle}
        >
          <path d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"></path>
        </svg>
      </div>
    </div>
  );

  return (
    <div>
      <div>{test}</div>
      <div className={styles}> {submap}</div>    
    </div>
  );
}
