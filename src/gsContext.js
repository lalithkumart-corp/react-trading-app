import { createContext } from "react";
import { useSelector } from 'react-redux';

export const GsContext = createContext();

export const GsProvider = (props) => {
    const userName = useSelector((state)=> state.auth.userName);
    return (
        <GsContext.Provider value={{userNameFromCtx: userName}}>
            {props.children}
        </GsContext.Provider>
    )
}
export const GsConsumer = GsContext.Consumer;
