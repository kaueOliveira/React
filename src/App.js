import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h1>Contador</h1>

      <div>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <span>{state.count}</span>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
      </div>
    </div>
  );
}
