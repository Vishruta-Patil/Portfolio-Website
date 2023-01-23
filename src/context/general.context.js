import { createContext, useContext, useState } from "react";

const GeneralContext = createContext()
const useGeneral = () => useContext(GeneralContext)

const GeneralProvider = ({children}) => {
    const [projectItem, setProjectItem] = useState({})
    const [nav, setNav] = useState(false)
    return (
        <GeneralContext.Provider value={{projectItem, setProjectItem, nav, setNav}}>
            {children}
        </GeneralContext.Provider>
    )
}

export {useGeneral, GeneralProvider}