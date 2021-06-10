import React from "react";
import NAV from "./nav/NAV"
import META from "./meta"

class PAGE extends React.Component {



  render(props) {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <div>
        <META
        title = {this.props.title}
        url = {this.props.url}
        desc = {this.props.desc}
        image = {this.props.image}
        
        
        
        ></META>
     <NAV></NAV>
     </div>
    );
  }
}

export default PAGE;  
