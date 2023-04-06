import React from "react";
import Marvel from "../assets/images/MarvelBg.jpeg";
import "./Loading.css";

function Loading() {
  return (
    <div className="bg-black text-white z-10 opacity-95 w-100 h-screen flex justify-center items-center flex-col">
      <img className="fixed top-0 left-0 z-[-1] opacity-80 blur w-screen h-screen" src={Marvel} alt="마블의 배경그림" />
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
