import useGlobalContextProvider from "../hooks/useGlobalContextProvider"
import GlobalContext from "./GlobalContext"

type Props ={
  children: JSX.Element
}

function GlobalContextProvider(props: Props) {

  return (
  <GlobalContext.Provider value={useGlobalContextProvider()}>
    {props.children}
  </GlobalContext.Provider>)
}

export default GlobalContextProvider