export default function RouletteAction({
  writtenBet,
  Spin,
  spinValue,
  winners,
  resultScore,
}) {
  return (
    <>
      {writtenBet != "" && <button onClick={() => Spin()}>Spin</button>}
      {spinValue != "37" && (
        <div className="winners-display">
          <h2>Spin Result: {spinValue}</h2>
          <h3>Winners: {winners.join(", ")}</h3>
          <h3>
            {resultScore > 0 ? "You won" : "You lost"}: $
            {Math.abs(resultScore).toLocaleString()}
          </h3>
        </div>
      )}
      {writtenBet != "" && <h4>Current Bet(s): {writtenBet}</h4>}
    </>
  );
}
