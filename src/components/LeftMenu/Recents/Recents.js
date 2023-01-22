import React, { useDebugValue } from "react";
import "./Recents.css";

function Recents() {
  const data = [
    {
      id: 1,
      tag: "reactjs",
    },
    {
      id: 2,
      tag: "data structures",
    },
    {
      id: 3,
      tag: "full stack development",
    },
    {
      id: 4,
      tag: "design",
    },
    {
      id: 5,
      tag: "android development",
    },
  ];

  return (
    <div className="recents_container">
      <p className="recents_title">Recent</p>
      <div className="recents_tags_container">
        {data.map((value) => (
          <p>#{value.tag}</p>
        ))}
      </div>
    </div>
  );
}

export default Recents;
