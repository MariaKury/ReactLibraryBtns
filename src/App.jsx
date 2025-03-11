import { useState } from "react";
import "./index.css";
import Header from "./compoments/Header";
import Instructions from "./compoments/Instructions";
import Main from "./compoments/Main";
import Footer from "./compoments/Footer";

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions((prev) => !prev);
  };

  return (
    <div className="app">
      <Header
        showInstructions={showInstructions}
        toggleInstructions={toggleInstructions}
      />
      <Instructions showInstructions={showInstructions} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
