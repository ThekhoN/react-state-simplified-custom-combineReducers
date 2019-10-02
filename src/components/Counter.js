import React from "react";
import styled from "styled-components";
import { Store } from "../index";
import {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  RESET_COUNT
} from "../state-modules/counter/actions";

const CounterWrapper = styled.div`
  button {
    padding: 0.3rem 0.6rem;
    margin: 0.3rem;
    border-radius: 0.3rem;
    font-size: 0.675rem;
  }
`;

export const Counter = () => {
  const [state, dispatch] = React.useContext(Store);
  const incrementCount = () => dispatch({
    type: INCREMENT_COUNT
  })
  const decrementCount = () => dispatch({
    type: DECREMENT_COUNT
  })
  const resetCount = () => dispatch({
    type: RESET_COUNT
  })
  return (
    <CounterWrapper>
      <h4>
        Count: <span>{state.counter.value}</span>
      </h4>
      <br />
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
      <button onClick={resetCount}>Reset Count</button>
    </CounterWrapper>
  );
}

export default Counter;
