export default function Chips({ updateBet, tempBet, settempBet, e }) {
  return (
    <div>
      <div id="bet">
        <img onClick={() => updateBet(1)} src={"/images/White.png"} />

        <img onClick={() => updateBet(5)} src={"/images/Red.png"} />

        <img onClick={() => updateBet(25)} src={"/images/Green.png"} />

        <img onClick={() => updateBet(100)} src={"/images/Black.png"} />

        <img onClick={() => updateBet(500)} src={"/images/Purple.png"} />

        <img onClick={() => updateBet(1000)} src={"/images/Orange.png"} />

        <p> $1 </p>
        <p> $5 </p>
        <p> $25 </p>
        <p> $100 </p>
        <p> $500 </p>
        <p> $1,000 </p>
      </div>

      <div id="bet-output">
        <p>Current Bet: ${tempBet.toLocaleString()}</p>
        <button onClick={() => settempBet(0)}>Clear</button>
        {tempBet != 0 ? (
          <button onClick={() => endbetting()}>Done</button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}