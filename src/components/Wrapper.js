import React from "react";
// import "../styles/Wrapper.css";

function Wrapper(prop) {
    return (
        <div className="wrapper">{prop.children}</div>
    )
}


export default Wrapper;