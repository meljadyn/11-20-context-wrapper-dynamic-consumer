import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

export default function Match() {
  const [match, setMatch] = useState(false);
  const { sign } = useContext(HoroscopeContext);

  console.log(sign);

  return (
    <div>
      <button onClick={() => setMatch(!match)}>Display Match</button>
      {match && <h3>Match: {sign.match}</h3>}
    </div>
  );
}
