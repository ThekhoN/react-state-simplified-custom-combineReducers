import React from "react";
import Counter from "./components/Counter";
import ThemeSelector from "./components/Theme-selector";
import ThemeWrapper from "./components/Theme-wrapper";

const App = () => {
  return (
    <ThemeWrapper>
      <ThemeSelector />
      <Counter />
    </ThemeWrapper>
  );
};

export default App;
