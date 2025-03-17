import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Button from "./components/Button";

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
      <Main>
        <Section title="Variants">
          <Button variant="primary" text="Primary" />
          <Button variant="secondary" text="Secondary" />
          <Button variant="danger" text="Danger" />
          <Button variant="gradient" text="Gradient" />
          <Button variant="outline" text="Outline" />
        </Section>
        <Section title="Sizes">
          <Button size="small" text="Small" />
          <Button size="medium" text="Medium" />
          <Button size="large" text="Large" />
        </Section>
        <Section title="Button States">
          <Button text="Default" />
          <Button isDisabled text="Disabled" />
        </Section>
        <Section title="Full Width Button">
          <Button text="Full Width" variant="secondary" fullWidth />
        </Section>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
