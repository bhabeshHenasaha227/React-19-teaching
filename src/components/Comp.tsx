import type { ReactNode } from "react";

function Comp({ children }:{children:ReactNode}) {
    const  name:string="Bhabesh saha";
    return(
        <>
        <h1>this is my first component {name}</h1>
        {children}
        </>
    )
}

export default Comp