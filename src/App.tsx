import { useState } from "react";
import Main from "./components/Main";
import Basics from "./components/Basics";

function App() {
  const [componentName, setComponentName] = useState('Basics');
  const [componentList] = useState([
    Basics.name,
  ]);

  return (
    <main className="container mx-auto">
      <Main setComponentName={setComponentName} componentList={componentList} />
      <hr />
      {componentName === 'Basics' && (
        <Basics />
      )}
    </main>
  );
}

export default App;
