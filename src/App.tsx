import { useState } from "react";
import Main from "./components/Main";
import Basics from "./components/Basics";
import Gestures from "./components/Gestures";
import UseAnimate from "./components/UseAnimate";
import Variants from "./components/Variants";
import InView from "./components/InView";

function App() {
  const [componentName, setComponentName] = useState('Basics');
  const [componentList] = useState([
    Basics.name,
    Gestures.name,
    UseAnimate.name,
    Variants.name,
    InView.name,
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
      {componentName === 'Variants' && (
        <Variants />
      )}
      {componentName === 'InView' && (
        <InView />
      )}
    </main>
  );
}

export default App;
