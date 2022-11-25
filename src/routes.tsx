import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Main from './views/Main'
import GlobalContextProvider from './contexts/GlobalContextProvider'
import useUser from './hooks/useUser'

type Props = {
  redirectTo: string
}

function ProtectedRoutes({redirectTo}: Props) {
  const { token } = useUser();

  return token ? <Outlet/> : <Navigate to={redirectTo} />
}

function MainRoutes() {
  return (
    <GlobalContextProvider>
      <Routes>
        <Route path='/' element={<h1>login</h1>} />

        {/* rotas aqui dentro são rotas protegidas */}
        <Route element={<ProtectedRoutes redirectTo='/'/>} >
          <Route path='/main' element={<Main/>} />
        </Route> 

        <Route path='*' element={<h1>404</h1>} />

      </Routes>
    </GlobalContextProvider>
  )
}

export default MainRoutes