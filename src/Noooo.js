import React from "react";
import { NavLink } from "react-router-dom";

export const Noooo = () => {
    function moveRandomEl(elm) {
        elm.style.position = "absolute";
        elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
        elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
      }
      
  return (
    <>
      <div className="container">
        <div
          className="tenor-gif-embed"
          data-postid={15974530976611222074}
          data-share-method="host"
          data-aspect-ratio="1.26923"
          data-width="100%"
        >
          <img width={200} src="./bhav.gif" />
        </div>
        <h1>Manja na! Kitna bhav khaegi 😭</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <div className="btn">
          <NavLink to={"/yes"}>Yes</NavLink>
          <NavLink onMouseEnter={(e)=>moveRandomEl(e.target)} to={"#"}>No</NavLink>
        </div>
      </div>
    </>
  );
};
