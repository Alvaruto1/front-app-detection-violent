import React from "react";
import detected_images_example from "../../assests/examples";
import "./pages.css";

export default function DetectionsExample() {
  return (
    <div className="pt-32 flip -z-10 w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {detected_images_example.map((element, index) => (
        <div className="flip-content m-auto mb-10 shadow-md" key={index + "1"}>
          <div className="flex flip-front h-full" key={index + "2"}>
            <img
              key={index}
              src={element["image"]}
              alt=""
              className="m-auto w-full max-w-full max-h-full"
            />
          </div>
          <div className="flex h-full flip-back" key={index + "3"}>
            <div className="m-auto">{element["text"]}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
