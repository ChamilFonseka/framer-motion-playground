import { useState } from "react";
import Main from "./components/Main";
import Basics from "./components/Basics";
import Gestures from "./components/Gestures";
import UseAnimate from "./components/UseAnimate";

function App() {
  const [componentName, setComponentName] = useState('Basics');
  const [componentList] = useState([
    Basics.name,
    Gestures.name,
    UseAnimate.name,
  ]);

  return (
    <main className="container mx-auto">
      <Main setComponentName={setComponentName} componentList={componentList} />
      <hr />
      {componentName === 'Basics' && (
        <Basics />
      )}
      {componentName === 'Gestures' && (
        <Gestures />
      )}
      {componentName === 'UseAnimate' && (
        <UseAnimate />
      )}
    </main>
  );
}

export default App;
