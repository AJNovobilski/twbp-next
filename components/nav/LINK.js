import React from "react";
import Link from "next/link";

const data = require("../../json/nav.json");

const listItems = data.map((links) => (
<ul>
      <li>
        <Link href={links.link}>
          <a>{links.name}</a>
        </Link>
      </li>
      </ul>
));

function LINK() {
  console.log(listItems);

  return <h1>{listItems}</h1>;
}

export default LINK;
