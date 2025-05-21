import { useReducer } from "react";

type State = {
  isDark: boolean;
  fSize: number;
};

type Action =
  | { type: "TOGGLE_DARK" }
  | { type: "INCREASE_FONT" }
  | { type: "DECREASE_FONT" };

const initialState: State = {
  isDark: false,
  fSize: 16,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "TOGGLE_DARK":
      return { ...state, isDark: !state.isDark };
    case "INCREASE_FONT":
      return { ...state, fSize: state.fSize + 1 };
    case "DECREASE_FONT":
      return { ...state, fSize: state.fSize - 1 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const themeClass = state.isDark ? "bg-black text-white" : "bg-white text-black";

  return (
    <div className={`min-h-screen p-8 ${themeClass}`} style={{ fontSize: `${state.fSize}px` }}>
      <p>Hello World.</p>

      <div className="mt-4 space-x-4">
        <button
          onClick={() => dispatch({ type: "TOGGLE_DARK" })}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Toggle Dark Mode
        </button>

        <button
          onClick={() => dispatch({ type: "INCREASE_FONT" })}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Increase Font Size
        </button>

        <button
          onClick={() => dispatch({ type: "DECREASE_FONT" })}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrease Font Size
        </button>
      </div>
    </div>
  );
}

export default App;
