import React, { Fragment, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

export default function Presentation() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [diapositive, setDiapositive] = useState(0);
  const [show, setShow] = useState(false);

   

  useEffect(() => {
    const scrollElement = document.getElementById("scroll_container");

    const handleScroll = (element) => {
      const position = element.srcElement.scrollLeft;
      setDiapositive(Math.round(position / window.innerWidth));
      setScrollPosition(position);
    };
    scrollElement.addEventListener("scroll", handleScroll);
    return () => {
      scrollElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClickNextDiapositive = () => {
    const scrollElement = document.getElementById("scroll_container");
    setScrollPosition(window.innerWidth * (diapositive + 1));
    scrollElement.scrollLeft = window.innerWidth * (diapositive + 1);
    setShow(false)
  };
  const onClickPrevDiapositive = () => {
    const scrollElement = document.getElementById("scroll_container");
    const updatedPositionScroll = window.innerWidth * (diapositive - 1);
    setScrollPosition(updatedPositionScroll);
    scrollElement.scrollLeft = updatedPositionScroll;
    setShow(true)
  };
  return (
    <div className="pt-16 flex flex-col h-screen">
      <h1>Presentación</h1>
      <div className="flex overflow-x-scroll h-5/6" id="scroll_container">
        <div className="bg-neutral-700 w-screen h-full flex-shrink-0">
          <Transition
            as={Fragment}
            show={show}
            enter="transform duration-[1000ms]"
            enterFrom="transform duration-[1000ms]"
            enterTo="transform duration-[1000ms]"
            leave="transform translate-y-20 duration-[1000ms]"
            leaveFrom="transform translate-y-20 duration-[1000ms]"
            leaveTo="transform translate-y-20 duration-[1000ms]"
          >
            <div>Diapositva 4</div>
            
          </Transition>
        </div>
        <div className="bg-neutral-600 w-screen h-full flex-shrink-0">
          Diapositva 1
        </div>
        <div className="bg-neutral-500 w-screen h-full flex-shrink-0">
          Diapositva 2
        </div>
        <div className="bg-neutral-400 w-screen h-full flex-shrink-0">
          Diapositva 3
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div
          className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="group"
        >
          <button
            className="rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
            onClick={onClickPrevDiapositive}
          >
            Atras
          </button>
          <button
            className="rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
            onClick={onClickNextDiapositive}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}
