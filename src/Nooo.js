import React from "react";
import { NavLink } from "react-router-dom";

export const Nooo = () => {
  return (
    <div className="container">
      <div
        className="tenor-gif-embed"
        data-postid={15195810}
        data-share-method="host"
        data-aspect-ratio={1}
        data-width="100%"
      >
        <img width={200} src="./ek or bar.gif" />
      </div>
      <h1>Ek aur baar Soch le! 😣</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <div className="btn">
        <NavLink to={"/yes"}>Yes</NavLink>
        <NavLink to={"/no3"}>No</NavLink>
      </div>
    </div>
  );
};
