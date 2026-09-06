// import ArrObj from "./components/arrayandobject/ArrObj"
import Comp from "./components/Comp"
import Button from "./components/prop/Button";
import Props from "./components/prop/Props"
// import ConditionalRendering from "./components/conditionalrendering/ConditionalRendering"
// import Css from "./components/css-use-example/Css"
// import FuncEvent from "./components/functionEvent/FuncEvent"
function App() {
  const age=20;
  function message(){
    alert("hi this is Bhabesh")
  }
  function byeMessage(){
    alert("hi Bye")
  }
  return (
    <>
      <section id="center">
        <Comp>
          {/* <h1>this is inside comp component</h1> */}
          {/* <Css/> */}
          {/* <FuncEvent/> */}
          {/* <ArrObj/> */}
          {/* <ConditionalRendering/> */}
          <Props name="Bhabesh" age={age}/>
          <Button label="Hi me" handleClick={message}/>
           <Button label="Bye Me" handleClick={byeMessage}/>

        </Comp>
      </section>

    </>
  )
}

export default App
