import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Main from './views/Home/Home'
import GlobalContextProvider from './contexts/GlobalContextProvider'
import useUser from './hooks/useUser'
import Login from './views/Login/Login'
import Home from './views/Home/Home'
import Requests from './views/Requests/Requests'
import Explore from './views/Explore/Explore'
import MyAccount from './views/MyAccount/MyAccount'
import Cart from './views/Cart/Cart'

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
        <Route path='/login' element={<Login />} />
        <Route path='/explorar' element={<Explore />} />

        {/* rotas aqui dentro são rotas protegidas */}
        <Route element={<ProtectedRoutes redirectTo='/explorar'/>} >
          <Route path='/' element={<Home/>} />
          <Route path='/pedidos' element={<Requests/>} />
          <Route path='/minha-conta' element={<MyAccount/>} />
          <Route path='/carrinho' element={<Cart/>} />
        	<Route path='*' element={<h1>404</h1>} />
        </Route> 


      </Routes>
    </GlobalContextProvider>
  )
}

export default MainRoutes