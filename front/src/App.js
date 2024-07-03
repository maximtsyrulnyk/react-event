import {useRef, useEffect, useState, useMemo, useCallback} from "react";

import Page from "./component/page";

function Child({state}) {
  const handleClick = useCallback(() => alert(state), [state]);

  console.log("render");

  useEffect(() => {
    console.log("new handleClick")
  },[handleClick])

  return <div onClick={handleClick}>Click</div>;
}

function App() {
  const [state, setState] = useState(0);

  const [state2, setState2] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setState((prev) => prev + 1), 1000);

    const id2 = setInterval(() => setState2((prev) => prev + 1), 5000);

    return () => {
      clearInterval(id);
      clearInterval(id2);
    };
  }, []);


  return (<Page>Hello world {state} <Child state={state2} /></Page>);
}

export default App;