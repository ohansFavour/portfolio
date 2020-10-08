import React from "react";
import "./Button.css";

export default function Button({
  text,
  className,
  href,
  newTab,
  download,
  filename,
  Data,
}) {
  return (
    <>
      {download ? (
        <div className={className}>
          <a className="main-button" href={Data} download={filename}>
            {text}
          </a>
        </div>
      ) : (
        <div className={className}>
          <a className="main-button" href={href} target={newTab && "_blank"}>
            {text}
          </a>
        </div>
      )}
    </>
  );
}
