import { memo } from "react";
import React from "react";

const Small = React.memo(({ valuer }) => {
  console.log("Me volvi a generar o dibujar :(");
  return <small>{valuer}</small>;
});

export default Small;
