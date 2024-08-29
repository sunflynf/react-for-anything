import { useState } from "react";

import { Button } from "./components/Button";
import { Block } from "./components/Block";

function App() {
  const [count, setCount] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(false);

  return (
    <Block>
      <h1>Counter: {count}!</h1>
      <Button
        className="my-[20px]"
        onClick={() => setDisabled((prev) => !prev)}
      >
        Disabled
      </Button>
      <br />
      <Button onClick={() => setCount((prev) => prev + 1)} disabled={disabled}>
        Click
      </Button>
    </Block>
  );
}

export default App;
