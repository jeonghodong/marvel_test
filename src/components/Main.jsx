import React from "react";
import marvelBg from "../assets/images/marvel.jpeg";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { mbtiState } from "../states/mbtiState";

function Main() {
  const navigate = useNavigate();
  const [mbti, setMbti] = useRecoilState(mbtiState);
  return (
    <div className="bg-black z-10 opacity-95 pr-8">
      <div className="fixed z-[-1] top-0 bottom-0 w-screen h-screen opacity-70 blur">
        <img src={marvelBg} alt="마블의 배경이미지" className="w-screen h-screen" />
      </div>
      <div className="w-screen h-screen flex justify-center items-center flex-col">
        <h2 className="text-white border border-white border-solid text-[1rem] sm:text-[1vw] rounded-full p-5 mb-8">
          Marvel <br /> Hero <br /> Test
        </h2>
        <h1 className="text-white z-100 sm:text-[3.5vw] text-[2rem] font-bold">마블 히어로 테스트</h1>
        <div className="w-1/6 h-px bg-white mt-12 mb-12"></div>
        <p className="text-white text-center text-[.8rem] pl-8 pr-8 leading-7 sm:text-[1vw]">
          당신은 평소와 같이 평범한 일상을 보내던중, 한 쪽 눈을 가린 남자가 히어로의 일을 해보지 않겠냐는 제안을 하였다.
          <br />
          <br />단 하나의 테스트를 해야하는데, 평소 나의 모습을 테스트하여 나와 적합한 히어로의 직무를 맡게 된다.
        </p>
        <button
          onClick={() => {
            setMbti("");
            navigate("/1");
          }}
          className="bg-white opacity-50 pl-[6vw] pr-[6vw] sm:pl-[4vw] sm:pr-[4vw] pt-[1rem] pb-[1rem] sm:pt-[2vw] sm:pb-[2vw] rounded-[1vw] mt-12 text-[1rem] sm:text-[1vw]"
        >
          테스트 시작하기
        </button>
      </div>
    </div>
  );
}

export default Main;
