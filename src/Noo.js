import React from "react";
import { NavLink } from "react-router-dom";

export const Noo = () => {
  return (
    <div className="container">
      <div
        className="tenor-gif-embed"
        data-postid={22050818}
        data-share-method="host"
        data-aspect-ratio={1}
        data-width="100%"
      >
        <img width={200} src="./sochle.gif" />
      </div>
      <h1>Soch le ache se! 🙄</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <div className="btn">
        <NavLink to={"/yes"}>Yes</NavLink>
        <NavLink to={"/no2"}>No</NavLink>
      </div>
    </div>
  );
};
