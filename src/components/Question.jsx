import React, { useEffect, useRef, useState } from "react";
import marvelDetailImg from "../assets/images/marvleDetail.jpeg";
import axios from "axios";
import { useRecoilState } from "recoil";
import { questionState } from "../states/questionState";
import { mbtiState } from "../states/mbtiState";
import { useNavigate } from "react-router-dom";

function Question() {
  const [data, setData] = useRecoilState(questionState);
  const [mbti, setMbti] = useRecoilState(mbtiState);
  const [next, setNext] = useState(0);
  const [Lnum, setLNum] = useState(0);
  const [Rnum, setRNum] = useState(0);
  const [gauge, setGauge] = useState(0);

  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    axios
      .get("/marvel_test/data/question.json")
      .then((res) => {
        console.log(res);
        setData(res.data.question[next]);
        if (res.data.question[next].id === 6) {
          if (Lnum < Rnum) {
            setMbti(() => [...mbti, "I"]);
          }
          if (Lnum > Rnum) {
            setMbti(() => [...mbti, "E"]);
          }
          setLNum(0);
          setRNum(0);
        }
        if (res.data.question[next].id === 11) {
          if (Lnum < Rnum) {
            setMbti(() => [...mbti, "N"]);
          }
          if (Lnum > Rnum) {
            setMbti(() => [...mbti, "S"]);
          }
          setLNum(0);
          setRNum(0);
        }
        if (res.data.question[next].id === 16) {
          if (Lnum < Rnum) {
            setMbti(() => [...mbti, "T"]);
          }
          if (Lnum > Rnum) {
            setMbti(() => [...mbti, "F"]);
          }
          setLNum(0);
          setRNum(0);
        }
        if (res.data.question[next].id === 21) {
          navigate("/Result");
          if (Lnum < Rnum) {
            setMbti(() => [...mbti, "J"]);
          }
          if (Lnum > Rnum) {
            setMbti(() => [...mbti, "P"]);
          }
          setMbti((v) => v.join(""));
          setLNum(0);
          setRNum(0);
        }
      })
      .catch((err) => console.log(err));
  }, [next]);

  console.log(mbti);
  const choiceClick = () => {
    setNext((v) => v + 1);
    if (data.id > 5 && next % 2 === 0) {
      ref.current.style = "flex-direction: row-reverse";
    } else {
      ref.current.style = "flex-direction: row";
    }
  };
  const LeftNumber = () => {
    setLNum((v) => v + 1);
    console.log(gauge);
  };
  const RightNumber = () => {
    setRNum((v) => v + 1);
    console.log(gauge);
  };

  console.log(data);
  console.log(Lnum);
  console.log(Rnum);
  return (
    <div className="bg-white z-10 opacity-95 pr-8">
      <img
        src={marvelDetailImg}
        alt="마블 디테일 배경이미지"
        className="fixed z-[-1] top-0 bottom-0 w-screen h-screen opacity-70 blur"
      />
      <div className="absolute top-8 left-[-25%] translate-x-1/2 w-9/12 h-2 border-2 border-black border-solid">
        <div
          style={{ width: `${gauge}%`, transition: "1s" }}
          className={`absolute top-0 left-[-1px] h-1 bg-black`}
        ></div>
      </div>
      <div className="flex justify-center flex-col items-center w-100% h-screen">
        <span className="text-2xl">{data.text}</span>
        <div ref={ref} className="mt-40 flex">
          <span
            onClick={() => {
              choiceClick();
              LeftNumber();
              setGauge((v) => v + 5);
            }}
            className="btn mr-8"
          >
            {data.choice1}
          </span>
          <span
            onClick={() => {
              choiceClick();
              RightNumber();
              setGauge((v) => v + 5);
            }}
            className="btn mr-8"
          >
            {data.choice2}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Question;
