import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState, useRef, useEffect } from "react";
import Confetti from "react-confetti";
function App() {
  const [accepted, setAccepted] = useState(false);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [show, setShow] = useState(false);
  const confettiRef = useRef(null);

  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, []);

  const handleClick = () => {
    setAccepted(!accepted);
    setShow(!show);
  };

  return (
    <div className="App" ref={confettiRef}>
      {/* Removed line #27 - #32 to remove confetti */}
      <Confetti
        recycle={show}
        numberOfPieces={180}
        width={width}
        height={height}
      ></Confetti>
      <Header accepted={accepted} show={show} width={width} height={height} />
      <Main handleClick={handleClick} />
      <Footer />
    </div>
  );
}

export default App;
