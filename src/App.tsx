// import ArrObj from "./components/arrayandobject/ArrObj"
import Comp from "./components/Comp"
import ConditionalRendering from "./components/conditionalrendering/ConditionalRendering"
// import Css from "./components/css-use-example/Css"
// import FuncEvent from "./components/functionEvent/FuncEvent"
function App() {
  return (
    <>
      <section id="center">
        <Comp>
          {/* <h1>this is inside comp component</h1> */}
          {/* <Css/> */}

          {/* <FuncEvent/> */}
          {/* <ArrObj/> */}
          <ConditionalRendering/>
        </Comp>
      </section>

    </>
  )
}

export default App
