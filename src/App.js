import "./App.css";
import HookCounter1 from "./Hooks/UseEffect/HookCounter1";
import HookCounter2 from "./Hooks/UseEffect/HookCounter2";
import HookMouse from "./Hooks/UseEffect/HookMouse";
import IntervalHookCounter from "./Hooks/UseEffect/IntervalHookCounter";
import MouseContainer from "./Hooks/UseEffect/MouseContainer";
import UseReducerCounter from "./Hooks/UseReducer/UseReducerCounter";
import UseReducerCounter1 from "./Hooks/UseReducer/UseReducerCounter_1";

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <HookObject /> */}
      {/* <HooksArrray />  */}
      {/* <HookCounter1 /> */}
      {/* <HookCounter2 /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      {/* <UseReducerCounter /> */}
      <UseReducerCounter1 />
    </div>
  );
}

export default App;
