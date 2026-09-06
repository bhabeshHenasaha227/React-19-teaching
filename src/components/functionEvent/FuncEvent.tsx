import type { ChangeEvent } from "react";

export default function FuncEvent() {
  function getName(myname: string): string {
    return myname;
  }
  // same thing with Arrow function lets see whether we can do that one or not ?
  const anotherGetname = (myname: string): string => {
    return myname;
  };
  const handleClick = () => alert(`hi it has been clicked `);
  // now lets create one function
  //  which will console log the value of the input box
  function inputValue(e: ChangeEvent<HTMLInputElement>) {
    console.log("value is ", e.target.value);
    return e.target.value;
  }

  const name = "Bhabesh Saha";
  return (
    <>
      <h1>Hi, My name is {getName(name)} </h1>
      <h1>Hi, My name is {anotherGetname(name)} </h1>
      <div>
        <button onClick={handleClick}>clickme</button>
      </div>
      <div>
        <input
          type="text"
          name="firstName"
          id="firstname"
          placeholder="enter your fullname"
          onChange={inputValue}
        />
      </div>
    </>
  );
}
