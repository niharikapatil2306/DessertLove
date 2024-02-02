import { useState } from "react";
import { SessionContext } from "./Context";

export default function SessionProvider( {children} ) {
    
    const [user, setUser] = useState(null);

    // const[count, setCount] = useState(0);

    return(
        <SessionContext.Provider value={{user, setUser}}>
                {children}
        </SessionContext.Provider>
    );
    
}
