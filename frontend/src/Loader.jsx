import React from "react";
import LoaderGIF from "@assets/LoadLogo.gif";

export default function Loader() {
  return (
    <div className="flex justify-center items-center w-full h-full mt-36">
      <img src={LoaderGIF} alt="Loading..." />
    </div>
  );
}
