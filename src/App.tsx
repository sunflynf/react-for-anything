import { useState } from "react";

import { Button } from "./components/Button";
import { Block } from "./components/Block";

function App() {
  const [count, setCount] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(false);

  return (
    <Block.Flex>
      <h1 className="w-[100%]">Counter: {count}!</h1>
      <Button
        // className="my-[20px]"
        onClick={() => setDisabled((prev) => !prev)}
      >
        Disabled
      </Button>
      <Button onClick={() => setCount((prev) => prev + 1)} disabled={disabled}>
        Click
      </Button>
      <Block.Flex fluid className="mt-[10px] w-[100%] gap-[3px]">
        <Button variant="primary">Note</Button>
        <Button variant="secondary">Note</Button>
        <Button variant="success">Note</Button>
        <Button variant="warning">Note</Button>
        <Button variant="danger">Note</Button>
        <Button variant="info">Note</Button>
        <Button variant="light">Note</Button>
        <Button variant="dark">Note</Button>
      </Block.Flex>
    </Block.Flex>
  );
}

export default App;
