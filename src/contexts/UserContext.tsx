import { Dispatch, SetStateAction, useState } from "react"
import GlobalContext from "./GlobalContext"

type Props ={
  children: JSX.Element
}

type UserPriver = {
  count: number,
  setCount: Dispatch<SetStateAction<number>>
}

function UserProvider(props: Props) {
  const [count, setCount] = useState<number>(0)

  const providerValues: UserPriver = {
    count,
    setCount
   }

  return (
  <GlobalContext.Provider value={providerValues}>
    {props.children}
  </GlobalContext.Provider>)
}

export default UserProvider