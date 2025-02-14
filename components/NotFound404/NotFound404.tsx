import React from "react";
import CatPic from "./assets/cat";
import CatHands from "./assets/catHands";
import Button from "../common/Button";

const NotFound404 = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="h-1/2 w-full bg-gradient-to-b from-[#000560] to-[#000892] relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-[42%] translate-y-[2px] w-[85vw] max-w-[681px] min-w-[300px]">
          <CatPic className="w-full h-auto" />
        </div>
      </div>

      <div className="h-1/2 w-full bg-black relative">
        <div className="absolute top-0 left-1/2 -translate-y-[2px] w-[70vw] max-w-[494px] min-w-[250px] translate-x-[-52%]">
          <CatHands className="w-full h-auto" />
        </div>

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center z-10 w-full px-4">
          <h1 className="text-white font-anton !leading-tight font-bold mb-4 text-8xl md:text-9xl drop-shadow-lg">
            404
          </h1>
          <p className="text-white font-anton !leading-tight text-xl md:text-2xl mb-8 font-medium">
            Oops! Page not found
          </p>
          <a
            href="/home"
            className="flex items-center justify-center"
          >
            <Button
              containerClass="!font-semibold !text-lg !md:text-xl"
              id="GoBack"
              title="Go Back"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound404;
