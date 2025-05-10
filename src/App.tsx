import { useState } from "react";
import Main from "./components/Main";
import Basics from "./components/Basics";
import Gestures from "./components/Gestures";

function App() {
  const [componentName, setComponentName] = useState('Basics');
  const [componentList] = useState([
    Basics.name,
    Gestures.name,
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
    </main>
  );
}

export default App;
