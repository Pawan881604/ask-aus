import React from 'react'
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="container">
      <div
        className="tenor-gif-embed"
        data-postid={22885016}
        data-share-method="host"
        data-aspect-ratio="1.04918"
        data-width="100%"
      >
   
   <img width={200} src='./manja.gif' />
      </div>
      <h1>Will You be my Valentine? 🤗</h1>
      <h1>Kajal ji😁😀</h1>
      <div className="btn">
        <NavLink to={'/yes'}>Yes</NavLink>
        <NavLink to={'/no1'} >No</NavLink>
      </div>
    </div>
  );
}
