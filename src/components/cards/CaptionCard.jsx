import React, { useState } from "react";

export const CaptionCard = ({
  caption = "caption",
  img = null,
  onClick = null,
}) => {
  const [hovered, sethovered] = useState(false);
  return (
    <div
      className="flex flex-1 flex-col duration-300  hover:scale-110"
      onMouseEnter={() => {
        sethovered(true);
      }}
      onMouseLeave={() => {
        sethovered(false);
      }}
    >
      <img src={img} onClick={onClick} className="w-full rounded-lg bg-slate-400" />

      <p
        className="duration-300 w-full text-center"
        style={{ color: hovered ? "white" : "transparent" }}
      >
        {caption}
      </p>
    </div>
  );
};

// CaptionCard.defaultProps = {
//     caption: 'caption',
//     className = '',
//     img = null,
//     onClick = null

// }
