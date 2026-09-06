

import type { ReactElement } from "react";

export default function ConditionalRendering() {
    // usually we take this one from api but for the demonstartion pupose we are using this 
    const isLoggedIn:boolean=true;
 
 function displayMessage(isLoggedIn:boolean):ReactElement{
        const message:React.JSX.Element=isLoggedIn ?<h1>Hi I am logged In </h1>:<h1>Please logged in  </h1>
        return message;

    }
 
 
    return (
      <div>
        {displayMessage(isLoggedIn)}
      </div>
    )
}
