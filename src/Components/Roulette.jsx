import GameHeader from "./GameHeader";
import RouletteBet from "./RouletteBet";
import { useEffect, useState } from "react";
import "./Roulette.css";
import { Wheel } from "react-custom-roulette";

export default function Roulette({ score, updateScore }) {
  const possibilities = [
    { option: "0" },
    { option: "28" },
    { option: "9" },
    { option: "26" },
    { option: "30" },
    { option: "11" },
    { option: "7" },
    { option: "20" },
    { option: "32" },
    { option: "17" },
    { option: "5" },
    { option: "22" },
    { option: "34" },
    { option: "15" },
    { option: "3" },
    { option: "24" },
    { option: "36" },
    { option: "13" },
    { option: "1" },
    { option: "00" },
    { option: "27" },
    { option: "10" },
    { option: "25" },
    { option: "29" },
    { option: "12" },
    { option: "8" },
    { option: "19" },
    { option: "31" },
    { option: "18" },
    { option: "6" },
    { option: "21" },
    { option: "33" },
    { option: "16" },
    { option: "4" },
    { option: "23" },
    { option: "35" },
    { option: "14" },
    { option: "2" },
  ];

  const red = [
    "1",
    "3",
    "5",
    "7",
    "9",
    "12",
    "14",
    "16",
    "18",
    "19",
    "21",
    "23",
    "25",
    "27",
    "30",
    "32",
    "34",
    "36",
  ];
  const colors = [
    "green",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "green",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
  ];

  const [spinValue, setSpinValue] = useState(null);
  const [winners, setWinners] = useState([]);
  const [betList, setBetList] = useState(new Map());
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeIndex, setPrizeIndex] = useState(0);

  function Spin() {
    const randomIndex = Math.floor(Math.random() * possibilities.length);
    setMustSpin(true);
    setPrizeIndex(randomIndex);
    setSpinValue(null);
  }

  function getWinners(spinResult) {
    const tempWinners = [];
    const spinNum = Number(spinResult);

    tempWinners.push(spinResult);

    spinNum < 13
      ? tempWinners.push("1st 12")
      : spinNum < 25
      ? tempWinners.push("2nd 12")
      : tempWinners.push("3rd 12");

    spinNum % 2 === 0 ? tempWinners.push("Even") : tempWinners.push("Odd");

    spinNum < 19 ? tempWinners.push("1 - 18") : tempWinners.push("19 - 36");

    red.includes(spinResult)
      ? tempWinners.push("Red")
      : tempWinners.push("Black");

    spinNum % 3 === 0
      ? tempWinners.push("3rd col")
      : spinNum % 3 === 1
      ? tempWinners.push("1st col")
      : tempWinners.push("2nd col");

    setWinners(tempWinners);
  }

  const handleSpinComplete = () => {
    const result = possibilities[prizeIndex].option;
    setSpinValue(result);
    getWinners(result);
    setMustSpin(false);
  };

  return (
    <div id="rbody">
      <GameHeader title="🔴 Roulette ⚫" score={score} />
      <div id="main">
        {/* Roulette Wheel Section */}
        <div className="Roulette">
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeIndex}
            data={possibilities}
            backgroundColors={colors}
            textColors={["white"]}
            onStopSpinning={handleSpinComplete} // Trigger after spinning
            fontSize={20}
            perpendicularText={true}
            textDistance={90}
          />
          <button onClick={() => Spin()}>Spin</button>
          {spinValue && (
            <div className="winners-display">
              <div>Spin Result: {spinValue}</div>
              <div>Winners: {winners.join(", ")}</div>
            </div>
          )}
        </div>

        {/* Roulette Table Section */}
        <div id="roulette-table" className="middle"></div>

        {/* Betting Section */}
        <div className="betting">
          <RouletteBet betList={betList} setBetList={setBetList} />
        </div>
      </div>
    </div>
  );
}
