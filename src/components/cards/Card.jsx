import React from "react";

export default function Card({children,className}) {
  return (
    <article className={`'container bg-white shadow-lg rounded-2xl p-5' ${className}`}>
        {children}
    </article>
  );
}
