import React, { useState } from "react";
import Bubble1 from "./lib/Bubble1";
import Bubble2 from "./lib/Bubble2";
import Bubble3 from "./lib/Bubble3";
import Bubble4 from "./lib/Bubble4";
import Bubble5 from "./lib/Bubble5";
import Jelly from "./lib/Jelly";
import Pulse from "./lib/Pulse";
import Shine from "./lib/Shine";
import Slide from "./lib/Slide";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Bubble1 />
      <Bubble2 />
      <Bubble3 />
      <Bubble4 />
      <Bubble5 />
      <br />
      <Jelly />
      <Pulse />
      <Shine />
      <br />
      <Slide />
    </div>
  );
};

export default App;
