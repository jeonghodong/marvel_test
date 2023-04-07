import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { mbtiState } from "../states/mbtiState";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Marvel from "../assets/images/MarvelBg.jpeg";
import Loading from "./Loading";

function Close() {
  const [mbti, setMbti] = useRecoilState(mbtiState);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/marvel_test/data/result.json")
      .then((res) => {
        const newData = res.data.result.find((v) => v.mbti === mbti);
        setData(newData);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleConfirm = () => {
    navigate("/marvel_test");
    setMbti("");
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-black text-white z-10 opacity-95 w-100 h-screen flex justify-center items-center flex-col">
          <img
            className="fixed top-0 left-0 z-[-1] opacity-80 blur w-screen h-screen"
            src={Marvel}
            alt="마블의 배경그림"
          />
          <h2 className="p-5">
            {data.answer === "타노스" ? "헉! 당신은 최고의 빌런이었군요!" : "당신이 히어로가 된다면??"}
          </h2>
          <span className="p-12">{data.answer}</span>
          <img className="w-96 h-96 rounded-xl border border-white border-solid" src={data.image} alt="img" />
          <span onClick={handleConfirm} className="pl-8 pr-8 pt-4 pb-4 bg-blue-600 rounded-2xl text-white mt-8">
            확인
          </span>
        </div>
      )}
    </>
  );
}

export default Close;
