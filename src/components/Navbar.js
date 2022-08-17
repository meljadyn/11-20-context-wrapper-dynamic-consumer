import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";
import horoscopesObj from "../data/horoscopes";

const Navbar = () => {
  const horoscopes = Object.keys(horoscopesObj);
  const { setCurrentSign } = useContext(HoroscopeContext);
  console.log("navbar is rendering");

  return (
    <nav>
      {horoscopes.map((sign) => (
        <span onClick={() => setCurrentSign(sign)} key={sign}>
          {sign}
        </span>
      ))}
    </nav>
  );
};

export default Navbar;
